import React, { useState, useContext, useEffect } from 'react'
import Image from 'next/image'
import BuyToken from '../components/BuyToken'
import CreateBet from '../components/CreateBet'
import { MyAppContext } from '../pages/_app'
const { ethers } = require('ethers')

function NftDetails({}) {
  const [showModal, setShowModal] = useState(0)
  const [showCreateBet, setShowCreateBet] = useState(false)
  const [selectedBet, setSelectedBet] = useState('')
  const [total, setTotal] = useState(0)
  const [betAmount, setBetAmount] = useState(0)
  const [title, setTitle] = useState('Manchester vs Chelsea')
  const { contract, account, allBets, setAllBets } = useContext(MyAppContext)
  console.log('What are all allBets:', allBets)

  const tokenPrice = 2
  const sellers = [
    {
      id: 1,
      wallet: '0xh...123',
      price: 0.1,
      available_tokens: 2000,
    },
    {
      id: 1,
      wallet: '0xh...123',
      price: 0.15,
      available_tokens: 100,
    },
  ]

  const calculatePrice = (num) => {
    return num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
  }

  const getWinner = async (e) => {
    try {
      if (contract) {
        const tx = await contract.winner()
        const bigNumberAsString = tx.toString()
        console.log(' bigNumberAsString:', bigNumberAsString)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getOwnersList = async (nftID) => {
    console.log('🚀 ~ file: nftDetails.js:53 ~ NftDetails ~ nftID:', nftID)
    try {
      if (contract) {
        const tx = await contract.getOwnersList(nftID)
        console.log('🚀 ~ file: nftDetails.js:57 ~ getOwnersList ~ tx:', tx)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleMint = async (e) => {
    console.log('🚀contract,account,', contract, account)
    try {
      if (contract) {
        const nftID = 1
        const amount = 1

        const gasLimit = 1000000
        const gasPrice = ethers.utils.parseUnits('20', 'gwei')
        const value = ethers.utils.parseEther('0.01')
        const functionArgs = [
          '0x5df598c222c4a7e8e4ab9f347dcbd924b6458382',
          1,
          1,
          [],
        ]

        const tx = await contract.mint(...functionArgs, {
          value,
          gasLimit,
          gasPrice,
        })
        console.log('BEFORE:', tx)
        await tx.wait()
        console.log('🚀 ~ file: nftDetails.js:53 ~ handleMint ~ tx:', tx)

        if (tx?.to) {
          // toastCreateTaskSuccess(toast)
          // console.log('_tx', tx)
          // const transationId = tx?.to
          // console.log('transationId', transationId)
          // const event = contract.on('taskAdded')
          // console.log(event)
          // router.push('/tasks')
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {
    setSelectedToken(e.target.value)
  }

  const teams = ['Manchester United F.C.', 'Chelsea']
  const payments = [
    {
      label: 'Chainlink',
      value: 'Chainlink',
    },
    {
      label: 'Matic',
      value: 'Matic',
    },
    {
      label: 'USDC',
      value: 'USDC',
    },
  ]

  const prepareJoinBet = async (id) => {
    console.log('🚀what is the  id:', id)
    setShowModal(true)
    setSelectedBet(id)
  }
  console.log('setSelectedBet:', selectedBet)

  const getAllBets = async () => {
    try {
      const req = await contract.getAllBetIds()
      console.log('🚀 ~ file: _app.js:55 ~ getAllBets ~ req:', req)
      // need to create obj
      const temp = []

      for (let i = 0; i < req.length; i++) {
        const cur = req[i]
        const currentBetAllInfo = await contract.bets(cur.id)
        const obj = {}
        obj.amount = ethers.utils.formatEther(cur.amount.toString())
        obj.bets = cur.bets
        obj.creator = cur.creator
        obj.id = cur.id.toString()
        obj.isActive = cur.isActive
        obj.team1 = cur.team1
        obj.team2 = cur.team2
        obj.totalBets = currentBetAllInfo.totalBets.toString()
        obj.winnerTeam = cur.winnerTeam
        obj.winningAmount = cur.winningAmount.toString()
        temp.push(obj)
        const pool = cur.winningAmount.toString()
        let amount = ethers.utils.formatEther(cur.amount.toString())
      }

      setAllBets(temp)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (contract) {
      getAllBets()
    }
  }, [contract])

  return (
    <>
      <BuyToken
        showModal={showModal}
        setShowModal={setShowModal}
        handleChange={handleChange}
        payments={payments}
        betAmount={betAmount}
        teams={teams}
        setBetAmount={setBetAmount}
        selectedBet={selectedBet}
        calculatePrice={calculatePrice}
      />
      <CreateBet
        showCreateBet={showCreateBet}
        setShowCreateBet={setShowCreateBet}
        handleChange={handleChange}
        payments={payments}
        teams={teams}
        title={title}
        setTitle={setTitle}
        tokenPrice={tokenPrice}
        betAmount={betAmount}
        setBetAmount={setBetAmount}
        calculatePrice={calculatePrice}
        handleMint={handleMint}
      />

      <div className="grid grid-cols-4 gap-20">
        <div className="col-span-2 gap-1 pl-2">
          <div className="flex justify-between items-center space-x-10">
            <p className="text-4xl font-normal leading-normal mt-0 mb-2 text-white  py-8">
              Manchester United F.C. vs Chelsea
            </p>
            <div>
              <button
                type="button"
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                onClick={() => setShowCreateBet(true)}
              >
                Create Bet
              </button>
              <button
                type="button"
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                onClick={() => getOwnersList(1)}
              >
                getOwnersList
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div className="justify items-center flex ">
              <Image
                style={{ width: '200px', height: '200px', borderRadius: '50%' }}
                src="/man.png"
                alt="logo"
                width={400}
                height={400}
              />
            </div>
            <div className="justify items-end">
              <p className="text-md text-slate-500 leading-relaxed text-right">
                Token price: $2.00
              </p>
            </div>
          </div>

          <p className="text-lg text-white py-5 leading-relaxed pb-8">
            Manchester United F.C. is a strong team with the current probability
            of being the champion of 14.5 percent. This percentage represents
            its performance during this season.
            <br />
            The Manchester United F.C. token current value is 2.00 Matic per
            token.
          </p>

          <p className="text-md text-slate-500 leading-relaxed ">
            Token Performance
          </p>
          <Image
            style={{ width: '100%', height: '40%' }}
            src="/chart.png"
            alt="logo"
            width={900}
            height={900}
          />
        </div>

        <div className="col-span-2 card overflow-hidden overflow-y-auto h-50 pt-10">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 overflow-hidden">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Creator
                </th>
                <th scope="col" className="px-6 py-3">
                  Team 1
                </th>
                <th scope="col" className="px-6 py-3">
                  Team 2
                </th>
                <th scope="col" className="px-6 py-3">
                  # of takers
                </th>
                <th scope="col" className="px-6 py-3">
                  Prize pool
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {/* allBets */}
              {allBets.length > 0 ? (
                allBets.map((bet, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700  duration-300 ease-in-out hover:bg-neutral-100  group"
                  >
                    <td className="px-6 py-4">
                      {bet.creator.slice(0, 4) + '..' + bet.creator.slice(38)}
                    </td>
                    {/* <td className="px-6 py-4"> {bet.price} Matic</td> */}
                    <td className="px-6 py-4"> {bet.team1} </td>
                    {/* <td className="px-6 py-4">{bet.available_bets} </td>
                     */}
                    <td className="px-6 py-4"> {bet.team2} </td>
                    <td className="px-6 py-4"> {bet.totalBets} </td>
                    <td className="px-6 py-4"> {bet.amount * bet.totalBets}</td>
                    <td className="px-6 py-4 hidden group-hover:block">
                      <button
                        type="button"
                        className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        onClick={() => prepareJoinBet(bet.id)}
                      >
                        Join bet
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <td>There are not currently bets for sale at this time</td>
              )}

              {/* OLD */}
              {/* {sellers.length > 0 ? (
                sellers.map((token, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700  duration-300 ease-in-out hover:bg-neutral-100  group"
                  >
                    <td className="px-6 py-4"> {token.wallet} </td>
                    <td className="px-6 py-4"> {token.price} Matic</td>
                    <td className="px-6 py-4">{token.available_tokens} </td>
                    <td className="px-6 py-4 hidden group-hover:block">
                      <button
                        type="button"
                        className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        onClick={() => setShowModal(token.id)}
                      >
                        Buy Token
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <p>There are not currently tokens for sale at this time</p>
              )} */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default NftDetails
