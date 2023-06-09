import { useState, useContext } from 'react'
import { MyAppContext } from '../pages/_app'

export default function Bridge() {
  // const { selectedNft } = useContext(MyAppContext)
  const selectedNft = {
    img:
      'https://cdn.geekwire.com/wp-content/uploads/2022/07/melaniabilustracion-No-Planet-B-square-630x630.jpg',
    id: '100',
    name: 'Bufficoin NFT',
    createAt: '5 days ago',
    locked: 'Bridge',
    price: '1.5 ETH',
  }

  return (
    <>
      <div className="container m-auto p-2 w-1/2">
        <div className="grid grid-cols-2 gap-6 bg-gray-400 p-10">
          <div className="max-w-sm pt-4 ">
            <img
              className="rounded-xl"
              src={selectedNft.img}
              alt="selectedNft"
            />

            <div className="flex p-4 justify-between items-center	">
              <h5 className="mb-2 text-2xl tracking-tight text-white dark:text-white">
                {selectedNft.name}
              </h5>
              <p className="mb-3 font-normal  text-white dark:text-white content-center	">
                {selectedNft.createAt}
              </p>
            </div>

            <div className="flex p-3 justify-between items-center	">
              <h5 className="mb-2 text-1xl font-bold tracking-tight text-lime-300 dark:text-white">
                {selectedNft.price}
              </h5>
            </div>
          </div>

          {/* SECOND */}
          <div className="max-w-lg p-4 bg-slate-600 grid justify-items-center">
            <h5 className="mb-2 text-2xl tracking-tight text-white dark:text-white ">
              Transfer NFTs between blockchains
            </h5>

            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 p-4"
            >
              <option selected>Select an option</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>

            <img
              src="https://cdn2.iconfinder.com/data/icons/colorful-design-basic-icons-1/550/cycle_circle_lightblue-512.png"
              alt=""
              className=""
              style={{ marginTop: '-1.2rem', width: '4rem', zIndex: '99' }}
            />

            <select
              id="countries"
              class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 p-4"
              style={{ marginTop: '-45px' }}
            >
              <option selected>Select an option</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
            <button
              className="mt-6 w-full bg-green-500 hover:bg-green-700 text-white font-bold p-4 rounded-full"
              onClick={() => handleNavigate(nft)}
            >
              Continue Bridging
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
