import React, { useEffect, useState } from "react";
import axios from "axios";
import "./cocktailStyling.css";
import { NavLink } from "react-router-dom";

export default function FindCocktailsPage() {
  const [drinkList, seTdrinkList] = useState([]);
  useEffect(() => {
    const search = async () => {
      const data = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
      );
      console.log("success", data.data.drinks);
      seTdrinkList(data.data.drinks);
    };
    search();
  }, []);
  return (
    <div>
      <h1>Let search for some drinks.</h1>
      <h5>What are my options?</h5>
      {/* <button onClick={search}>Click Here To See Your Options</button> */}
      <div>
        {drinkList.map((drink, index) => {
          return (
            <div key={index}>
              <NavLink to={`/cocktails/${drink.strCategory}`}>
                <div>{drink.strCategory}</div>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
}
