import React, { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <h1>{counter}</h1>
    </div>
  );
}
