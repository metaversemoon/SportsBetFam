import { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import { MyAppContext } from '../pages/_app'

const data = [
  {
    img:
      'https://cdn.geekwire.com/wp-content/uploads/2022/07/melaniabilustracion-No-Planet-B-square-630x630.jpg',
    id: '100',
    name: 'Bufficoin NFT',
    createAt: '5 days ago',
    locked: 'Bridge',
    price: '1.5 ETH',
  },
  {
    img:
      'https://cdn.geekwire.com/wp-content/uploads/2022/07/melaniabilustracion-No-Planet-B-square-630x630.jpg',
    id: '1',
    name: 'Bufficoin NFT',
    createAt: '5 days ago',
    locked: 'Unlock',
    price: '1.5 ETH',
  },
  {
    img:
      'https://cdn.geekwire.com/wp-content/uploads/2022/07/melaniabilustracion-No-Planet-B-square-630x630.jpg',
    id: '1',
    name: 'Bufficoin NFT',
    createAt: '5 days ago',
    locked: 'Bridge',
    price: '1.5 ETH',
  },
  {
    img:
      'https://cdn.geekwire.com/wp-content/uploads/2022/07/melaniabilustracion-No-Planet-B-square-630x630.jpg',
    id: '1',
    name: 'Bufficoin NFT',
    createAt: '5 days ago',
    locked: 'Unlock',
    price: '1.5 ETH',
  },
  {
    img:
      'https://cdn.geekwire.com/wp-content/uploads/2022/07/melaniabilustracion-No-Planet-B-square-630x630.jpg',
    id: '1',
    name: 'Bufficoin NFT',
    createAt: '5 days ago',
    locked: 'Bridge',
    price: '1.5 ETH',
  },
  {
    img:
      'https://cdn.geekwire.com/wp-content/uploads/2022/07/melaniabilustracion-No-Planet-B-square-630x630.jpg',
    id: '1',
    name: 'Bufficoin NFT',
    createAt: '5 days ago',
    locked: 'Bridge',
    price: '1.5 ETH',
  },
  {
    img:
      'https://cdn.geekwire.com/wp-content/uploads/2022/07/melaniabilustracion-No-Planet-B-square-630x630.jpg',
    id: '1',
    name: 'Bufficoin NFT',
    createAt: '5 days ago',
    locked: 'Unlock',
    price: '1.5 ETH',
  },
]

export default function Profile() {
  const router = useRouter()
  const { setSelectedNft } = useContext(MyAppContext)

  const handleNavigate = (nft) => {
    setSelectedNft(nft)
    router.push('/bridge')
  }
  return (
    <>
      <div className="container m-auto py-16 pb-16">
        <div className="grid grid-cols-5 gap-6">
          {data.length ? (
            data.map((nft, index) => (
              // border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700
              <div className="max-w-sm  pb-4 mb-8 bg-slate-800" key={index}>
                <img className="rounded-t-lg" src={nft.img} alt="" />

                <div className="flex p-3 justify-between items-center	">
                  <h5 className="mb-2 text-2xl tracking-tight text-white dark:text-white">
                    {nft.name}
                  </h5>
                  <p className="mb-3 pl-1 font-normal text-gray-400 dark:text-gray-400 content-center	">
                    {nft.createAt}
                  </p>
                </div>

                <div className="flex p-3 justify-between items-center	">
                  <h5 className="mb-2 text-1xl font-bold tracking-tight text-lime-300 dark:text-white">
                    {nft.price}
                  </h5>

                  <button
                    className="w-32 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={() => handleNavigate(nft)}
                  >
                    {nft.locked}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <h2>No NFTs Yet...</h2>
          )}
        </div>
      </div>
    </>
  )
}
