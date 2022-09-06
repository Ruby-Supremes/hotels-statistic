import React, { useState } from "react";

const AddReview = ({ addReview, hotel}) => {
  const [newReview, setNewReview] = useState({
    text: "",
      hotel_id: hotel.id,
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setNewReview({ ...newReview, [name]: value });
  };
  function handleSubmit(e) {
    e.preventDefault();

    const addNewReview = {
      text: newReview.text,
      book_id: newReview.hotel_id,
    };

    fetch(`http://localhost:9292/hotels/${hotel.id}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addNewReview),
    })
      .then((response) => response.json())
      .then((data) => addReview(data));
    setNewReview({
      text: "",
      hotel_id: newReview.hotel_id,
    });
  }
  return (
    
  );
};
export default AddReview;