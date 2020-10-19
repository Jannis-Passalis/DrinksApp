import React, { useState } from "react";
import axios from "axios";

export default function HomePage() {
  const [searchInput, setSearchInput] = useState([]);
  const [drinksFound, setDrinksFound] = useState([]);

  const search = async () => {
    const data = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`
    );
    console.log("Input search success", data.data.drinks);
    setDrinksFound(data.data.drinks);
  };
  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <p>Let's explore the some Drinks</p>
      <p>
        Do it or at Find Drinks (searching through catergories) or here
        (searching though name)
      </p>
      <input
        placeholder="Drink Name"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button onClick={search}>Search</button>
      <div>
        {drinksFound.map((drink) => {
          return (
            <div key={drink.idDrink}>
              <h3>{drink.strDrink}</h3>
              <img
                src={drink.strDrinkThumb}
                alt="drinkphoto"
                className="cocktail-images"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
