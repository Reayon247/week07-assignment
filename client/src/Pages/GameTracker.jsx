import AddGameForm from "../Components/AddGameForm";
import Table from "../Components/Table";
import { useState } from "react";
import "../Styles/GameTracker.css";

export default function GameTracker(props) {
  const [showForm, setShowForm] = useState(false);

  function toggleForm() {
    setShowForm(!showForm);
  }

  return (
    <main className="main">
      <h2 className="trackertitle">Game Tracker</h2>
      <div className="tablecon">
        <Table gameData={props.gameData} className="table" />
      </div>
      <button onClick={() => toggleForm()}>Add Game</button>
      {showForm ? (
        <>
          <AddGameForm getGames={props.getGames} />
        </>
      ) : null}
    </main>
  );
}
