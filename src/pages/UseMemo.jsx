import React, { useMemo, useState } from "react";
import { itemsList } from "../utils/itemsLists";

const UseMemo = () => {
  const [count, setCount] = useState(0);

  const [items, setItems] = useState(itemsList);

  const selectedItem = useMemo(
    () => items.find((item) => item.selectedItem === true),
    [items]
  ); // runs every time items changes

  return (
    <div>
      Count: {count}
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <div>Selected Item: {selectedItem.id}</div>
    </div>
  );
};

export default UseMemo;
