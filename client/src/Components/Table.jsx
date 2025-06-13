import "../Styles/Table.css";

export default function Table(props) {
  const games = props.gameData;
  return (
    <>
      <table className="table">
        <thead>
          <tr className="tablerow">
            <th className="tableheader">Game Names</th>
            <th className="tableheader">Date Started</th>
            <th className="tableheader">Date Finished</th>
            <th className="tableheader">Ongoing</th>
            <th className="tableheader">Game Rating</th>
            <th className="tableheader">Hours Played</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game) => {
            return (
              <tr className="tablerow" key={game.id}>
                <td className="namecell">{game.game_name}</td>
                <td className="datestartcell">{game.started}</td>
                <td className="dateendcell">
                  {game.finished ? game.finished : "N/A"}
                </td>
                <td className="ongoingcell">{game.ongoing ? "✅" : "❌"}</td>
                <td className="ratingcell">{game.rating}</td>
                <td className="hourscell">
                  {game.hours ? game.hours : "Unknown"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
