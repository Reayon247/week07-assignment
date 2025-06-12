import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./Pages/Home";
import GameTracker from "./Pages/GameTracker";
import NotFound from "./Pages/NotFound";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/*"} element={<NotFound />} />
        <Route path={"/"} element={<Home />} />
        <Route path={"/gametracker"} element={<GameTracker />} />
      </Routes>
    </>
  );
}
