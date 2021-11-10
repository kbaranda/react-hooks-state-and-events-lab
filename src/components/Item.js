import {useState} from "react";


function Item({ name, category }) {
  const [inCart, setCart] = useState(false)
  const btnInput = inCart ? "Remove From Cart" : "Add to Cart"
  const classInput = inCart ? "in-cart" : ""

  function handleCart(){
    setCart(!inCart)
  }

  return (
    <li className={classInput}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>{btnInput}</button>
    </li>
  );
}

export default Item;
