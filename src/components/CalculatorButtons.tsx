import type { Dispatch, SetStateAction, MouseEvent } from "react";
import Button from "./Button";
import { useEffect, useState } from "react";
import { getResult } from "../shared/utils/getResult";

interface Props {
  setRequestedString: Dispatch<SetStateAction<string>>;
  setResult: Dispatch<SetStateAction<number | string>>;
  requestedString: string;
  setHistory: Dispatch<SetStateAction<string>>;
}

export default function CalculatorButton({
  setRequestedString,
  setResult,
  requestedString,
  setHistory,
}: Props) {
  const [isSymbol, setIsSymbol] = useState<boolean>(false);
  const onClick = (e: MouseEvent<HTMLButtonElement>, caracter: string) => {
    e.preventDefault();
    setRequestedString((prev) => {
      if (prev === "0") {
        return caracter;
      } else {
        if (prev.charAt(prev.length - 1) === "/" && caracter === "0") {
          setResult("Undefined");
        } else {
          setResult(0);
        }
        return prev + caracter;
      }
    });
    if (isSymbol) {
      setIsSymbol(false);
    }
  };

  useEffect(() => {
    if (!isSymbol) {
      setResult(Number(getResult(requestedString)));
    }
  }, [requestedString, setResult, isSymbol]);

  const resetCalc = () => {
    setRequestedString("0");
    setResult(0);
  };

  const onSymbolClick = (
    e: MouseEvent<HTMLButtonElement>,
    caracter: string,
  ) => {
    e.preventDefault();
    if (!isSymbol) {
      setIsSymbol(true);
      setRequestedString((prev) => prev + caracter);
    }
  };

  const deleteCaracter = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setRequestedString((prev) => prev.slice(0, -1));
  };

  return (
    <table className="buttons">
      <tr className="button-row">
        <td className="buttons-item">
          <Button text="AC" onClick={resetCalc} />
        </td>
        <td className="buttons-item">
          <Button
            text="%"
            onClick={(e) => {
              onSymbolClick(e, "%");
            }}
          />
        </td>
        <td className="buttons-item">
          <Button text="<" onClick={(e) => deleteCaracter(e)} />
        </td>
        <td className="buttons-item">
          <Button text="." onClick={(e) => onClick(e, ".")} />
        </td>
      </tr>
      <tr className="button-row">
        <td className="buttons-item">
          <Button
            text="+"
            onClick={(e) => {
              onSymbolClick(e, "+");
            }}
            special={true}
          />
        </td>
        <td className="buttons-item">
          <Button
            text="x"
            onClick={(e) => {
              onSymbolClick(e, "x");
            }}
          />
        </td>
        <td className="buttons-item">
          <Button
            text="/"
            onClick={(e) => {
              onSymbolClick(e, "/");
            }}
          />
        </td>
        <td className="buttons-item">
          <Button
            text="-"
            onClick={(e) => {
              onSymbolClick(e, "-");
            }}
          />
        </td>
      </tr>
      <tr>
        <td className="buttons-item">
          <Button
            text="1"
            onClick={(e) => {
              onClick(e, "1");
            }}
          />
        </td>
        <td className="buttons-item">
          <Button
            text="2"
            onClick={(e) => {
              onClick(e, "2");
            }}
          />
        </td>
        <td className="buttons-item">
          <Button
            text="3"
            onClick={(e) => {
              onClick(e, "3");
            }}
          />
        </td>
        <td className="buttons-item">
          <Button
            text="4"
            onClick={(e) => {
              onClick(e, "4");
            }}
          />
        </td>
      </tr>
      <tr>
        <td className="buttons-item">
          <Button
            text="5"
            onClick={(e) => {
              onClick(e, "5");
            }}
          />
        </td>
        <td className="buttons-item">
          <Button
            text="6"
            onClick={(e) => {
              onClick(e, "6");
            }}
          />
        </td>
        <td className="buttons-item">
          <Button
            text="7"
            onClick={(e) => {
              onClick(e, "7");
            }}
          />
        </td>
        <td className="buttons-item">
          <Button
            text="8"
            onClick={(e) => {
              onClick(e, "8");
            }}
          />
        </td>
      </tr>
      <tr>
        <td className="buttons-item">
          <Button
            text="9"
            onClick={(e) => {
              onClick(e, "9");
            }}
          />
        </td>
        <td className="buttons-item">
          <Button
            text="0"
            onClick={(e) => {
              onClick(e, "0");
            }}
          />
        </td>
        <td className="buttons-item" colSpan={2}>
          <Button
            text="="
            onClick={(e) => {
              e.preventDefault();
              const res = getResult(requestedString);
              setResult(Number(res));
              setHistory(requestedString + " = " + String(res));
              setRequestedString(String(res));
            }}
          />
        </td>
      </tr>
    </table>
  );
}
