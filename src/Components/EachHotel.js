import React, { useState } from "react";
import AddFeedback from "./AddFeedback";


const EachHotel = ({
  hotel,
  handleUpdateLikes,
  handleDeleteFeedback,

  
  addFeedback,
}) => {
  const [displayFeedback, setDisplayFeedback] = useState(false);

  const showFeedback = (event) => {
    event.preventDefault();
    setDisplayFeedback(!displayFeedback);
  };

  function updateLikes() {
    const addLikes = {
      likes: hotel.likes + 1,
    };

    fetch(`http://localhost:9292/hotels/${hotel.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addLikes),
    })
      .then((response) => response.json())
      .then(handleUpdateLikes);
  }


  function deleteFeedback(id) {
    fetch(`http://localhost:9292/feedbacks/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })

      .then((response) => response.json())
      .then((data) => handleDeleteFeedback(data));
  }

  const eachFeedback = hotel.feedbacks?.map((feedback) => (
    <li className="noBullet" key={feedback.id}>
      {/* <br /> */}
      <button className="deleteButton" onClick={() => deleteFeedback(feedback.id)}>
        ✖{" "}
      </button>
      {feedback.text}
    </li>
  ));

  return (
    <>
      <div className="bookCard">
        <h3>{hotel.name}</h3>
        <h4>{hotel.description}</h4>

        <button className="button" onClick={updateLikes}>
          Likes: {hotel.likes}
        </button>
        <br />
        <button className="button" onClick={showFeedback}>
          {displayFeedback ? "Hide Feedbacks" : "Show Feedbacks"}
        </button>

        {displayFeedback ? <ul>{eachFeedback}</ul> : null}
        <AddFeedback hotel={hotel} addFeedback={addFeedback} />
      </div>
      <hr />
    </>
  );
};

export default EachHotel;