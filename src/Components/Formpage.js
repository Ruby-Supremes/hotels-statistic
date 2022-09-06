import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const FormPage = ({ addHotels }) => {
  let history = useHistory();
  const [newHotel, setNewHotel] = useState({
    name: "",
    description: "",
    likes: 0,
  });
  
};
export default FormPage;