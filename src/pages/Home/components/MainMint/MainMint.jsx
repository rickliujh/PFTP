import { useState } from 'react'
import { ethers, BigNumber, Wallet } from 'ethers'
import styles from './style.module.css'
import PftpNft from '../../../../PFTP.json'

const PftpNftAddress = "0x2C14059AE248B796A86b24af4421D7BbD96DDF91";

const MainMint = ({ accounts, setAccounts }) => {
    const [mintAmount, setMintAmount] = useState(1);
    const [msg, setMsg] = useState("");

    const isConnected = Boolean(accounts[0]);

    const mint = async () => {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                PftpNftAddress,
                PftpNft.abi,
                signer
            );

            console.log(`trying to mint: address: ${await signer.getAddress()}, mintAmount: ${BigNumber.from(mintAmount).toString()}`);

            try {
                const response = await contract.mint(await signer.getAddress(), BigNumber.from(mintAmount), {
                    gasLimit: BigNumber.from(3000000)
                });
                console.log(response);
                setMsg("watting to confirm...")
            } catch (err) {
                console.log("error: ", err);
                setMsg("something went wrong")
            }
        }
    }

    const changeMintAmount = (event) => {
        let val = event.target.value
        if (val < 3 || val > 0) {
            console.log("change value: ", val);
            setMintAmount(val)
        }
    }

    return (
        <>

            <h1>PFTP</h1>
            {
                isConnected ? (
                    <>
                        <input type="number" placeholder='Mint Amount' min='1' max='2' defaultValue='1' onChange={changeMintAmount} />
                        <button type='button' onClick={mint} >mint</button>
                        {msg ? (<p>{msg}</p>) : (<></>)}
                    </>
                ) : (
                    <p className={styles.MainMint}>you must be connected to mint.</p>

                )
            }
        </>
    )
}

export default MainMint