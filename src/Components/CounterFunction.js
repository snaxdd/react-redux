import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { runInAction } from "mobx";
import { counterStoreFunction } from "../Stores";

const store = counterStoreFunction();

export const CounterFunction = observer(({ initialCount }) => {
  useEffect(() => {
    runInAction(() => {
      store.count = initialCount;
    });
  }, [initialCount]);
  return (
    <div>
      <button onClick={store.dec}>-</button>
      <span style={{ color: store.color }}>{store.count}</span>
      <button onClick={store.inc}>+</button>
    </div>
  );
});
// import React, { useState } from "react";
// import { observer, useLocalObservable } from "mobx-react";
//
// export const CounterFunction = observer(({ initialCount }) => {
//   const store = useLocalObservable(() => {
//     return {
//       count: initialCount || 0,
//       get color() {
//         return this.count > 0 ? "green" : this.count < 0 ? "red" : "black";
//       },
//       dec() {
//         this.count--;
//       },
//       inc() {
//         this.count++;
//       },
//     };
//   });
//
//   return (
//     <div>
//       <button onClick={store.dec}>-</button>
//       <span style={{ color: store.color }}>{store.count}</span>
//       <button onClick={store.inc}>+</button>
//     </div>
//   );
// });

// import React, { useState } from "react";
//
// export function CounterFunction({ initialCount }) {
//   const [count, setCount] = useState(initialCount || 0);
//
//   const decrement = () => setCount((prevCount) => prevCount - 1);
//   const increment = () => setCount((prevCount) => prevCount + 1);
//
//   return (
//     <div>
//       <button onClick={decrement}>-</button>
//       <span>{count}</span>
//       <button onClick={increment}>+</button>
//     </div>
//   );
// }
