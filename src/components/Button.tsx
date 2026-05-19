import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

interface Props {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
  special?: boolean;
}

export default function Button({ onClick, text }: Props) {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("ThemeContext must be used within a ThemeProvider");
  }

  const { theme } = context;
  return (
    <button className={"calcBtn " + theme} onClick={onClick}>
      {text}
    </button>
  );
}
