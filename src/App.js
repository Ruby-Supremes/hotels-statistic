import "./App.css";
import Home from "./Components/Home"
import NavBar from "./Components/NavBar";
import Hotels from "./Components/Hotels";
import FormPage from "./Components/Formpage";
import { Route } from "react-router-dom";
import { useState, useEffect } from "react";
function App() {

  const [hotels, setHotels] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);


  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    fetch(`http://localhost:9292/hotels`)
      .then((response) => response.json())
      .then((data) => {


        setHotels(data);
        
      });
    }, []);
    
// console.log(hotels)
  function addHotels(newHotel) {

    const updatedHotels = [newHotel, ...hotels];
    setHotels(updatedHotels);

  }


  function addFeedback(newFeedback) {
    const hotelToUpdate = hotels.find((hotel) => {
      return hotel.id === newFeedback.hotel_id;
    });

    const updatedFeedbacks = [newFeedback, ...hotelToUpdate.feedbacks];
    hotelToUpdate.feedbacks = updatedFeedbacks;
    setHotels(
      hotels.map((hotel) => (hotel.id === hotelToUpdate.id ? hotelToUpdate : hotel))
    );

    setFeedbacks(updatedFeedbacks);
  }

  function handleUpdateLikes(updateLikes) {
    const updatedLikes = hotels.map((hotel) => {
      return hotel.id === updateLikes.id ? updateLikes : hotel;
    });
    setHotels(updatedLikes);
  }
  function handleDeleteFeedback(deletedFeedback) {
    const hotelToUpdate = hotels.find((hotel) => {
      return hotel.id === deletedFeedback.hotel_id;
    });

    const updatedFeedback = hotelToUpdate.feedbacks.filter((feedback) => {
      return feedback.id !== deletedFeedback.id;
    });

    hotelToUpdate.feedbacks = updatedFeedback;
    setHotels(
      hotels.map((hotel) => (hotel.id === hotelToUpdate.id ? hotelToUpdate : hotel))
    );
    setFeedbacks(updatedFeedback);
  }


  return (
    <div>
      <NavBar />
      <br />
      <Route path="/hotels">
        <Hotels
          handleUpdateLikes={handleUpdateLikes}
          addFeedback={addFeedback}
          hotelsToDisplay={hotels}
          searchTerm={searchTerm}
          onSearch={setSearchTerm}
          handleDeleteFeedback={handleDeleteFeedback}
          feedbacks={feedbacks}
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