import "../Styles/Home.css";

export default function Home(props) {
  return (
    <main className="main">
      <h2>Home - Ongoing Games</h2>
      {props.onGoingGames.map((game) => {
        return (
          <div className="ongoinggames" key={game.id}>
            <img
              src={game.thumbnail}
              alt={game.game_name}
              width={175}
              className="img"
            />
            <h3 className="gamename">{game.game_name}</h3>
            <p className="hours">
              Hours Played:{" "}
              <span className="highlight">
                {game.hours ? game.hours : "Unknown"} Hrs{" "}
              </span>
            </p>
            <p className="date">
              {" "}
              Date Started: <span className="highlight">{game.started}</span>
            </p>
          </div>
        );
      })}
    </main>
  );
}
