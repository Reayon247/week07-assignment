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

app.get("/gametracker", async (req, res) => {
  try {
    const data = await db.query("SELECT * FROM gametracker");
    res.json(data.rows);
  } catch (error) {
    console.log("Error, check DB string and password");
    res.status(500).json({ success: false });
  }
});

//TODO I want to Create new data for my game tracker

app.post("/addgame", (req, res) => {
  const { game_name, started, finished, ongoing, rating, thumbnail, hours } =
    req.body;

  try {
    const insert = db.query(
      `INSERT INTO gametracker (game_name, started, finished, ongoing, rating, thumbnail, hours) VALUES ($1,$2,$3,$4,$5,$6,$7)`,
      [game_name, started, finished, ongoing, rating, thumbnail, hours]
    );
    res.status(200).json({ success: true });
  } catch (error) {
    console.log("Error, info failed to send to the database");
    res.status(500).json({ success: false });
  }
});

//TODO I want to delete games from my table

app.delete("/deleteGame/:id", (req, res) => {
  const gameId = req.params.id;

  try {
    const deleteGame = db.query(`DELETE FROM gametracker WHERE id = $1`, [
      gameId,
    ]);
    res.status(200).json({ success: true });
  } catch (error) {
    console.log("Error, failed to delete data");
    res.status(500).json({ success: false });
  }
});
