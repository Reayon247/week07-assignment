import { useState } from "react";
import "../Styles/Form.css";

export default function AddGameForm() {
  const [formData, setFormData] = useState({
    game_name: "",
    started: "",
    finished: "",
    ongoing: "",
    rating: "",
    thumbnail: "",
    hours: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    fetch(`${import.meta.env.VITE_POST_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    console.log(formData);
  }

  function handleFormData(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  return (
    <form className="addNewGameForm" onSubmit={handleSubmit}>
      <fieldset className="form">
        <label htmlFor="game_name">Game Name</label>
        <input
          type="text"
          name="game_name"
          required
          placeholder="Enter Game Name"
          value={formData.game_name}
          onChange={handleFormData}
        />
        <label htmlFor="started">When did you start playing?</label>
        <input
          type="date"
          name="started"
          required
          value={formData.started}
          onChange={handleFormData}
        />
        <label htmlFor="finished">
          When did you finish playing?(leave blank if still playing)
        </label>
        <input
          type="date"
          name="finished"
          value={formData.finished}
          onChange={handleFormData}
        />
        <p>Are you still playing it?</p>
        <label htmlFor="ongoing">
          <input
            type="radio"
            name="ongoing"
            required
            value="TRUE"
            checked={formData.ongoing === "TRUE"}
            onChange={handleFormData}
          />
          True
        </label>
        <label htmlFor="ongoing">
          <input
            type="radio"
            name="ongoing"
            required
            value="FALSE"
            checked={formData.ongoing === "FALSE"}
            onChange={handleFormData}
          />
          False
        </label>
        <div>
          <p>Rating between 1-5</p>
          <label className="rating" htmlFor="rating">
            <input
              type="radio"
              name="rating"
              required
              value="1"
              checked={formData.rating === "1"}
              onChange={handleFormData}
            />
            1
          </label>
          <label className="rating" htmlFor="rating">
            <input
              type="radio"
              name="rating"
              required
              value="2"
              checked={formData.rating === "2"}
              onChange={handleFormData}
            />
            2
          </label>
          <label className="rating" htmlFor="rating">
            <input
              type="radio"
              name="rating"
              required
              value="3"
              checked={formData.rating === "3"}
              onChange={handleFormData}
            />
            3
          </label>
          <label className="rating" htmlFor="rating">
            <input
              type="radio"
              name="rating"
              required
              value="4"
              checked={formData.rating === "4"}
              onChange={handleFormData}
            />
            4
          </label>
          <label className="rating" htmlFor="rating">
            <input
              type="radio"
              name="rating"
              required
              value="5"
              checked={formData.rating === "5"}
              onChange={handleFormData}
            />
            5
          </label>
        </div>
        <label htmlFor="thumbnail">Add game thumbnail URL</label>
        <input
          type="url"
          name="thumbnail"
          required
          value={formData.thumbnail}
          onChange={handleFormData}
        />
        <label htmlFor="hours">
          Enter Hours played (If unsure, leave blank)
        </label>
        <input
          type="number"
          name="hours"
          min="0"
          value={formData.hours}
          onChange={handleFormData}
        />
        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
}
