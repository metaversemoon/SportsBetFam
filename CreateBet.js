import React, { useState, useContext } from 'react'
import Image from 'next/image'
import { MyAppContext } from 'src/pages/_app'
import { ethers } from 'ethers'

function CreateBet({
  showCreateBet,
  setShowCreateBet,
  handleChange,
  payments,
  title,
  setTitle,
  tokenPrice,
  betAmount,
  setBetAmount,
  calculatePrice,
  handleMint,
  teams,
}) {
  const { contract, allBets, setAllBets } = useContext(MyAppContext)
  const createBet = async (team1, team2) => {
    try {
      if (contract && betAmount > 0) {
        const t1 = 'Manchester United F.C.'
        const t2 = 'Chelsea'

        const req = await contract.createBet(t1, t2, {
          value: ethers.utils.parseUnits(betAmount, 'ether'),
        })
        setShowCreateBet(false)

        console.log('🚀 ~ file: _app.js:55 ~ getAllBets ~ req:', req)
        if (req) {
          setAllBets(req)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      {showCreateBet ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Create Bet</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowCreateBet(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>

                {/*body*/}
                <div className="flex-auto justify-center items-center flex overflow-x-hidden  p-6 ">
                  <p className="my-4 text-slate-500 text-3xl leading-relaxed justify-center">
                    {`$ ${calculatePrice(Number(betAmount))}`}
                    <span className="pl-2 text-sm leading-relaxed">Total</span>
                  </p>
                </div>

                {/* CARD */}
                <div className="max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700">
                  {/* GRID */}

                  <div className="grid grid-cols-2">
                    <div className="justify items-center flex "></div>
                    <div className="flex">
                      <p className="text-sm text-slate-500 leading-relaxed">
                        Please enter all fields
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 p-6">
                    <p className="text-lg">Bet Amount</p>
                    <input
                      className=" placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                      placeholder="amount"
                      type="text"
                      name="amount"
                      value={betAmount}
                      onChange={(e) => setBetAmount(e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-2 p-6">
                    <div className="justify items-center flex overflow-x-hidden overflow-y-auto">
                      <p className="text-lg">Your Pick</p>

                      <Image
                        style={{ width: '25px', height: '25px' }}
                        src="/group.png"
                        alt="coin"
                        className="m-auto"
                        width={400}
                        height={400}
                      />
                    </div>

                    <div>
                      <select className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm">
                        {teams.map((option, idx) => (
                          <option
                            value={option}
                            key={idx}
                            onChange={(e) => setTitle(e.target.value)}
                          >
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Token amount */}
                  <div className="grid grid-cols-2 p-6">
                    <div className="justify items-center flex overflow-x-hidden overflow-y-auto">
                      <p className="text-lg">Pay with</p>

                      <Image
                        style={{ width: '25px', height: '25px' }}
                        src="/chain.png"
                        alt="coin"
                        className="m-auto"
                        width={400}
                        height={400}
                      />
                    </div>

                    <div>
                      <select className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm">
                        {payments.map((option, idx) => (
                          <option value={option.value} key={idx}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowCreateBet(false)}
                  >
                    Never mind
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={createBet}
                  >
                    Create Bet
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}

export default CreateBet
