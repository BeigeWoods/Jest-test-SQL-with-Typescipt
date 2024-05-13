import { db } from "./db";

db.getConnection()
  .then(() => {
    console.log("Success connect with DB");
  })
  .catch((error: any) =>
    console.error("The problem of DB connection\n", error)
  );
