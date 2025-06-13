import AddGameForm from "../Components/AddGameForm";
import Table from "../Components/Table";
import { useState } from "react";

export default function GameTracker(props) {
  const [showForm, setShowForm] = useState(false);

  function toggleForm() {
    setShowForm(!showForm);
  }

  return (
    <>
      <h2>Game Tracker</h2>
      <Table gameData={props.gameData} />
      <button onClick={() => toggleForm}>Add Game</button>
      {showForm ? (
        <>
          <AddGameForm />
        </>
      ) : null}
    </>
  );
}
