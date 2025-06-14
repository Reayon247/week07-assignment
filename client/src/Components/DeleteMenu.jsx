import "../Styles/DeleteMenu.css";

export default function DeleteMenu(props) {
  return (
    <div className="deletemenu">
      <p>Are you sure you want to delete {props.gameName}?</p>
      <div className="buttons">
        <button onClick={props.onConfirmDelete} className="yesbutton">
          Yes
        </button>
        <button onClick={props.onCancel} className="nobutton">
          No
        </button>
      </div>
    </div>
  );
}
