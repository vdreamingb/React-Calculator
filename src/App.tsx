import "./App.css";
import CalculatorUI from "./components/CalculatorUI";
import ThemeContextProvider from "./context/ThemeContextProvider";

export default function App() {
  return (
    <ThemeContextProvider>
      <CalculatorUI />
    </ThemeContextProvider>
  );
}
