import React, { useState } from "react";

const AddFeedback = ({ addFeedback , hotel }) => {
  const [newFeedback , setNewFeedback ] = useState({
    text: "",
    hotel_id: hotel.id,
  
  
  
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setNewFeedback ({ ...newFeedback , [name]: value });
  };
  function handleSubmit(e) {
    e.preventDefault();

    const addNewFeedback  = {
      text: newFeedback.text,
      hotel_id: newFeedback.hotel_id,
    };

    fetch(`http://localhost:9292/hotels/${hotel.id}/feedbacks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addNewFeedback ),
    })
      .then((response) => response.json())
      .then((data) => addFeedback (data));
    setNewFeedback ({
      text: "",
      hotel_id: newFeedback.hotel_id,
    });
  }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h5>Add new Feedback  here: </h5>

        <textarea
          type="text"
          placeholder="Feedback "
          name="text"
          value={newFeedback.text}
          onChange={handleChange}
        ></textarea>

        <br />
        <input className="button" type="submit" />
      </form>
    </div>
  );
};
export default AddFeedback ;