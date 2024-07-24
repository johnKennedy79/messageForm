import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
//setup the data base so that we can use it
const db = new pg.Pool({
  connectionString: process.env.DATABASE_CONNECTION,
});
app.get("/people", async function (req, res) {
  const result = await db.query("SELECT * FROM PEOPLE");
  const people = result.rows;
  res.json(people);
});
app.listen("8080", () => {
  console.log("listening to port 8080");
});
