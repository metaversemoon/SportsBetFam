export const ABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'betId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'creator',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'BetCreated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'betId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'participant',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'BetJoined',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'betId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'winner',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'BetWinner',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'team1',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'team2',
        type: 'string',
      },
    ],
    name: 'createBet',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'betId',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'winner',
        type: 'address',
      },
    ],
    name: 'declareWinner',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'betId',
        type: 'uint256',
      },
    ],
    name: 'joinBet',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'betCount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'bets',
    outputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'creator',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'totalBets',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'winningAmount',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'team1',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'team2',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'winnerTeam',
        type: 'string',
      },
      {
        internalType: 'bool',
        name: 'isActive',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getAllBetIds',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'creator',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'totalBets',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'winningAmount',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'team1',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'team2',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'winnerTeam',
            type: 'string',
          },
          {
            internalType: 'bool',
            name: 'isActive',
            type: 'bool',
          },
          {
            internalType: 'address[]',
            name: 'bets',
            type: 'address[]',
          },
        ],
        internalType: 'struct SoccerBetting.Bet[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'betId',
        type: 'uint256',
      },
    ],
    name: 'getBetInfo',
    outputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'creator',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'totalBets',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'winningAmount',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'isActive',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'listOFBets',
    outputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'creator',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'totalBets',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'winningAmount',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'team1',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'team2',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'winnerTeam',
        type: 'string',
      },
      {
        internalType: 'bool',
        name: 'isActive',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]
