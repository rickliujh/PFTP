import React from 'react'
import styles from './style.module.css'

const Wallet = ({ accounts, setAccounts }) => {
  let isConnected = Boolean(accounts[0])

  const connectWallet = async () => {
    if (window.ethereum) {
      const accounts  = await window.ethereum.request({
        method: "eth_requestAccounts"
      });
      setAccounts(accounts);
    }
    console.log("connectWallet");
  }
  
  return (
    <button className={styles.wallet} type='button' onClick={connectWallet}>{
      isConnected ? "Connected" : "Connect Wallet"
    }</button>
  )
}

export default Wallet
