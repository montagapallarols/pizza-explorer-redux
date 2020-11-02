import React, { useState } from "react";
import { useDispatch } from "react-redux";


export default function AddPizzaForm() {
  const [name, set_name] = useState("");
  const [description, set_description] = useState("");

  const dispatch = useDispatch();

  function submit(event) {
    event.preventDefault();
   
    console.log("new pizza:", name, description);

    // TODO:
    // - dispatch the ADD_PIZZA action
    // - clear the input fields

    dispatch({
      type: "ADD_PIZZA",
      payload: {
        id: Math.random(),
        name,
        description
      }
    });

    set_name("");
    set_description("");
  };

  return (
    <form onSubmit={submit}>
      <h2>Add a new pizza</h2>
      <p>
        <label>
          Name:{" "}
          <input
            type="text"
            value={name}
            onChange={e => set_name(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Description:{" "}
          <input
            type="text"
            value={description}
            onChange={e => set_description(e.target.value)}
          />
        </label>
      </p>
      <p>
        <button type="submit">Add this pizza!</button>
      </p>
    </form>
  );
}