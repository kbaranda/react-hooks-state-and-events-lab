import {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDark, setLight] = useState(false)
  const appClass = isDark ? "App dark" : "App light"
  const mode = isDark ? "Light Mode" : "Dark Mode"

  function handleClick() {
    setLight(!isDark)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{mode}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
