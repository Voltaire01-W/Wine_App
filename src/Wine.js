import React, { useState, useEffect } from "react";

export default function Wine({ product }) {

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/food/wine/description?apiKey=e64051569f7746129b487e04e34f71ef&wine=${product.id}`
    )
      .then((response) => response.json())
      .catch(() => {
        console.log("error");
      });
  }, [product.id]);

  return (
    <article>
      <h1>{product.title}</h1>
      <img src={product.imageUrl} alt="wine-photo" />
      <ul className="pricing">
        <li>Price: {product.price}</li>
        <li>Average rating: {product.averageRating}</li>
      </ul>
      <a href={product.link}>Buy now</a>
    </article>
  );
}