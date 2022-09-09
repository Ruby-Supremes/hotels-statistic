
import EachHotel from "./EachHotel"
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
  console.log(hotelsToDisplay, '>>>>>>>>>>')
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
    <div>
      <h6>Search here by hotel name to find a hotel you are looking for: </h6>
      <SearchBar searchTerm={searchTerm} onSearch={onSearch} />
      <u>
        <h1>hotel List</h1>
      </u>
      <br />
      {hotelList}
    </div>
  );
};

export default Hotels;