import { db } from "../../../db";
import { DataHandler, ErrorCallback } from "./then_repository_type";

export default class Repository implements DataHandler {
  constructor() {}
  delete = async (id: number, callback: ErrorCallback) => {
    await db
      .execute("DELETE FROM data WHERE id = ?", [id])
      .catch((error: any) => {
        console.error(error);
        return callback(error);
      });
  };
}
