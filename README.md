
## My Circle App

"My Circle" is a soccer sports betting app for Family and Friends.
Allows you to connect with your family and friends who share the same passion for soccer. Create your private circle and engage in friendly rivalries while building unforgettable memories.

Whether you're gathered for a family get-together, hosting a watch party, or simply connecting virtually with friends from all corners of the globe, "My Circle" ensures that the joy of soccer sports betting unites and strengthens your bonds.

Here's what sets "My Circle" apart:
- Exclusive Community
- User-Friendly Interface: Our intuitive and user-friendly interface makes it easy for everyone, regardless of their tech-savviness, to participate and place bets with confidence.

- Diverse Betting Options: Experience a wide range of betting options tailored to soccer enthusiasts. Bet on match winners, scorelines, goal scorers, and more, making each game even more thrilling and engaging

- Secure and Private: Your circle's privacy is our utmost priority. Rest assured that your personal information and betting activities are protected with top-notch security measures.

Whether you're gathered for a family get-together, hosting a watch party, or simply connecting virtually with friends from all corners of the globe, "My Circle" ensures that the joy of soccer sports betting unites and strengthens your bonds.
Join "My Circle" today and embark on an unforgettable journey of friendly rivalry, shared victories, and unforgettable soccer moments. It's time to unleash your inner soccer pundit and experience the thrill of sports betting like never before!


![Preview]()

## How is made

- Chainlink: Helps to bring data from soccerapi to our contract deployed on the Polygon Maumbai.
Chainlink aced as a bridge between smart contracts and external soccerapi(Oracles). Oracles retrieve and verify data from various sources, such as APIs, web services, or IoT devices, and feed it into the smart contracts. This allows our smart contracts to get the official resuls of the game and allows to reward the winner.
We also deployed a Chainlink Automation Job Scheduler

- Mumbai Polygon Network Deployed app on the Polygon Mumbai Network(0x5FbDB2315678afecb367f032d93F642f64180aa3) for NFT donations, NFT creations, and stream payments for Street Vendors.

- Covalent Helps to display a dashboard of all transactions by contract and fetches all NFTS that were donated to on the food street vendor page.

* IPFS NFTStorage Used IPFS to store all food street vendor data facilitated the storage of NFTS, details of the class, and metadata of every event class. We are also, saving all the reviews, tags, class difficulty, class quality, and ratings.

* We used Solidity for the smart contract.

* We used OpenZeppelin ERC721 we use the ERC721 template for faster development of our smart contract.

* Hardhat for local blockchain development.

* We used Tailwindcss, React Js for the frontend, and Ethersjs to connect to the blockchain.


## Challenges we ran into
We run into some complications with the Smart contracts and the Chainlink integration, they took us longer than expected. Especially, creating a custome automation

## Accomplishments that we're proud of
We are proud of the final MVP and how our project went from an idea to a demo

## What we learned
roughout this project, we gained valuable experience in utilizing Chainlink's capabilities. Our focus was on effectively integrating Chainlink oracles into our workflow, enabling us to retrieve and verify data from a multitude of sources, including APIs, web services, and IoT devices. By seamlessly integrating this data into our smart contracts, we were able to enhance their functionality and decision-making capabilities. Additionally, we successfully deployed a Chainlink Automation Job Scheduler, further streamlining and automating our data retrieval and processing tasks. This hands-on experience has provided us with a deeper understanding of Chainlink's potential and its role in enabling secure and reliable data interactions within smart contracts.

## What's next
Post updates Upon bet creations and add a point system for users.



#### Deployed Chainlink Automation Job Scheduler
- my dashboard https://automation.chain.link/mumbai
- transaction hash https://mumbai.polygonscan.com/tx/0x64fa27145d4eacedb061908dd46fb66d1a81537bdad35a1136d5334e4b7de976

- Soccer API: http://api.football-data.org/v4/competitions

For similar contents maybe we can have a LM
set measurement
if 80 % is similar to preveious stories
don't approave it
approave

##Materials used(Designs, APIs... )
- https://www.figma.com/file/OfFrIVvxBup2SMCodJf5Tn/Untitled?type=design&node-id=0-1&t=VWPS6awb52vcInHA-0

## Get Started

- yarn
- yarn run dev
