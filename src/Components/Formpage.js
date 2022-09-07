import React, { useState } from "react";


import { useHistory} from "react-router-dom";

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
    const addNewHotel = {
      name: newHotel.name,
      description: newHotel.description,
      likes: 0,
    };

    fetch(`http://localhost:9292/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addNewHotel),
    })
      .then((response) => response.json())
      .then(addHotels);
    setNewHotel({
      name: "",
      description: "",
      likes: 0,
    });
    history.push("/hotels");
  }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add new hotels here: </h4>

        <input
          type="text"
          placeholder="Hotel name"
          name="title"
          value={newHotel.name}
          onChange={handleChange}
        ></input>
        <br />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={newHotel.description}
          onChange={handleChange}
        ></input>
        <br />

        <input className="button" type="submit" />
      </form>
      <img
        alt="hotel"
        src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=format&fit=crop&w=500&q=60"
      ></img>
    </div>
  );
};
export default FormPage;