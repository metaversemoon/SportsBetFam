// SPDX-License-Identifier: MIT
pragma solidity ^ 0.8 .0;

contract SoccerBetting {
    struct Bet {
        uint256 id;
        address creator;
        uint256 amount;
        uint256 totalBets;
        uint256 winningAmount;
        string team1;
        string team2;
        string winnerTeam;
        bool isActive;
        address[] bets;
        // mapping(address => uint256) bets;
    }

    mapping(uint256 => Bet) public bets;
    Bet[] public listOFBets;

    uint256 public betCount;

    event BetCreated(uint256 betId, address creator, uint256 amount);
    event BetJoined(uint256 betId, address participant, uint256 amount);
    event BetWinner(uint256 betId, address winner, uint256 amount);

    function createBet(string memory team1, string memory team2) external payable {
        // require(msg.value > 0, "Amount must be greater than 0");
        betCount++;
        Bet storage newBet = bets[betCount];
        newBet.id = betCount;
        newBet.creator = msg.sender;
        newBet.amount = msg.value;
        newBet.totalBets = 0;
        newBet.winningAmount = 0;
        newBet.isActive = true;
        newBet.team1 = team1;
        newBet.team2 = team2;
        newBet.winnerTeam;
        listOFBets.push(newBet);
        emit BetCreated(betCount, msg.sender, msg.value);
    }

    function joinBet(uint256 betId) external payable {
        Bet storage bet = bets[betId];
        require(bet.isActive, "Bet is not active");
        require(msg.value == bet.amount, "Amount does not match the bet");

        bet.totalBets++;
        bet.bets.push(msg.sender);

        emit BetJoined(betId, msg.sender, msg.value);
    }

    //  automation by chainlink, chainlink calls an Api gets the winningTeam and declareWinner
    function declareWinner(uint256 betId, address winner) external {
        Bet storage bet = bets[betId];
        // require(bet.creator == msg.sender, "Only the creator can declare the winner");
        require(bet.isActive, "Bet is not active");

        uint256 totalAmount = bet.amount * bet.totalBets;
        uint256 winnerAmount = totalAmount - (totalAmount / 10); // 10% fee deduction for the platform

        bet.isActive = false;
        bet.winningAmount = winnerAmount;

        payable(winner).transfer(winnerAmount);

        emit BetWinner(betId, winner, winnerAmount);

        listOFBets[betCount] = bet;
    }

    function getBetInfo(uint256 betId) external view returns(
        uint256 id,
        address creator,
        uint256 amount,
        uint256 totalBets,
        uint256 winningAmount,
        bool isActive
    ) {
        Bet storage bet = bets[betId];
        return (
            bet.id,
            bet.creator,
            bet.amount,
            bet.totalBets,
            bet.winningAmount,
            bet.isActive
        );
    }

    function getAllBetIds() external view returns(Bet[] memory) {

        return listOFBets;
    }

}
