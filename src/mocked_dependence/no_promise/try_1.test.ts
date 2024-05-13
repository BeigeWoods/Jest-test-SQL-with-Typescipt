import { db } from "../../db";
import Repository from "./set/try_repository";

jest.mock("../db");

describe("try_repository: get db and apply jest.mockImplementation to execute method", () => {
  const mockedDB: jest.Mocked<typeof db> = db as any;
  const errorLog = jest.spyOn(console, "error");
  const errorCallback = jest.fn((err: any) => err);
  const data = new Repository();

  test("will return callback and console outputs error message if error occur", () => {
    const mockedExeute = mockedDB.execute as jest.Mock;
    mockedExeute.mockImplementation(() => {
      throw new Error("No");
    });

    try {
      data.delete(1, errorCallback);
    } catch (error: any) {
      expect(error.message).toBe("No");
      expect(errorLog).toHaveBeenCalled();
      expect(errorCallback).toHaveBeenCalled();
    }
  });
});
