import React from "react";
import "./card.css";

export default function Card({ imageUrl, name, price, stock }) {
  return (
    <div className="card">
      <img src={imageUrl} className="product_image" />
      <p className="product_name">{name}</p>
      <p className="product_name">{price}</p>
      <p className="product_name">{stock}</p>
    </div>
  );
}
