import React from "react";
import path from "path";

import { allCategory } from "../../../backend/controllers/CFC";

const FilterCG = () => {
  <>
    <ul>
      {allCategory &&
        allCategory.map((CG, index) => {
          return(
            <li key={index}>
                <p>{CG}</p>
            </li>
          )
        })}
    </ul>
  </>;
};

export default FilterCG;
