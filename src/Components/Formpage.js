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
    const addNewHotel = {
      name: newHotel.name,
      description: newHotel.description,
      likes: 0,
    };

    fetch("http://localhost:9292/hotels", {
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
    <div style={styles.container}>
      <form className="form" onSubmit={handleSubmit}>
        <h2 style={styles.formHeading}>Add a New Hotel</h2>
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>
            Hotel Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={newHotel.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="description" style={styles.label}>
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={newHotel.description}
            onChange={handleChange}
            required
            style={styles.textarea}
          />
        </div>

        <button className="button" type="submit" style={styles.addButton}>
          Add Hotel
        </button>
      </form>
      <img
        alt="hotel"
        src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?&auto=format&fit=crop&w=500&q=60"
        style={styles.image}
      />
    </div>
  );
};

export default FormPage;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "50px",
  },
  formHeading: {
    fontSize: "30px",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
    color: "#17264f",
    textTransform: "uppercase",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
  },
  formGroup: {
    marginBottom: "20px",
    textAlign: "left",
    width: "100%",
  },
  label: {
    display: "block",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#17264f",
  },
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
    outline: "none",
    transition: "borderColor 0.3s",
  },
  textarea: {
    width: "100%",
    height: "150px",
    padding: "12px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
    outline: "none",
    transition: "borderColor 0.3s",
  },
  button: {
    padding: "12px 30px",
    borderRadius: "5px",
    backgroundColor: "#17264f",
    color: "#fff",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    border: "none",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "background-color 0.3s",
  },
  addButton: {
    backgroundColor: "#ff6600",
    marginTop: "20px",
    "&:hover": {
      backgroundColor: "#ff4500",
    },
  },
  image: {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    margin: "20px 0",
  },
};
