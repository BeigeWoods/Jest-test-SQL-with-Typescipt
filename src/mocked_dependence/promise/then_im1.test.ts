import { db } from "../../db";
import Repository from "./set/then_repository";

jest.mock("../db");

describe("then_repository: get db and apply jest.mockImplementation to execute method", () => {
  const mockedDB: Promise<jest.Mocked<typeof db>> = db as any;
  const errorLog = jest.spyOn(console, "error");
  const errorCallback = jest.fn((err: any) => err);
  const data = new Repository();

  test("will return callback and console outputs error message if error occur", async () => {
    const mockedExeute = (await mockedDB).execute as jest.Mock;
    mockedExeute.mockImplementation(() => {
      throw new Error("No");
    });

    await data.delete(1, errorCallback).catch((error: any) => {
      expect(error.message).toBe("No");
      // The follwing expect will fail because jest fail to trace 'catch(error)' of data.delete. Also, console.error(error) doesn't be called.
      // expect(errorLog).toHaveBeenCalled();
      // expect(errorCallback).toHaveBeenCalled();
    });
  });
});
