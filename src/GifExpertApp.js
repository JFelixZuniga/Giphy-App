import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  // const categorias = ["One Puch", "Samurai X"];
  const [categories, setCategories] = useState(["One Puch", "Samurai X"]);

  // const handleAdd = () => {
  //   setCategories(["Dragon Ball", ...categories]);
  // };

  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((categorie) => (
          <li key={categorie}>{categorie}</li>
        ))}
      </ol>
    </>
  );
};
