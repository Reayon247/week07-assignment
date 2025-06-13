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
    const gamesInterval = setInterval(getGames, 60000);
    return () => clearInterval(gamesInterval);
  }, []);

  const onGoingGames = games.filter((game) => game.ongoing === true);
  console.log(onGoingGames);

  return (
    <>
      <Header />
      <Routes>
        <Route path={"/*"} element={<NotFound />} />
        <Route path={"/"} element={<Home onGoingGames={onGoingGames} />} />
        <Route
          path={"/gametracker"}
          element={<GameTracker gameData={games} />}
        />
      </Routes>
    </>
  );
}
