import EachHotel from "./EachHotel"
import SearchBar from "./SearchBar"

const Hotels = ({
  hotelsToDisplay,
  
  addReview,

  searchTerm,
  onSearch,
  handleUpdateLikes,
  handleDeleteReview,
  reviews,
}) => {
  const hotelList = hotelsToDisplay.map((hotel) => (
    <EachHotel

      key={hotel.id}
      
      hotel={hotel}
      addReview={addReview}
      handleUpdateLikes={handleUpdateLikes}
      handleDeleteReview={handleDeleteReview}
      reviews={reviews}
    />
  ));

  return (
    <div>
      <h6>Search here by hotel name to find a hotel you are looking for: </h6>
      <SearchBar searchTerm={searchTerm} onSearch={onSearch} />
      <u>
        <h1>Hotel List</h1>
      </u>
      <br />
      {hotelList}
    </div>
  );
};
export default Hotels;