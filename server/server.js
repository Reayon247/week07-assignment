import express from "express";
import cors from "cors";
import { db } from "./utils/dbconnection.js";

// Initial set up - check dbconnection.js as well

const app = express();
app.use(express.json());
app.use(cors());

app.listen(8080, () => {
  console.log("Server is running on port 8080, YIPPPEEEE");
});

app.get("/", (req, res) => {
  res.json({
    message:
      "this is the root route of my game tracker, unless you are me, get out, thanks :)",
  });
});

//TODO I want to READ the data from the game tracker Database
