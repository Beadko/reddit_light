import React, { useState } from 'react';


const TestHook = (props) => {
  const [state, setState] = useState("Initial State");

  const changeState = () => {
    setState("Initial State Changed")
  };

  return (
    <div>
      <button onClick={changeTheSidebar}>
        Sidebar Change
      </button>
      <p>{state}</p>
    </div>
  );
};

export default TestHook;