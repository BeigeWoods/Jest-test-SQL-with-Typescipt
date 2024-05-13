import { db } from "../db";

jest.mock("../db");

describe("promise_db_connection", () => {
  const mockedDB: Promise<jest.Mocked<typeof db>> = db as any;

  beforeAll(async () => {
    (await mockedDB)
      .getConnection()
      .then(() => console.log("DB connect"))
      .catch((error) => console.error("Failed Connection\n", error));
  });

  afterAll(async () => {
    (await mockedDB)
      .end()
      .then(() => console.log("DB disconnect"))
      .catch((error) => console.error("Failed disconnection\n", error));
  });

  test("return error by wrong type of data", async () => {
    try {
      (await mockedDB).execute("SELECT FROM data WHERE id = ?", ["id"]);
    } catch (error: any) {
      expect(error.message).toBe("Truncated incorrect INTEGER value: 'id'");
    }
  });
});
