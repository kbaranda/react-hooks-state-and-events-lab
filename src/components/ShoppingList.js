import {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setCategory] = useState("All")

  function changeOption(event) {
    setCategory(event.target.value)
  }

  let newArray = []
  if (selectedCategory !== "All"){
    newArray = items.filter(item => item.category === selectedCategory)
  } else {
    newArray = items
  }

  console.log(newArray)
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={changeOption}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {newArray.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
