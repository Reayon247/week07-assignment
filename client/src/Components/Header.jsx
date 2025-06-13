import "../Styles/Header.css";

export default function Header() {
  return (
    <header className="header">
      <h1 className="title">Ryan's Epic Gamer Tracker</h1>
      <nav className="nav">
        <ul className="linklist">
          <li>
            <a href="/" className="links">
              Home
            </a>
          </li>
          <li>
            <a href="/gametracker" className="links">
              Game Tracker
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
