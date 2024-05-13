import { db } from "../../db";
import Repository from "./set/then_repository";

jest.mock("../db");

describe("then_repository: get db.execute and apply jest.mockRejectedValue to method", () => {
  const mockedExeute = db.execute as jest.Mock<any>;
  const errorLog = jest.spyOn(console, "error");
  const errorCallback = jest.fn((err: any) => err);
  const data = new Repository();

  test("will return callback and console outputs error message if error occur", async () => {
    mockedExeute.mockRejectedValue(new Error("No"));

    await data.delete(1, errorCallback).catch((error: any) => {
      expect(error.message).toBe("No");
      expect(errorLog).toHaveBeenCalled();
      expect(errorCallback).toHaveBeenCalled();
    });
  });
});
