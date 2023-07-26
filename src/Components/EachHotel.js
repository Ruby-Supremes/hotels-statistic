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
      <button className="deleteButton" onClick={() => deleteFeedback(feedback.id)}>
        ✖{" "}
      </button>
      {feedback.text}
    </li>
  ));

  return (
    <div style={styles.container}>
      <div style={styles.hotelCard}>
        <h3>{hotel.name}</h3>
        <h4>{hotel.description}</h4>

        <button style={styles.likesButton} onClick={updateLikes}>
          Likes: {hotel.likes}
        </button>
        <br />
        <button style={styles.showFeedbackButton} onClick={showFeedback}>
          {displayFeedback ? "Hide Feedbacks" : "Show Feedbacks"}
        </button>

        {displayFeedback && <ul style={styles.feedbackList}>{eachFeedback}</ul>}
        <AddFeedback hotel={hotel} addFeedback={addFeedback} />
      </div>
    </div>
  );
};

export default EachHotel;

// CSS styles
const styles = {
  container: {
    marginBottom: "20px",
  },
  hotelCard: {
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#f0f0f0",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
  },
  likesButton: {
    padding: "8px 15px",
    borderRadius: "5px",
    backgroundColor: "#17264f",
    color: "#fff",
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
    border: "none",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "background-color 0.3s",
  },
  showFeedbackButton: {
    padding: "8px 15px",
    borderRadius: "5px",
    backgroundColor: "#17264f",
    color: "#fff",
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
    border: "none",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "background-color 0.3s",
    marginTop: "10px",
  },
  feedbackList: {
    listStyleType: "none",
    padding: "0",
    marginTop: "10px",
  },
};
