import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ethers } from "ethers";

function Header() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");

  const connectwalletHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangedHandler(result[0]);
        });
    } else {
      setErrorMessage("Install MetaMask");
    }
  };

  // }
  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    getUserBalance(newAccount);
  };

  const disConnectHandler = () => {
    setUserBalance(null);
  };

  const getUserBalance = (address) => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [address, "latest"] })
      .then((balance) => {
        setUserBalance(ethers.utils.formatEther(balance));
      });
  };
  useEffect(() => {}, [defaultAccount]);
  return (
    <div className="header container-custome">
      {/* <div className="walletCard">
        <h4>{"Connection to MetaMask using window.ethereum methods"}</h4>
        <button onClick={connectwalletHandler}>{connButtonText}</button>
        <div className="accountDisplay">
          <h3> Address:{defaultAccount}</h3>
        </div>
        <div className="balanceDisplay">
          <h3> Balance:</h3>
        </div>
        {errorMessage}
      </div> */}
      <div className="logo">
        <Link className="Link" to="/">
          <span class="CryptoGame">
            Crypto<span class="text-style-1">Game</span>
          </span>
        </Link>
      </div>
      <div className="connection">
        {/* price  */}
        {errorMessage ? (
          <span className="Balance-0053-Eth">Error: {errorMessage} </span>
        ) : (
          <span className="Balance-0053-Eth">Balance : {userBalance} Eth</span>
        )}
        <div className="Rectangle-8">
          {userBalance === null && (
            <h2 onClick={connectwalletHandler} className="CONNECT">
              CONNECT
            </h2>
          )}
          {userBalance !== null && (
            <h2 onClick={() => disConnectHandler()} className="CONNECT">
              DISCONNECT
            </h2>
          )}
        </div>

        {/* price  */}
      </div>
    </div>
  );
}

export default Header;
