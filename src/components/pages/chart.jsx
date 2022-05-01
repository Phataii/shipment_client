import React, { useState, useEffect } from "react";
import axios from "axios";
import Coin from "./coin";
import Navbar from "../layout/Navbar";

export default function Chart() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=7d"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div class="bg-secondary-100 text-gray-800 h-fit md:h-full">
      {/* Content */}
      <div className="">
        <Navbar />
        {/* End Nav */}
        <main class="px-16 py-6">
          <div className="card2 h-fit p-2 shadow-2xl">
            {/* <h2 className="mt-3 mr-10 p-2">Hi, {loggedIn.email}</h2> */}
            <h4 class="font-bold text-3xl mt-2 text-left">CURRENCY CHART</h4>
          </div>
          <header></header>

          <div>
            {/* <h4 class="font-bold text-2xl mt-10 pb-2 border-b border-gray-200">
              CRYPTO-CURRENCY <span className="text-blue-500">CHART</span>
            </h4> */}
            <div className="coin-app">
              <div className="coin-search w-full ml-auto">
                {/* <h1 className='coin-text'>Search a currency</h1> */}
                <form className="ml-96 mt-10">
                  <input
                    className="border-l-4 border-blue-600 rounded-md shadow-md p-2 mt-1 mb-3 text-gray-900"
                    type="text"
                    onChange={handleChange}
                    placeholder="Search"
                  />
                </form>
              </div>
              {filteredCoins.map((coin) => {
                return (
                  <Coin
                    key={coin.id}
                    name={coin.name}
                    price={coin.current_price}
                    symbol={coin.symbol}
                    marketcap={coin.total_volume}
                    volume={coin.market_cap}
                    image={coin.image}
                    priceChange={coin.price_change_percentage_24h}
                  />
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
