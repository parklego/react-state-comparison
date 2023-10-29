import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { decrement, increment } from "../features/counter/counterSlice";

const Home = () => {
  const count = useSelector((state) => state.counter.value, shallowEqual);
  const name = useSelector((state) => state.counter.name, shallowEqual);
  const dispatch = useDispatch();

  return (
    <div>
      <div>이름 : {name}</div>
      <div> 카운트 : {count}</div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>

        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Home;
