import React from "react";
import axios from "axios";
import { useState } from "react";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import "tw-elements";
import { FaGooglePlay } from "react-icons/fa";
import { GrAppleAppStore } from "react-icons/gr";
import { GrSecure } from "react-icons/gr";

export default function Index() {
  const [price, setPrice] = useState("");
  const getApi = () => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether&vs_currencies=USD&include_market_cap=false&include_24hr_vol=false&include_24hr_change=false&include_last_updated_at=false",
        {
          withCredentials: false,
        }
      )
      .then((res) => {
        setPrice(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div onLoad={getApi}>
      <Navbar />
      <section className="h-screen bg-blue-600 md:grid md:grid-cols-3">
        <div className="md:ml-16 p-2 col-span-1">
          <div className="mt-10 md:mt-44">
            <p className="font-bold text-3xl text-gray-300">
              Trade, Swap and Invest
              <br />
              Cryptocurrency with ease
            </p>

            <p className="text-gray-200 text-xl py-3">
              Smooth Payout | Safe Trade | Affordable Rate
            </p>
          </div>
          <div className="grid grid-cols-3 p-2 w-full bg-gray-300 rounded">
            <span className="text-xs font-bold col-span-1 flex text-center">
              <img
                src={require("../../images/usdt.png").default}
                alt="USDT"
                className="h-10 w-10 mr-1"
              />
              <span>
                <p className="text-gray-500 text-xs">USDT/USD</p>
                {price && <p>$ {price.tether.usd}</p>}
              </span>
            </span>
            <span className="text-xs font-bold col-span-1 flex text-center">
              <img
                src={require("../../images/eth.png").default}
                alt="ETH"
                className="h-10 w-10"
              />
              <span>
                <p className="text-gray-500 text-xs">ETH/USD</p>
                {price && <p>$ {price.ethereum.usd}</p>}
              </span>
            </span>
            <span className="text-xs font-bold col-span-1 flex text-center">
              <img
                src={require("../../images/btc.png").default}
                alt="BTC"
                className="h-10 w-10"
              />
              <span>
                <p className="text-gray-500 text-xs">BTC/USD</p>
                {price && <p>$ {price.bitcoin.usd}</p>}
              </span>
            </span>
          </div>
        </div>
        <div className="md:mt-32 md:mx-10 mx-2 col-span-2">
          <div id="controls-carousel" class="relative" data-carousel="static">
            <div class="overflow-hidden relative h-48 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
              <div
                class="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10"
                data-carousel-item=""
              >
                <img
                  src={require("../../images/bg1.png").default}
                  class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                  alt="..."
                />
              </div>

              <div
                class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20"
                data-carousel-item="active"
              >
                <img
                  src={require("../../images/bg2.jpg").default}
                  class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                  alt="Background"
                />
              </div>
            </div>
            <div class="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
              <button
                type="button"
                class="w-3 h-3 rounded-full"
                aria-current="true"
                aria-label="Slide 1"
                data-carousel-slide-to="0"
              ></button>
              <button
                type="button"
                class="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 2"
                data-carousel-slide-to="1"
              ></button>
            </div>
          </div>

          <button className="border-2 text-2xl text-white md:w-96 p-3 mt-5 md:ml-40 hover:bg-white hover:text-blue-500  duration-700">
            Get started!
          </button>
        </div>
      </section>
      {/* What We Do */}
      <section
        className="bg-gray-100 md:w-3/5 text-center md:h-3/5 -mt-20 md:ml-80 shadow-2xl rounded-xl p-10"
        id="service"
      >
        <h3 className="font-bold text-gray-500 text-3xl justify-center mt-10 relative mb-10">
          WHAT WE DO
        </h3>
        <div className="-mt-5 mb-5">
          <div className="grid grid-cols-2">
            <span className="">
              <svg
                class="w-24 h-24 md:ml-32  text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              {/* <GrSecure className="text-blue-600 text-5xl" /> */}
              <p className="font-bold text-xl">
                Easy & Secured
                <br /> transactions
              </p>
            </span>
            <span>
              <svg
                class="w-24 h-24 md:ml-32 text-blue-400"
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
              <p className="font-bold text-xl">
                Fast Payouts on
                <br /> all transactions
              </p>
            </span>
          </div>
          <div className="grid grid-cols-2">
            <span className="">
              <svg
                class="w-24 h-24 md:ml-32 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>

              <p className="font-bold text-xl">
                Up-to-date &<br />
                affordable rate
              </p>
            </span>
            <span>
              <svg
                class="w-24 h-24 md:ml-32 text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z"></path>
              </svg>
              <p className="font-bold text-xl">
                We Provide Multiple
                <br />
                Crypto-Wallet
              </p>
            </span>
          </div>
        </div>
      </section>
      <section className="mt-28">
        <div className="w-full md:mt-28 ">
          <h3 className="font-bold text-center text-gray-500 text-2xl relative mb-10">
            HOW IT WORKS
          </h3>
          <h4 className="text-gray-500 text-2xl text-center">
            Trading, swapping and investing cryptocurrency can be simple,
            <br /> easy and secure with Prime Investors.
          </h4>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="h-fit md:w-80 md:ml-64 shadow-2xl p-8 font-bold text-xl">
              <p>Login or sign up to your trading dashboard</p>
              <svg
                class="w-6 h-6 hidden md:block"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
                <path
                  fill-rule="evenodd"
                  d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="h-fit md:w-80 md:ml-28 shadow-2xl p-8 font-bold text-xl">
              <p>Select digital currency to Trade, Swap Or Invest</p>
              <svg
                class="w-6 h-6 hidden md:block"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>

          <div className="grid md:grid-cols-2 mt-10">
            <div className="h-fit md:w-80 md:ml-56 shadow-2xl p-8 font-bold text-xl">
              <p>Complete trading procedures</p>
              <svg
                class="w-6 h-6 hidden md:block"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>

            <div className="h-fit md:w-80 md:ml-24 shadow-2xl p-8 font-bold text-xl">
              <p>Recieve payment or crypto-currency</p>
              <svg
                class="w-6 h-6 hidden md:block"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>

          <div className="md:flex justify-around bg-white w-fit p-10 md:p-24 mb-5 mt-28">
            <div className="h-fit md:text-justify w-full md:ml-5 text-gray-500 font-bold">
              <h2 className="text-3xl mb-2">Why Trust Us ?</h2>
              <h3 className="text-2xl">
                PrimeInvestors is a user friendly crypto platform, aimed at
                delivering the best crypto services. With active customers in
                over 15 countries in the world, including but not limited to
                United States, Canada, United Kingdom, Cyprus, Turkey, Russia,
                West Africa.
              </h3>

              {/* <p>
                <a href="index">Lean more...</a>
              </p> */}
            </div>
            <div className="">
              {/* <img src={require('../images/bg3.png')} alt='BTC' className='w-full'/> */}
            </div>
          </div>
          <section>
            <div className="grid md:grid-cols-2 md:h-64 w-full bg-blue-600">
              <div>
                <img
                  src={require("../../images/mobile.png").default}
                  alt="BTC"
                  className="md:-mt-16 w-96 md:ml-14"
                />
              </div>

              <div className="text-white text-2xl mt-7 md:mr-28 p-3">
                <h2>Coming Soon - PrimeInvestors App</h2>
                <h3 className="text-xl">
                  Our Mobile App would be available on Apple and Google play
                  store(s) soon
                </h3>
                <div className="grid grid-cols-2 mt-10">
                  <div className="flex justify-left">
                    <FaGooglePlay className="mt-1" />
                    <p className="text-white ml-4">Google play</p>
                  </div>
                  <div className="flex justify-left">
                    <GrAppleAppStore className="mt-1" />
                    <p className="text-white ml-3">Apple Store</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="md:mt-24 h-fit w-full">
              <h2 className="mb-10 mt-14 text-3xl font-bold text-gray-600 text-center">
                Frequently Asked Questions
              </h2>
              <div className="grid md:grid-cols-3 p-3 mb-10">
                <div className="w-fit mb-5 p-4 rounded-md shadow-2xl bg-indigo-300 md:mx-10">
                  <span>
                    <h2 className="font-bold text-2xl">
                      What is PrimeInvestors?
                    </h2>

                    <p>
                      PrimeInvestors is a digital cryptocurrency platform where
                      you can buy, sell or swap your crypto currencies at juicy
                      rates.
                    </p>
                  </span>
                </div>
                <div className="h-fit mb-5 w-fit text-justify rounded-md p-4  shadow-2xl bg-indigo-400 md:mx-10">
                  <span>
                    <h2 className="font-bold text-2xl">What is Ethereum?</h2>

                    <p>
                      Ethereum is a decentralized open source blockchain
                      featuring smart contract functionality. It is the
                      second-largest cryptocurrency by market capitalization,
                      behind Bitcoin.
                    </p>
                  </span>
                </div>
                <div className="h-fit mb-5 w-fit text-justify p-4 rounded-md shadow-2xl bg-indigo-500 md:mx-10">
                  <span>
                    <h2 className="font-bold text-2xl">What is Bitcoin?</h2>

                    <p>
                      Bitcoin is a cryptocurrency invented in 2008 by an unknown
                      person or group of people using the name Satoshi Nakamoto
                      and started in 2009 when its implementation was released
                      as open-source software.
                    </p>
                  </span>
                </div>
              </div>

              {/* <span className="font-bold p-3 md:ml-96 hover:bg-indigo-400 hover:text-white shadow-lg duration-700 animate-bounce">
                <a href=""> More FAQs</a>
              </span> */}
            </div>
          </section>
        </div>
      </section>
      <Footer />
    </div>
  );
}
