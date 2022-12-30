import { useState } from "react";

import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Time"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    // console.log(newCategory);
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpert</h1>
      <AddCategory
        // setCategory={ setCategories }
        onNewCategory={(value) => onAddCategory(value)}
        // onNewCategory={ onAddCategory }
      />

      {categories.map((category) => {
        return (
          <GifGrid key={category} category={category} />
          // <div key={category}>
          //   <h3>Category</h3>
          //   <li>{category}</li>
          // </div>
        );
      })}
      {/* Gif Item */}
    </>
  );
};
