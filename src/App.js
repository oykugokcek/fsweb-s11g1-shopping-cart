import React, { useState } from "react";
import { Route } from "react-router-dom";
import { data } from "./data";

// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import { ProductContext, CartContext } from "./contextFiles";
import {
  initialStateRead,
  localStorageCartWrite,
} from "../src/hooks/localStorage";

function App() {
  const s11g1LocalStorageKey = "s11g1";

  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState(initialStateRead(s11g1LocalStorageKey));
  //context cart navigation ı saracak
  //context product product route u saracak

  const addItem = (item) => {
    // verilen itemi sepete ekleyin
    const newCart = [...cart, item];
    setCart(newCart);
    localStorageCartWrite(s11g1LocalStorageKey, newCart);
  };

  const handleRemove = (id) => {
    const newCart = [...cart.filter((item) => item.id !== id)];

    setCart(newCart);
    localStorageCartWrite(s11g1LocalStorageKey, newCart);
  };

  return (
    <div className="App">
      <ProductContext.Provider value={{ products, addItem }}>
        <CartContext.Provider value={{ cart, handleRemove }}>
          <Navigation />

          {/* Routelar */}

          <main className="content">
            <Route exact path="/">
              <Products />
            </Route>

            <Route path="/cart">
              <ShoppingCart />
            </Route>
          </main>
        </CartContext.Provider>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
