import React from "react";

const Sp1 = () => {
  return (
    
      <form action="/search" method="post" >
        <input type="text" id="searchName" name="searchName" placeholder="Fungerar ej"/>
        <input type="submit" value={"Sök"} />
      </form>
    
  );
};

export default Sp1