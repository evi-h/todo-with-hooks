import { useState } from "react";

const ToggleState = (initialVal) => {
  const [state, setState] = useState(initialVal);

  const toggle = () => {
    setState(!state);
  };

  return [state, toggle];
};

export default ToggleState;
