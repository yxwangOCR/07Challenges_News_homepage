import { useState } from "react";

const useToggle = () => {
  const [isToggle, setIsToggle] = useState(false);
  function onToggle() {
    setIsToggle(!isToggle);
  }
  return [isToggle, { onToggle }];
};

export default useToggle;
