import { useState } from 'react';
import './App.css';
import Calculator from './calculator';

function App() {
  const [theme, setTheme] = useState("theme1");

  const toggleTheme = () => {
      if (theme === "theme1") {
          setTheme("theme2");
      } else if (theme === "theme2") {
          setTheme("theme3");
      } else {
          setTheme("theme1");
      }
  }
  return (
    <>
      <div>
        <Calculator></Calculator>
      </div>
    </>
  );
}

export default App;
