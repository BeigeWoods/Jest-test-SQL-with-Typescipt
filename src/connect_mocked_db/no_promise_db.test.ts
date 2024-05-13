import { db } from "../db";

jest.mock("../db");

describe("no_promise_db_connection", () => {
  const mockedDB: jest.Mocked<typeof db> = db as any;

  beforeAll(() => {
    try {
      mockedDB.getConnection();
      console.log("DB connect");
    } catch (error) {
      console.error("Failed Connection\n", error);
    }
  });

  afterAll(() => {
    try {
      mockedDB.end();
      console.log("DB disconnect");
    } catch (error) {
      console.error("Failed disconnection\n", error);
    }
  });

  test("return error by wrong type of data", () => {
    try {
      mockedDB.execute("SELECT FROM data WHERE id = ?", ["id"]);
    } catch (error: any) {
      expect(error.message).toBe("Truncated incorrect INTEGER value: 'id'");
    }
  });
});
