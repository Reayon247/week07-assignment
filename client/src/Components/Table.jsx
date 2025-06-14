import { useState } from "react";
import "../Styles/Table.css";
import DeleteMenu from "./DeleteMenu";

export default function Table(props) {
  const games = props.gameData;

  //Handle the delete

  async function handleDelete(gameId) {
    await fetch(`${import.meta.env.VITE_DELETE_URL}/${gameId}`, {
      method: "DELETE",
    });
    closeMenu();
    props.getGames();
  }

  //Pop up menu - delete confirmation

  let [showMenu, setShowMenu] = useState(false);
  const [selectedGameId, setSelectedGameId] = useState(null);
  const [selectedGameName, setSelectedGameName] = useState(null);

  function openMenu(gameId, gameName) {
    setShowMenu(true);
    setSelectedGameId(gameId);
    setSelectedGameName(gameName);
  }

  function closeMenu() {
    setShowMenu(false);
    setSelectedGameId(null);
    setSelectedGameName(null);
  }
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
                <td className="deletecell">
                  <button
                    className="deletebutton"
                    onClick={() => openMenu(game.id, game.game_name)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {showMenu ? (
        <DeleteMenu
          gameId={selectedGameId}
          gameName={selectedGameName}
          onConfirmDelete={() => handleDelete(selectedGameId)}
          onCancel={closeMenu}
        />
      ) : null}
    </>
  );
}
