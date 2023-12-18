import React, { useState } from 'react';
import axios from 'axios';
// ... other imports

const handleSwap = async () => {
  try {
    const response = await axios.post('http://spacepacket.net/swap', {
      fromToken: swapDirection === 'FUTToToken' ? 'FUT' : selectedToken,
      toToken: swapDirection === 'FUTToToken' ? selectedToken : 'FUT',
      amount,
      userAddress: 'USER_WALLET_ADDRESS' // You need to get this from the wallet connection
    });
    console.log(response.data);
  } catch (error) {
    console.error('Swap error:', error);
  }
};


const FutureCoin = () => {
  const [amount, setAmount] = useState('');
  const [selectedToken, setSelectedToken] = useState(''); // Token to swap with FUT
  const [swapDirection, setSwapDirection] = useState('FUTToToken'); // Default swap direction

  const availableTokens = ['ETH', 'BNB', 'USDT']; // Example tokens

  const handleSwap = async () => {
    // Implement the swap logic based on the selected token and direction
    await swapTokens(amount, selectedToken, swapDirection);
  };

  return (
    <div>
      <div>
        <label>Select Token:</label>
        <select
          value={selectedToken}
          onChange={(e) => setSelectedToken(e.target.value)}
        >
          {availableTokens.map((token) => (
            <option key={token} value={token}>{token}</option>
          ))}
        </select>
      </div>

      <div>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount to Swap"
        />
      </div>

      <div>
        <label>Swap Direction:</label>
        <select
          value={swapDirection}
          onChange={(e) => setSwapDirection(e.target.value)}
        >
          <option value="FUTToToken">FUT to Selected Token</option>
          <option value="TokenToFUT">Selected Token to FUT</option>
        </select>
      </div>

      <button onClick={handleSwap}>Swap Tokens</button>
    </div>
  );
};

export default FutureCoin;

