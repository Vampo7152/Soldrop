import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function csvToJson(csv, noHeader, decimal) {
  const convert = (amount) => {
    if (decimal === -1) {
      return solToLamports(parseFloat(amount) ?? 0);
    } else {
      return customTokenToDecimal(parseFloat(amount) ?? 0, decimal);
    }
  };
  let totalAmount = 0;
  let isInvalid = false;
  const lines = csv.split(/\n|\r\n/);
  const startIndex = noHeader ? 1 : 0;
  const headers = ["address", "amount", "orgAmount"];
  const result = [];
  for (let i = startIndex; i < lines.length; i++) {
    const obj = {};
    const currentline = lines[i].split(",");
    obj[headers[0]] = currentline[0];
    obj[headers[1]] = convert(currentline[1]);
    obj[headers[2]] = currentline[1];

    if (!obj[headers[0]] || obj[headers[1]] <= 0) {
      isInvalid = true;
      alert(`Invalid address or amount at line ${i + 1}`);
      break;
    }

    totalAmount += obj[headers[1]];
    result.push(obj);
  }
  if (!isInvalid) {
    return { result, totalAmount, isInvalid };
  } else {
    return { result: [], totalAmount: 0, isInvalid };
  }
}

export function solToLamports(sol) {
  return parseInt(LAMPORTS_PER_SOL * sol);
}

export function LamportsToSol(lamports) {
  return lamports / LAMPORTS_PER_SOL;
}

export function customTokenToDecimal(amount, decimals) {
  return parseInt(amount * 10 ** decimals);
}

export function customTokenToAmount(amount, decimals) {
  return amount / 10 ** decimals;
}
