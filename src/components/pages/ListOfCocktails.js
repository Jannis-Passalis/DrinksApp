import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./cocktailStyling.css";
import { NavLink } from "react-router-dom";

export default function ListOfCocktails() {
  const [specDrinkList, setSpecDrinkList] = useState([]);
  const { cocktailscategory } = useParams();
  useEffect(() => {
    const search = async () => {
      const categoryNoSpace = cocktailscategory.replace(/ /g, "_");
      const encodedCategory = encodeURIComponent(categoryNoSpace);
      const cocData = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${encodedCategory}`
      );
      console.log("details search done", cocData.data.drinks);
      setSpecDrinkList(cocData.data.drinks);
    };
    search();
  }, [cocktailscategory]);

  return (
    <div>
      <div>
        {specDrinkList.map((drink) => {
          return (
            <div key={drink.idDrink} className="marge">
              <img
                src={drink.strDrinkThumb}
                alt="drinkfoto"
                className="cocktail-images"
              />
              <NavLink to={`/drinks/${drink.idDrink}`}>
                <div>{drink.strDrink}(picture up)</div>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
}
