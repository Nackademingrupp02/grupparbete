import React from "react";

const SearchProducts = () => {
  return (
    <>
      <form action="/search" method="get">
        <label for="search">Lägg till produkt</label>
        <input type="text" id="search" name="search" />
        <input type="submit" value={"Sök"} />
      </form>
    </>
  );
};

export default SearchProducts