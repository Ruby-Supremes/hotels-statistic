import React from "react";

const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <div style={styles.container}>
      <input
        type="text"
        id="search"
        value={searchTerm}
        placeholder="Which hotel do you want to look for?"
        onChange={(e) => onSearch(e.target.value)}
        style={styles.input}
      />
    </div>
  );
};

export default SearchBar;

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "20px 0",
  },
  input: {
    width: "400px",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
    outline: "none",
  },
};
