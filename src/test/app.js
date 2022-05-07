import { useState, useContext } from "react";
import { ethers } from "ethers";
import AuthContext from "../context/AuthContext";
import ErrorMessage from "./ErrorMessage";
import TxList from "./TxList";
import LogOutBtn from "../components/auth/LogOutBtn";
import "antd/dist/antd.css";
import { message } from "antd";

const startPayment = async ({ setError, setTxs, ether, addr }) => {
  try {
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");

    await window.ethereum.send("eth_requestAccounts");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    ethers.utils.getAddress(addr);
    const tx = await signer.sendTransaction({
      to: addr,
      value: ethers.utils.parseEther(ether),
    });
    // console.log({ ether, addr });
    //console.log("tx", tx);
    setTxs([tx]);
  } catch (err) {
    setError(err.message);
    message.error("Somthing went wrong!");
  }
};

export default function App() {
  const { loggedIn } = useContext(AuthContext);
  const [error, setError] = useState();
  const [txs, setTxs] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setError();
    await startPayment({
      setError,
      setTxs,
      ether: data.get("ether"),
      addr: data.get("addr"),
    });
  };

  return (
    <div className="grid grid-cols-5 bg-secondary-100 h-screen">
      {/* Content */}
      <div class="md:col-span-1 md:flex md:justify-end bg-gray-500">
        <nav class="text-right">
          <div class="flex justify-between items-center">
            <h1 class="font-bold uppercase p-4 border-b border-gray-100 text-mammoth ">
              <a href="/" class="hover:text-gray-800 text-2xl">
                PrimeInvestors
              </a>
            </h1>
            <div class="px-4 cursor-pointer md:hidden" id="burger">
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
          <ul class="text-md mt-6 hidden md:block" id="menu">
            <li class="py-1">
              <a
                href="dashboard"
                class="px-4 flex justify-end  border-r-4 border-white"
              >
                <span>Account</span>
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
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </a>
            </li>
            <li class="py-1 mt-4">
              <a
                href="charts"
                class="px-4 flex justify-end border-r-4 border-white"
              >
                <span>Charts</span>
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
                    d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                  ></path>
                </svg>
              </a>
            </li>
            <li class="md:py-2 py-1 text-gray-700 font-bold ">
              <a
                href="deposit"
                class="px-4 flex justify-end border-r-4 border-blue-500"
              >
                <span>Deposit</span>
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
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  ></path>
                </svg>
              </a>
            </li>
            <li class="md:py-2 py-1">
              <a
                href="withdraw"
                class="px-4 flex justify-end border-r-4 border-white"
              >
                <span>Withdraw</span>
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
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </a>
            </li>
            <li class="md:py-2 py-1">
              <a
                href="history"
                class="px-4 flex justify-end border-r-4 border-white"
              >
                <span>History</span>
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
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
              </a>
            </li>
            <li class="md:py-2 py-1">
              <a
                href="help"
                class="px-4 flex justify-end border-r-4 border-white"
              >
                <span>Help</span>
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
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </a>
            </li>
            <li class="md:py-2 py-1">
              <a href="/" class="px-4 flex justify-end border-r-4 border-white">
                <LogOutBtn />
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
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* End Nav */}
      <main class="px-16 py-6 md:col-span-4">
        <header>
          <h2>Hi, {loggedIn.email}</h2>
          <h4 class="font-bold pb-2">DEPOSIT ETHEREUM (WEB3)</h4>
        </header>

        <div>
          <h4 class="font-bold mt-12 pb-2 border-b border-gray-200">
            Kindly paste destination wallet address and ether amount below
          </h4>
        </div>
        <form className="m-4" onSubmit={handleSubmit}>
          <div className="credit-card w-full lg:w-1/2 sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
            <main className="mt-4 p-4">
              <h1 className="text-xl font-semibold text-gray-700 text-center">
                Send ETH payment
              </h1>
              <div className="">
                <div className="my-3">
                  <input
                    type="text"
                    name="addr"
                    value="0x64700624e54d56d591616cc177b902f847dF695F"
                    //disabled
                    className="input input-bordered block w-full focus:ring focus:outline-none border border-gray-200 rounded-md"
                    placeholder=" Recipient Address"
                  />
                </div>
                <div className="my-3">
                  <input
                    name="ether"
                    type="text"
                    className="input input-bordered block w-full focus:ring focus:outline-none border border-gray-200 rounded-md"
                    placeholder=" Amount in ETH"
                  />
                </div>
              </div>
            </main>
            <footer className="p-4">
              <button
                type="submit"
                className="btn btn-primary submit-button focus:ring focus:outline-none w-full"
              >
                Pay now
              </button>
              <ErrorMessage message={error} />
              <TxList txs={txs} />
            </footer>
          </div>
        </form>
      </main>
    </div>
  );
}
