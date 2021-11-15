import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import React from "react";
import { csvToJson } from "../utils/csvtojson";

export default function CsvImporter({ setWallets, decimal }) {
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file.type !== "text/csv") {
      alert("Please select a CSV file");
      return;
    } else {
      const reader = new FileReader();
      reader.onload = function (event) {
        const {
          result: walletsArray,
          totalAmount,
          isInvalid,
        } = csvToJson(event.target.result, false, decimal);
        console.log(isInvalid);
        console.log(
          totalAmount,
          "lamports",
          totalAmount / LAMPORTS_PER_SOL,
          "sol"
        );
        setWallets(walletsArray);
      };
      reader.readAsBinaryString(file);
    }
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileSelect} />
    </div>
  );
}
