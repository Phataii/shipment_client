import { requestClient } from "../../utils/request-client";
import React, { useState, useContext } from "react";
import LogOutBtn from "../auth/LogOutBtn";
import AuthContext from "../../context/AuthContext";

function TransactionsForm({ getTransactions }) {
  const [nav, setNav] = useState(true);
  const [banks] = useState([
    { id: 1, name: "Access Bank", code: "044" },
    { id: 2, name: "Citibank", code: "023" },
    { id: 3, name: "Diamond Bank", code: "063" },
    { id: 4, name: "Dynamic Standard Bank", code: "" },
    { id: 5, name: "Ecobank Nigeria", code: "050" },
    { id: 6, name: "Fidelity Bank Nigeria", code: "070" },
    { id: 7, name: "First Bank of Nigeria", code: "011" },
    { id: 8, name: "First City Monument Bank", code: "214" },
    { id: 9, name: "Guaranty Trust Bank", code: "058" },
    { id: 10, name: "Heritage Bank Plc", code: "030" },
    { id: 11, name: "Jaiz Bank", code: "301" },
    { id: 12, name: "Keystone Bank Limited", code: "082" },
    { id: 13, name: "Providus Bank Plc", code: "101" },
    { id: 14, name: "Polaris Bank", code: "076" },
    { id: 15, name: "Stanbic IBTC Bank Nigeria Limited", code: "221" },
    { id: 16, name: "Standard Chartered Bank", code: "068" },
    { id: 17, name: "Sterling Bank", code: "232" },
    { id: 18, name: "Suntrust Bank Nigeria Limited", code: "100" },
    { id: 19, name: "Union Bank of Nigeria", code: "032" },
    { id: 20, name: "United Bank for Africa", code: "033" },
    { id: 21, name: "Unity Bank Plc", code: "215" },
    { id: 22, name: "Wema Bank", code: "035" },
    { id: 23, name: "Zenith Bank", code: "057" },
  ]);

  const { loggedIn } = useContext(AuthContext);
  const [amount, setAmount] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [crypto, setCrypto] = useState("");
  const [bank, setBank] = useState("");
  const [status] = useState("Pending");
  const [type] = useState("Withdrawal");

  async function saveTransaction(e) {
    e.preventDefault();

    try {
      const transactionData = {
        amount,
        walletAddress,
        crypto,
        bank,
        status,
        type,
      };
      await requestClient.post("transaction/", transactionData, {
        withCredentials: true,
      });
      alert("Request has been sent!");
      // getTransactions();
    } catch (err) {
      console.error(err);
      alert("Error Sending Request. Try again!");
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
              <li class="text-xl">
                <a
                  href="deposit"
                  class="px-4 flex justify-end border-r-4 border-white"
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
              <li class="text-xl  text-gray-700 font-bold">
                <a
                  href="withdraw"
                  class="px-4 flex justify-end border-r-4 border-blue-500"
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
          <h4 class="font-bold pb-2">Withdraw</h4>
        </header>

        <div className="">
          <h2 className="font-bold text-5xl uppercase mt-7 pb-2 border-b border-gray-200 text-center">
            Enter details below
          </h2>
          <h2 className="text-red-500 font-bold ml-10 py-3">
            Skip bank field if currency type is not NGN (Naira)
          </h2>
          <form onSubmit={saveTransaction} className="">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
              <div className="flex-auto p-5 lg:p-10">
                <h4 className="text-2xl font-semibold">
                  Need to make a Withdrawal?
                </h4>
                <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                  Complete this form and we will get back to you in 24 hours.
                </p>
                <div className="relative w-full mb-3 mt-8">
                  <select
                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    value={crypto}
                    required
                    onChange={(e) => setCrypto(e.target.value)}
                    style={{ transition: "all .15s ease" }}
                  >
                    <option>Choose Currency</option>
                    <option>Bitcoin BTC</option>
                    <option>Etherium ETH</option>
                    <option>USDT</option>
                    <option>Naira NGN</option>
                  </select>
                </div>
                <div className="relative w-full mb-3">
                  <select
                    //name="banks"
                    value={bank}
                    onChange={(e) => setBank(e.target.value)}
                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    style={{ transition: "all .15s ease" }}
                  >
                    <option value="">Select NGN bank</option>
                    {banks.map((bank, key) => (
                      <option key={key} value={bank.name}>
                        {bank.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="relative w-full mb-3">
                  <input
                    value={walletAddress}
                    onChange={(e) => setWalletAddress(e.target.value)}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="wallet address"
                    style={{ transition: "all .15s ease" }}
                  />
                </div>

                <div className="relative w-full mb-3">
                  <input
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    type="number"
                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="amount"
                    style={{ transition: "all .15s ease" }}
                  />
                </div>
                <div className="text-center mt-6">
                  <button
                    className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="submit"
                    style={{ transition: "all .15s ease" }}
                  >
                    Send request
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default TransactionsForm;
