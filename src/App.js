


import "./App.css";
import Home from  "./Components/Home"
import NavBar from "./Components/NavBar";
import  Hotels from "./Components/Hotels";
import FormPage from "./Components/Formpage";
import { Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  
  const [hotels, setHotels] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    fetch(`http://localhost:9292/hotels`)
      .then((response) => response.json())
      .then((data) => {
        setHotels(data);
      });
  }, []);

  function addHotels(newHotel) {
    const updatedHotels = [newHotel, ...hotels];
    setHotels(updatedHotels);
  }

  function addReview(newReview) {
    const hotelToUpdate = hotels.find((hotel) => {
      return hotel.id === newReview.hotel_id;
    });

    const updatedReviews = [newReview, ...hotelToUpdate.reviews];
    hotelToUpdate.reviews = updatedReviews;
    setHotels(
      hotels.map((hotel) => (hotel.id === hotelToUpdate.id ? hotelToUpdate : hotel))
    );

    setReviews(updatedReviews);
  }

  function handleUpdateLikes(updateLikes) {
    const updatedLikes = hotels.map((hotel) => {
      return hotel.id === updateLikes.id ? updateLikes : hotel;
    });
    setHotels(updatedLikes);
  }
  function handleDeleteReview(deletedReview) {
    const hotelToUpdate = hotels.find((hotel) => {
      return hotel.id === deletedReview.hotel_id;
    });

    const updatedReview = hotelToUpdate.reviews.filter((review) => {
      return review.id !== deletedReview.id;
    });

    hotelToUpdate.reviews = updatedReview;
    setHotels(
      hotels.map((hotel) => (hotel.id === hotelToUpdate.id ? hotelToUpdate : hotel))
    );
    setReviews(updatedReview);
  }

  const hotelsToDisplay = hotels.filter((hotel) => {
    return hotel.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="App">
      <NavBar />
      <br />
      <Route path="/hotels">
        <Hotels
          handleUpdateLikes={handleUpdateLikes}
          addReview={addReview}
          hotels={hotels}
          hotelsToDisplay={hotelsToDisplay}
          searchTerm={searchTerm}
          onSearch={setSearchTerm}
          handleDeleteReview={handleDeleteReview}
          reviews={reviews}
        />
      </Route>
      <Route path="/formpage">
        <FormPage addHotels={addHotels} />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </div>
  );
}

export default App;