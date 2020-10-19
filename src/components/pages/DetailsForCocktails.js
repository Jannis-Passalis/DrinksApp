import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./cocktailStyling.css";

export default function DetailsForCocktails() {
  const { cocktailsdetails } = useParams();
  const [drinkDetails, setDrinkDetails] = useState([]);
  useEffect(() => {
    const search = async () => {
      const data = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailsdetails}`
      );
      console.log("success", data.data.drinks[0]);
      setDrinkDetails(data.data.drinks[0]);
    };
    search();
  }, [cocktailsdetails]);

  return (
    <div>
      <div>See your details.</div>
      <h4>Let's find out what {drinkDetails.strDrink} is.</h4>
      <img
        src={drinkDetails.strDrinkThumb}
        alt="drinkphoto"
        className="cocktail-images-marge-leftFloat"
      />
      <p>Alcoholic: {drinkDetails.strAlcoholic}</p>
      <p>Drink Category: {drinkDetails.strCategory}</p>
      <p>
        Ingredients: {drinkDetails.strIngredient1},{" "}
        {drinkDetails.strIngredient2}, {drinkDetails.strIngredient3},{" "}
        {drinkDetails.strIngredient4}, {drinkDetails.strIngredient5},{" "}
        {drinkDetails.strIngredient6}, {drinkDetails.strIngredient7},{" "}
        {drinkDetails.strIngredient8}, {drinkDetails.strIngredient9},{" "}
        {drinkDetails.strIngredient10}, {drinkDetails.strIngredient11},{" "}
        {drinkDetails.strIngredient12}, {drinkDetails.strIngredient13},{" "}
        {drinkDetails.strIngredient14}, {drinkDetails.strIngredient15}
      </p>
      <p>Recipe: {drinkDetails.strInstructions}</p>
    </div>
  );
}
