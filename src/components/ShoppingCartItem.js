import React from "react";
import { ScCartItem, ScCartItemDetails } from "./scParts";
import { useContext } from "react";
import { CartContext } from "../contextFiles";

const Item = (props) => {
  const { handleRemove } = useContext(CartContext);
  return (
    <ScCartItem>
      <img src={props.image} alt={`${props.title} book`} />

      <ScCartItemDetails>
        <h2>{props.title}</h2>
        <p>$ {props.price}</p>
        <button onClick={() => handleRemove(props.id)}>Remove from cart</button>
      </ScCartItemDetails>
    </ScCartItem>
  );
};

export default Item;
