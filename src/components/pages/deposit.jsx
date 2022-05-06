import React, { useState, useContext } from "react";
import { requestClient } from "../../utils/request-client";
import LogOutBtn from "../auth/LogOutBtn";
import AuthContext from "../../context/AuthContext";
import btc from "../../images/btc.png";
import eth from "../../images/eth.png";
import usdt from "../../images/usdt.png";
export default function Deposit({ getTransactions }) {
  const { loggedIn } = useContext(AuthContext);
  const [nav, setNav] = useState(true);
  const [cryptoCurrency] = useState([
    {
      name: "Bitcoin (BTC)",
      address: "0x5f5B64a6bD240ca41DB465FEf52b0faDa32c0180",
      pic: btc,
      alt: "BTC",
      key: 0,
    },
    {
      name: "Ethereum (ETH)",
      address: "0x5f5B64a6bD240ca41DB465FEf52b0faDa32c0180",
      metamask: "Use MetaMask",
      pic: eth,
      alt: "ETH",
      key: 1,
    },
    {
      name: "Tether (USDT)",
      address: "0x5f5B64a6bD240ca41DB465FEf52b0faDa32c0180",
      pic: usdt,
      alt: "USDT",
      key: 2,
    },
  ]);
  const [amount, setAmount] = useState("");
  const [crypto, setCrypto] = useState("");
  const [status] = useState("Pending");
  const [type] = useState("Deposit");

  async function saveTransaction(e) {
    e.preventDefault();

    try {
      const transactionData = {
        amount,
        crypto,
        status,
        type,
      };
      await requestClient.post("transaction/", transactionData);
      alert("Transaction has been initiated. Go ahead and copy address");
    } catch (err) {
      console.error(err);
      alert("Transaction Failed to initiate.");
    }
  }

  return (
    <div class="grid md:grid-cols-5 bg-secondary-100 text-gray-800 h-fit">
      {/* Content */}
      <div class="md:col-span-1 md:flex md:justify-end bg-gray-500">
        <nav class="text-right">
          <div class="flex justify-between items-center">
            <h1 class="font-bold uppercase p-4 border-b border-gray-100 text-3xl">
              <a href="/" class="hover:text-gray-800">
                PrimeInvestors
              </a>
            </h1>
            <div
              class="cursor-pointer mx-10 md:hidden"
              onClick={() => setNav(!nav)}
            >
              <svg
                class="w-6 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </div>
          </div>
          {nav && (
            <ul class="text-md mt-6 md:block">
              <li class="py-2 text-xl">
                <a href="dashboard" class="px-4 flex justify-end border-r-4">
                  <span>Account</span>
                  <svg
                    class="w-8 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </a>
              </li>
              <li class="text-xl mt-4">
                <a
                  href="chart"
                  class="px-4 flex justify-end border-r-4 border-white"
                >
                  <span>Charts</span>
                  <svg
                    class="w-8 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    ></path>
                  </svg>
                </a>
              </li>
              <li class="text-xl text-gray-700 font-bold">
                <a
                  href="deposit"
                  class="px-4 flex justify-end border-r-4  border-blue-500"
                >
                  <span className="mt-2">Deposit</span>
                  <svg
                    class="w-8 mt-2 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    ></path>
                  </svg>
                </a>
              </li>
              <li class="text-xl">
                <a
                  href="withdraw"
                  class="px-4 flex justify-end border-r-4 border-white"
                >
                  <span className="mt-2">Withdraw</span>
                  <svg
                    class="w-8 mt-2 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </a>
              </li>
              <li class="text-xl">
                <a
                  href="history"
                  class="px-4 flex justify-end border-r-4 border-white"
                >
                  <span className="mt-2">History</span>
                  <svg
                    class="w-8 mt-2 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    ></path>
                  </svg>
                </a>
              </li>
              <li class="text-xl">
                <a
                  href="help"
                  class="px-4 flex justify-end border-r-4 border-white"
                >
                  <span className="mt-2">Help</span>
                  <svg
                    class="w-8 mt-2 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </a>
              </li>
              <li class="">
                <a
                  href="/"
                  class="px-4 flex justify-end border-r-4 border-white"
                >
                  <LogOutBtn />
                  <svg
                    class="w-8 mt-2 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          )}
        </nav>
      </div>
      {/* End Nav */}
      <main class="px-16 py-6 md:col-span-4">
        <header>
          <h2>Hi, {loggedIn.email}</h2>
          <h4 class="font-bold pb-2">DEPOSIT</h4>
        </header>

        <div>
          <h4 class="font-bold mt-12 pb-2 border-b border-gray-200">
            Kindly choose and copy the wallet address of the cryptocurrency
          </h4>
          <form
            onSubmit={saveTransaction}
            className="md:ml-10 ml-5 w-full mt-5"
          >
            <h4 class="font-bold mt-12 pb-2 border-b border-gray-200">
              Step 1: Initiate your deposit transaction before continuing{" "}
            </h4>
            <select
              className="border-l-4 border-blue-600 w-4/5 rounded-md shadow-md p-2 mt-1 mb-3 text-gray-900"
              value={crypto}
              onChange={(e) => setCrypto(e.target.value)}
            >
              <option>Choose Coin</option>
              <option>Bitcoin BTC</option>
              <option>Etherium ETH</option>
              <option>USDT</option>
              <option>Naira NGN</option>
            </select>
            <br />
            <input
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              type="number"
              required
              placeholder="Amount"
              className="border-l-4 text-gray-900 border-blue-600 w-4/5 rounded-md shadow-md p-2 mt-1 mb-3"
            />
            <br />
            <input
              type="submit"
              value="Initiate Deposit"
              className="p-2 mt-7 md:ml-24 rounded-sm w-fit cursor-pointer text-white bg-blue-600 opacity-75"
            />
          </form>
          <h4 class="font-bold mt-12 pb-2 border-b border-gray-200">
            Step 2: Copy Address you wish to send to, Send using the MetaMask
            Extension <span className="text-red-500">(for Eth Only).</span>{" "}
          </h4>
          <div class="mt-8 grid md:grid-cols-3 text-gray-200">
            {cryptoCurrency.map((item) => (
              <div class="text-center text-gray-900 card2 p-4">
                <img src={item.pic} alt={item.alt} className="ml-12 h-56" />
                <span class="font-bold">{item.name}</span>
                <br />
                <button
                  className="btn"
                  onClick={() => navigator.clipboard.writeText([item.address])}
                >
                  Click me to copy address
                </button>
                <br />
                <a href="etherpay" className="btn">
                  {item.metamask}
                </a>
              </div>
            ))}
          </div>
          <div class="flex justify-center">
            <div class="bg-secondary-100 text-secondary-200 btn hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300">
              Load more...
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
