import React from "react";
import { observer } from "mobx-react";

const Home = observer(({ counter }) => {
  return (
    <div>
      <h1>{counter.number}</h1>
      <button onClick={counter.incresement}>+1</button>
      <button onClick={counter.decreasement}>-1</button>
    </div>
  );
});

export default Home;
