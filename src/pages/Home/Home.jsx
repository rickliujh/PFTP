import { useState } from 'react'
import styles from './style.module.css'
import whiteLogo from '../../images/white.svg'
import NFTLogo from '../../images/NFT.jpg'
import Wallet from './components/Wallet'
import MainMint from './components/MainMint'

const Home = () => {
  const [accounts, setAccounts] = useState([])

  return (
    <div className={styles.home}>
      <header>
        <div className={styles.logo}>
          <img src={whiteLogo} alt="white" />
          <img src={NFTLogo} alt="NFT" />
        </div>
        <nav className={styles.nav}>
          <p className={styles.summary}>
            PFTP is an artwork that uses mysterious oriental elements to express the yearning and exploration of an-cient civilizations,and you can guess where they all come from? This set of works lays the foundation for moreexploration results in the future.
          </p>
          <ul>
            <li><a href="#">team</a></li>
            <li><a href="#">twitter</a></li>
            <li><a href="#">about</a></li>
            <li><Wallet accounts={accounts} setAccounts={setAccounts} /></li>
          </ul>
        </nav>
      </header>
      <div className={styles.stripe}></div>
      <div className={styles.banner}>
        <MainMint accounts={accounts} setAccounts={setAccounts} />
      </div>
    </div>
  )
}

export default Home
