import React, { useCallback, useEffect, useState } from "react";
import CsvImporter from "./components/CsvImporter";
import {
  SendLamportToAddresses,
  sendTokenTransaction,
} from "./hooks/sendTransaction";
import {
  customTokenToAmount,
  customTokenToDecimal,
  LamportsToSol,
  solToLamports,
} from "./utils/csvtojson";

function AirDrop() {
  const [secretKey, setSecretKey] = useState("");
  const [airdropWallets, setAirdropWallets] = useState([]);
  const [tokenType, setTokenType] = useState("sol");
  const [splTokenAddress, setSplTokenAddress] = useState("");
  const [decimals, setDecimals] = useState(-1);

  useEffect(() => {
    if (airdropWallets.length > 0) {
      const updatedAirdropWallets = airdropWallets.map((wallet) => {
        return {
          ...wallet,
          amount:
            decimals === -1
              ? solToLamports(wallet.orgAmount)
              : customTokenToDecimal(wallet.orgAmount, decimals),
        };
      });
      setAirdropWallets(updatedAirdropWallets);
    }
  }, [decimals]);

  return (
    <div className="wallet-btn-container">
      <label>Secret Key</label>
      <input
        className="form-field m-2"
        autoComplete="off"
        type="text"
        value={secretKey}
        style={{ maxWidth: "100vw", width: "400px" }}
        onChange={(e) => setSecretKey(e.target.value)}
        placeholder="Enter your secret key"
      />
      <div style={{ margin: "20px 0", display: "flex", alignItems: "center" }}>
        <label htmlFor="sol">Sol</label>
        <input
          type="radio"
          id="sol"
          name="token-type"
          defaultChecked
          onChange={(e) => {
            if (e.target.checked) {
              setTokenType("sol");
              setDecimals(-1);
            }
          }}
        />
        <label htmlFor="spl">SPL Token</label>
        <input
          type="radio"
          id="spl"
          name="token-type"
          onChange={(e) => {
            if (e.target.checked) {
              setTokenType("spl");
              setDecimals(9);
            }
          }}
        />
      </div>
      {tokenType === "spl" && (
        <div>
          <input
            className="form-field m-2"
            autoComplete="off"
            type="text"
            value={splTokenAddress}
            style={{ maxWidth: "100vw", width: "400px" }}
            onChange={(e) => setSplTokenAddress(e.target.value)}
            placeholder="Enter SPL token address"
          />
          <input
            type="number"
            value={decimals}
            onChange={(e) => setDecimals(e.target.value)}
            min="0"
            max="20"
          />
        </div>
      )}
      <CsvImporter setWallets={setAirdropWallets} decimal={decimals} />
      {airdropWallets.length > 0 && (
        <SendLamportToAddresses
          wallets={airdropWallets}
          secretKey={secretKey}
          tokenType={tokenType}
          splTokenAddress={splTokenAddress}
        />
      )}
      {airdropWallets.length > 0 && (
        <div style={{ height: "400px", overflow: "auto" }}>
          <table>
            <thead>
              <tr>
                <th>Wallet</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {airdropWallets.map((wallet, i) => (
                <tr key={`wallet-${i}`}>
                  <td>{wallet.address}</td>
                  <td>{wallet.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default AirDrop;
