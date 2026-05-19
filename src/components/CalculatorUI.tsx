import { useContext, useState } from "react";
import CalculatorButton from "./CalculatorButtons";
import { ThemeContext } from "../context/ThemeContext";

export default function CalculatorUI() {
  const [requestedString, setRequestedString] = useState<string>("0");
  const [result, setResult] = useState<number | string>(0);
  const [history, setHistory] = useState<string>("");
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("ThemeContext must be used within a ThemeProvider");
  }

  const { theme, setTheme } = context;

  const onClick = () => {
    setTheme((prev) => {
      if (prev === "light") {
        return "dark";
      }
      return "light";
    });
  };

  return (
    <div className={"calc-body " + theme}>
      <div className={"utilities " + theme}>
        <button className={"change-theme " + theme} onClick={onClick}>
          Switch to {theme === "light" ? "Dark" : "Light"}
        </button>
      </div>
      <div className={"calc-top " + theme}>
        <ul className={"calc-history " + theme}>
          <li>{history}</li>
        </ul>
        <div className={"operation " + theme}>{requestedString}</div>
        <div className={"result " + theme}>{result}</div>
      </div>
      <CalculatorButton
        setRequestedString={setRequestedString}
        setResult={setResult}
        requestedString={requestedString}
        setHistory={setHistory}
      />
    </div>
  );
}
