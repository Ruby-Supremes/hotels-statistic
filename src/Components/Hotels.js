import React from "react";
import EachHotel from "./EachHotel";
import SearchBar from "./SearchBar";

const Hotels = ({
  hotelsToDisplay,
  addFeedback,
  searchTerm,
  onSearch,
  handleUpdateLikes,
  handleDeleteFeedback,
  feedbacks,
}) => {
  const hotelList = hotelsToDisplay.map((hotel) => (
    <EachHotel
      key={hotel.id}
      hotel={hotel}
      addFeedback={addFeedback}
      handleUpdateLikes={handleUpdateLikes}
      handleDeleteFeedback={handleDeleteFeedback}
      feedbacks={feedbacks}
    />
  ));

  return (
    <div style={styles.container}>
      <h6 style={styles.searchTitle}>Search here by hotel name to find a hotel you are looking for: </h6>
      <SearchBar searchTerm={searchTerm} onSearch={onSearch} />
      <div style={styles.hotelListContainer}>
        <h1 style={styles.hotelListTitle}>🌟 Amazing Hotel List 🌟</h1>
        <div style={styles.hotelList}>{hotelList}</div>
      </div>
    </div>
  );
};

export default Hotels;

// CSS styles
const styles = {
  container: {
    width: "100%",
    maxWidth: "1200px", // Increase the maxWidth to make the page bigger
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f0f0f0",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
  },
  searchTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
  },
  hotelListContainer: {
    marginTop: "20px",
  },
  hotelListTitle: {
    fontSize: "32px",
    textAlign: "center",
    marginBottom: "20px",
    color: "#ff6600",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
  },
  hotelList: {
    display: "grid",
    gridGap: "20px",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    animation: "fade-in 1s ease-in-out",
  },

  // Keyframes for the fade-in animation
  "@keyframes fade-in": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
};
