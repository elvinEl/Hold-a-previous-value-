import React, { useState } from "react";
import Dollar from "./Dollar";
function App() {
  const [amount, setAmount] = useState(1.71);
  return (
    <div>
      <Dollar amount={amount} />
      <button
        onClick={() => {
          setAmount((amount) => amount - 1);
        }}
      >
        Dollarin deyerini dusurt{" "}
      </button>
      <button onClick={() => setAmount((amount) => amount +1)}>
        Dollarin deyerini artir{" "}
      </button>
    </div>
  );
}

export default App;
