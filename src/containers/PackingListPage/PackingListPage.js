import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCount } from "../../store/PackingList/actions";

export default () => {
  const count = useSelector(state => state.counter);
  const dispatch = useDispatch();

  console.log(count);

  return (
    <main>
      <div>Count: {count}</div>
      <button onClick={() => dispatch(addCount())}>Add to count</button>
    </main>
  );
};

// useSelector replaces mapStateToProps
// useDispatch replaces mapDispatch to Props