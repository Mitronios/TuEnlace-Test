import React from "react";

const Search = ({ onSubmit, onChange, value }) => {
  return (
    <form className="d-flex">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search by Name"
        value={value}
        onSubmit={onSubmit}
        onChange={onChange}
      />
      <button className="btn btn-primary" type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;
