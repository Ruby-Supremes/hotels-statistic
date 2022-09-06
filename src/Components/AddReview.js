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

};
export default AddReview;