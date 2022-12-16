import "././styles/General.scss";
import DesktopLayout from "./components/DesktopLayout";
import MobileLayout from "./components/MobileLayout";
import { useEffect, useState } from "react";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  useEffect(() => {
    width < 1439 && setWidth(1439);
  }, [width]);
  return (
    <div className='App'>
      {width > 1439 ? <DesktopLayout /> : <MobileLayout />}
    </div>
  );
}

export default App;
