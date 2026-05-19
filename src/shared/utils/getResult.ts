import { evaluate } from "mathjs";

const formatNumber = (num: number) => {
  const decimalPart = num.toString().split(".")[1];

  if (decimalPart && decimalPart.length > 4) {
    return Number(num.toFixed(4));
  }

  return num;
};

export function getResult(requestedString: string) {
  try {
    const expression = requestedString.replace(/x/g, "*");
    const res = evaluate(expression);
    return formatNumber(res);
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message);
    }
    alert("Unknown error");
  }
}
