/* eslint-disable jsx-a11y/anchor-is-valid */
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
    <div className="airdrop-main">
      <div className="wallet-btn-container">
        <h1 className="airdrop-head">
          Aidrop Sol Tokens Fast, Free & Securely!{" "}
        </h1>
        <label className="main-label">Secret Key</label>
        <input
          className="form-field m-2 form-control-lg "
          autoComplete="off"
          type="text"
          value={secretKey}
          style={{ maxWidth: "80vw", width: "400px" }}
          onChange={(e) => setSecretKey(e.target.value)}
          placeholder="Enter your secret key"
        />
        <div
          style={{
            margin: "10px 20px",
            display: "flex",
            alignItems: "center",
            padding: "0 20px",
          }}
        >
          <label htmlFor="sol" className="sol-token-label">
            Sol
          </label>
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
          <label htmlFor="spl-token-label" className="spl-token-label">
            SPL Token
          </label>
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
              style={{
                maxWidth: "60vw",
                width: "320px",
                borderRadius: "3px",
                padding: "5px 10px",
                fontSize: "14px",
              }}
              onChange={(e) => setSplTokenAddress(e.target.value)}
              placeholder="Enter SPL token address"
            />
            <input
              type="number"
              style={{
                padding: "5px 3px",
                borderRadius: "3px",
                fontSize: "14px",
                width: "70px",
                marginBottom: "2.5rem",
              }}
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
        <div className="download-results">
          <a
            id="download-results"
            style={{ color: "blue", cursor: "pointer", display: "none" }}
          >
            Download Results
          </a>
        </div>
        {airdropWallets.length > 0 && (
          <div
            style={{
              fontSize: "17px",
              overflow: "auto",
              color: "rgb(13, 18, 29)",
              marginTop: "40px",
              fontSize: "13px",
              marginBottom: "40px",
            }}
          >
            <table>
              <thead>
                <tr className="address-head">
                  <th
                    style={{
                      fontSize: "17px",
                      fontWeight: "500",
                      marginBottom: "50px",
                      padding: "10px 0px",
                      paddingLeft: "12px",
                      borderBottom: "1px solid rgb(13, 18, 29)",
                    }}
                  >
                    Wallet
                  </th>
                  <th
                    style={{
                      fontSize: "17px",
                      fontWeight: "500",
                      marginBottom: "50px",
                      padding: "10px 0px",
                      paddingLeft: "5px",
                      borderBottom: "1px solid rgb(13, 18, 29)",
                    }}
                  >
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody
                style={{
                  borderBottom: "1px solid rgb(13, 18, 29)",
                  marginBottom: "50px",
                }}
              >
                {airdropWallets.map((wallet, i) => (
                  <tr key={`wallet-${i}`}>
                    <td style={{ fontSize: "10px", padding: "7px 12px" }}>
                      {wallet.address}
                    </td>
                    <td style={{ fontSize: "10px", padding: "7px 12px" }}>
                      {wallet.orgAmount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default AirDrop;
