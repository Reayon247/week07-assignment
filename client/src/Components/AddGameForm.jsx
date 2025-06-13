import { useState } from "react";

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
      <fieldset>
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
        <label htmlFor="ongoing">True</label>
        <input
          type="radio"
          name="ongoing"
          required
          value="TRUE"
          checked={formData.ongoing === "TRUE"}
          onChange={handleFormData}
        />
        <label htmlFor="ongoing">False</label>
        <input
          type="radio"
          name="ongoing"
          required
          value="FALSE"
          checked={formData.ongoing === "FALSE"}
          onChange={handleFormData}
        />
        <p>Rating between 1-5</p>
        <label htmlFor="rating">1</label>
        <input
          type="radio"
          name="rating"
          required
          value="1"
          checked={formData.rating === "1"}
          onChange={handleFormData}
        />
        <label htmlFor="rating">2</label>
        <input
          type="radio"
          name="rating"
          required
          value="2"
          checked={formData.rating === "2"}
          onChange={handleFormData}
        />
        <label htmlFor="rating">3</label>
        <input
          type="radio"
          name="rating"
          required
          value="3"
          checked={formData.rating === "3"}
          onChange={handleFormData}
        />
        <label htmlFor="rating">4</label>
        <input
          type="radio"
          name="rating"
          required
          value="4"
          checked={formData.rating === "4"}
          onChange={handleFormData}
        />
        <label htmlFor="rating">5</label>
        <input
          type="radio"
          name="rating"
          required
          value="5"
          checked={formData.rating === "5"}
          onChange={handleFormData}
        />
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
