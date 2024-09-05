import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Widget = () => {
  const [btcPrice, setBtcPrice] = useState(null);
  const [usd, setUsd] = useState('');
  const [btc, setBtc] = useState('--');
  const [lastUpdated, setLastUpdated] = useState('--');
  const maxUsd = 100000000; // Max USD limit

  useEffect(() => {
    fetchBtcPrice();
  }, []);

  const fetchBtcPrice = async () => {
    try {
      const response = await axios.get(
        'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd'
      );
      const price = response.data.bitcoin.usd;
      setBtcPrice(price);
      setLastUpdated(new Date().toLocaleString());
    } catch (error) {
      console.error('Error fetching Bitcoin price:', error);
    }
  };

  const handleUsdInput = (e) => {
    const input = e.target.value;
    if (!isNaN(input) && input <= maxUsd) {
      setUsd(input);
      setBtc((input / btcPrice).toFixed(6));
    } else if (input === '') {
      setUsd('');
      setBtc('--');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-10 flex justify-center">
      <div className="max-w-[450px] w-full">
        {/* Stats Section */}
        <div className="bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer mb-10">
          <div className="h-20 bg-green-700 flex items-center justify-between p-5">
            <p className="text-white text-lg">Current BTC Price: ${btcPrice || '--'}</p>
          </div>
          <div className="p-6 text-sm text-gray-600">
            <label htmlFor="usd" className="block font-medium mb-2">USD Amount</label>
            <input
              type="text"
              id="usd"
              value={usd}
              onChange={handleUsdInput}
              placeholder="Enter USD"
              className="w-full p-2 border rounded-md"
            />
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white shadow-xl rounded-sm w-full">
          <div className="p-6">
            <p className="text-lg font-medium">Converted BTC: {btc}</p>
            <p className="text-sm text-gray-500">Last Updated: {lastUpdated}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widget;
