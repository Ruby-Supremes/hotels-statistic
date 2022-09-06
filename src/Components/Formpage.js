import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const FormPage = ({ addHotels }) => {
  let history = useHistory();
  const [newHotel, setNewHotel] = useState({
    name: "",
    description: "",
    likes: 0,
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewHotel({ ...newHotel, [name]: value });
  };
  function handleSubmit(e) {
    e.preventDefault();
    const addNewBook = {
      name: newHotel.name,
      description: newHotel.description,
      likes: 0,
    };

  
};
export default FormPage;