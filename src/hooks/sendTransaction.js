import {
  clusterApiUrl,
  Connection,
  Keypair,
  PublicKey,
  sendAndConfirmTransaction,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import React, { useCallback, useState } from "react";
import { decode } from "base58-universal";
import { LamportsToSol } from "../utils/csvtojson";
import * as splToken from "@solana/spl-token";

export const SendLamportToAddresses = ({
  wallets,
  secretKey,
  tokenType,
  splTokenAddress,
}) => {
  const [connection] = useState(new Connection(clusterApiUrl("devnet")));
  const [isLoading, setIsLoading] = useState(false);

  const onClick = useCallback(async () => {
    let keypair;
    try {
      //convert string secret key to uint8 arrayand generate keypair
      keypair = Keypair.fromSecretKey(decode(secretKey));
    } catch (e) {
      console.log(e);
      alert("Invalid secret key");
      return;
    }
    setIsLoading(true);

    if (tokenType === "sol") {
      const allTransactionPromises = wallets.map((w) =>
        sendTransaction(w.address, w.amount, connection, keypair)
      );

      await Promise.allSettled(allTransactionPromises);
      setIsLoading(false);
      console.log("all transactions completed");
      alert("All transactions completed");
    } else if (tokenType === "spl") {
      const allTransactionPromises = wallets.map((w) =>
        sendTokenTransaction(
          w.address,
          w.amount,
          connection,
          keypair,
          splTokenAddress
        )
      );
      await Promise.allSettled(allTransactionPromises);
      setIsLoading(false);
    }
  }, [tokenType, secretKey, wallets, connection, splTokenAddress]);

  return (
    <button
      onClick={onClick}
      className="m-2"
      disabled={!secretKey || wallets.length === 0 || isLoading}
    >
      {isLoading
        ? "Transactions in progress"
        : "Send Airdrop to all addresses!"}
    </button>
  );
};

const sendTransaction = async (toPubkey, lamports, connection, keypair) => {
  let transaction = new Transaction();
  transaction.add(
    SystemProgram.transfer({
      fromPubkey: keypair.publicKey,
      toPubkey,
      lamports,
    })
  );

  await sendAndConfirmTransaction(connection, transaction, [keypair]);
  console.log(
    `${LamportsToSol(lamports)} Sol sent to ${
      toPubkey.slice(0, 6) + "..." + toPubkey.slice(-6)
    }`
  );
};

export const sendTokenTransaction = async (
  toPubkey,
  amount,
  connection,
  fromWallet,
  tokenAddress
) => {
  var myMint = new PublicKey(tokenAddress);

  var myToken = new splToken.Token(
    connection,
    myMint,
    splToken.TOKEN_PROGRAM_ID,
    fromWallet
  );
  // Create associated token accounts for my token if they don't exist yet
  var fromTokenAccount = await myToken.getOrCreateAssociatedAccountInfo(
    fromWallet.publicKey
  );
  var toTokenAccount = await myToken.getOrCreateAssociatedAccountInfo(
    new PublicKey(toPubkey)
  );
  // Add token transfer instructions to transaction
  var transaction = new Transaction().add(
    splToken.Token.createTransferInstruction(
      splToken.TOKEN_PROGRAM_ID,
      fromTokenAccount.address,
      toTokenAccount.address,
      fromWallet.publicKey,
      [],
      amount
    )
  );
  // Sign transaction, broadcast, and confirm
  await sendAndConfirmTransaction(connection, transaction, [fromWallet]);
  console.log(`Token sent`);
};
