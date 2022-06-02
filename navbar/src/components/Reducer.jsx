import React, { useReducer, useState } from 'react'

const reducer = (counter, action) => {
  switch(action.type) {
    case "increment": {
      return counter+1;
    }

    case "decrement": {
      return counter-1;
    }

    default: {
      return counter;
    }
  }
}

const Reducer = () => {
  const [counter, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      Counter : {counter}
      <div>
        <button onClick={() => dispatch({type: "decrement"})}>-</button>
        <button onClick={() => dispatch({type: "increment"})}>+</button>
      </div>
    </div>
  )
}

export default Reducer