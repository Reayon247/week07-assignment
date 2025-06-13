import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./Pages/Home";
import GameTracker from "./Pages/GameTracker";
import NotFound from "./Pages/NotFound";
import Header from "./Components/Header";
import { useEffect, useState } from "react";

export default function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function getGames() {
      const response = await fetch(`${import.meta.env.VITE_READ_URL}`);
      const data = await response.json();
      setGames(data);
      console.log(data);
    }
    getGames();
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path={"/*"} element={<NotFound />} />
        <Route path={"/"} element={<Home gameData={games} />} />
        <Route
          path={"/gametracker"}
          element={<GameTracker gameData={games} />}
        />
      </Routes>
    </>
  );
}
