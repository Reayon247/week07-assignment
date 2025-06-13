import "../Styles/Table.css";

export default function Table(props) {
  const games = props.gameData;
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Game Names</th>
            <th>Date Started</th>
            <th>Date Finished</th>
            <th>Ongoing</th>
            <th>Game Rating</th>
            <th>Hours Played</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game) => {
            return (
              <tr key={game.id}>
                <td>{game.game_name}</td>
                <td>{game.started}</td>
                <td>{game.finished ? game.finished : "N/A"}</td>
                <td>{game.ongoing ? "✅" : "❌"}</td>
                <td>{game.rating}</td>
                <td>{game.hours ? game.hours : "Unknown"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
