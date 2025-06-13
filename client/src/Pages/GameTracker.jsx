import Table from "../Components/Table";

export default function GameTracker(props) {
  return (
    <>
      <h2>Game Tracker</h2>
      <Table gameData={props.gameData} />
    </>
  );
}
