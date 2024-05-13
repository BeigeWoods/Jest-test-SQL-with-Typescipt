This project purpose to study many way to test module in typescript.

### Composition

- _db_ : initialize _mysql2_ by `db` module
- _index_: connect database by `db` module
- _\*\_repository_: module handling sql

### Purpose per test

1. **connect_mocked_db**

   Could be test `db`, but in some cases need to mock.
   For this test, should create `.env` file and set mysql.

   ```
   CREATE TABLE data (id INT NOT NULL PRIMARY KEY UNIQUE)
   ```

3. **mocked_dependence**

   Want to test `Repository` of _\*\_repository_ depends on `db` module.
   Could see how to defind the type about asynchronous module when get or mock it for test.
