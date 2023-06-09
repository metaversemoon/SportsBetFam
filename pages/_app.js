import '../styles/globals.css'
import React, { useState } from 'react'
import Head from 'next/head'
import Navbar from 'src/components/Navbar'
import Footer from 'src/components/Footer'
import { ABI } from '../components/abis/ABI'
const { ethers } = require('ethers')

export const MyAppContext = React.createContext({
  active: undefined,
  setActive: undefined,
  selectedNft: undefined,
  setSelectedNft: undefined,
  account: undefined,
  setAccount: undefined,
  contract: undefined,
  setContract: undefined,
  provider: undefined,
  setProvider: undefined,
  signer: undefined,
  setSigner: undefined,
  allBets: undefined,
  setAllBets: undefined,
  selectedTask: undefined,
  setSelectedTask: undefined,
  isQuestSuccessfullycompleted: undefined,
  setIsQuestSuccessfullycompleted: undefined,
  userUD: undefined,
  setUserUD: undefined,
  currentAccountUd: undefined,
  setCurrentAccountUd: undefined,
  balance: undefined,
  setBalance: undefined,
  chainId: undefined,
  setChainId: undefined,
})

export default function App({ Component, pageProps, router }) {
  const [active, setActive] = useState('home')
  const [account, setAccount] = useState('')
  const [contract, setContract] = useState('')
  const [selectedNft, setSelectedNft] = useState('')

  const [provider, setProvider] = useState('')
  const [signer, setSigner] = useState('')
  const [allBets, setAllBets] = useState('')
  const [selectedTask, setSelectedTask] = useState('')
  const [userUD, setUserUD] = useState('')

  const connectWallet = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })
      setAccount(accounts[0])

      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()

      const CONTRACT_ADDRESS = '0xeED0adE240A24abb5794f0D693563F9C9f749B7b'
      const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer)
      console.log({ contract })
      setContract(contract)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <MyAppContext.Provider
      value={{
        active,
        setActive,
        account,
        setAccount,
        contract,
        setContract,
        selectedNft,
        setSelectedNft,
        provider,
        setProvider,
        signer,
        setSigner,
        allBets,
        setAllBets,
        selectedTask,
        setSelectedTask,
        userUD,
        setUserUD,
      }}
    >
      <Head>
        <title>Soccer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="w-full text-white overflow-hidden">
        <Navbar
          active={active}
          account={account}
          connectWallet={connectWallet}
        />
      </div>
      <Component {...pageProps} key={router.route} />
      <Footer />
    </MyAppContext.Provider>
  )
}
