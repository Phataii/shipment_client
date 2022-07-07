import React, { useState } from "react";
import { requestClient } from "../../utils/request-client";

import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

import { GiTruck } from "react-icons/gi";
import { GiCommercialAirplane } from "react-icons/gi";
import { GiCargoShip } from "react-icons/gi";
import { GiCargoCrate } from "react-icons/gi";

import { MdDeliveryDining } from "react-icons/md";

import { RiTeamFill } from "react-icons/ri";
import "antd/dist/antd.css";
import { message } from "antd";
export default function Landing() {
  const [name, setName] = useState("");
  const [email] = useState("");
  const [messages, setMessage] = useState("");
  async function saveParcel(e) {
    e.preventDefault();

    try {
      const messageData = {
        name,
        email,
        messages,
      };
      await requestClient.post("message/", messageData, {
        withCredentials: true,
      });
      message.success("Request has been sent!");
    } catch (err) {
      console.error(err);
      message.success("Error Sending Message. Try again!");
      
    }
  }
  return (
    <>
      <Navbar transparent />
      <main>
        <div
          className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{
            minHeight: "75vh",
          }}
        >
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://cdn.pixabay.com/photo/2022/06/24/05/16/transportation-7281034_960_720.jpg')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Swift Delivery of Goods and Services at it's Peak
                  </h1>
                  <p className="mt-4 text-lg text-gray-300">
                    FAST | RELIABLE | SAFE
                  </p>

                  <a href="/search">
                    <button className="text-gray-200 font-bold bg-blue-900 text-3xl border-2 p-2 mt-3 hover:bg-transparent hover:text-white duration-700">
                      TRACK SHIPMENT
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-gray-300 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap"></div>

            <div className="flex flex-wrap items-center mt-32" id="about">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                  <RiTeamFill />
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  ABOUT US
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  Everglory Logistics is a tested and trusted logistics company
                  that is dedicated to serving her clients all over the globe.
                  We are aimed at giving our clients the assurance that their
                  parcel gets to them safely and timely. We always keep our
                  clients posted as regards the state and location of their
                  item. <span className="italic">TRY US TODAY!</span>
                </p>

                <a href="/register" className="font-bold text-gray-800 mt-8">
                  Open an account now!
                </a>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blue-900">
                  <img
                    alt="..."
                    src="https://cdn.pixabay.com/photo/2020/04/02/18/29/truck-4996243_960_720.jpg"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block"
                      style={{
                        height: "95px",
                        top: "-94px",
                      }}
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-blue-900 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Top Notch Services
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      Our users are top priority and as such we have a
                      customers' service team that is always readily available
                      to attend to your questions/complaints.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="service">
          <h1 className="text-3xl mt-14 underline font-semibold leading-normal text-center">
            Our Gallery
          </h1>
          <p className="text-center text-2xl mb-3">
            This is a feel of our transportation media and
            <br /> safe keeping of good and parcel
          </p>
          <div className="grid grid-cols-3">
            <div>
              <div className="bg-black">
                <img
                  // src={require("").default}
                  src="https://cdn.pixabay.com/photo/2015/03/24/09/02/airport-687256_960_720.jpg"
                  alt="img"
                  className="hover:opacity-50"
                />
              </div>
              <div className="bg-black">
                <img
                  src="https://cdn.pixabay.com/photo/2017/09/16/11/11/truck-2755172_960_720.jpg"
                  alt="img"
                  className="hover:opacity-50"
                />
              </div>
            </div>
            <div>
              <div className="bg-black">
                <img
                  src="https://cdn.pixabay.com/photo/2014/08/02/11/40/high-bay-408222_960_720.jpg"
                  alt="img"
                  className="hover:opacity-50"
                />
              </div>
              <div className="bg-black">
                <img
                  src="https://cdn.pixabay.com/photo/2016/08/30/13/23/efaflex-1630742_960_720.jpg"
                  alt="img"
                  className="hover:opacity-50"
                />
              </div>
            </div>
            <div>
              <div className="bg-black">
                <img
                  src="https://cdn.pixabay.com/photo/2012/02/28/00/39/freight-17666_960_720.jpg"
                  alt="img"
                  className="hover:opacity-50"
                />
              </div>
              <div className="bg-black">
                <img
                  src="https://cdn.pixabay.com/photo/2014/09/17/18/32/cargo-449784_960_720.jpg"
                  alt="img"
                  className="hover:opacity-50"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="relative py-20">
          <div className="container mx-auto px-4">
            <div className="items-center md:flex justify-around">
              <div className="mx-10 text-center">
                <GiTruck className="bg-blue-900 p-2 rounded-full text-white text-7xl mx-auto" />
                <h2 className="font-bold text-xl">Roadway Transport</h2>
                <p>Roadway is one of our major ways of transporting.</p>
              </div>
              <div className="mx-10 text-center">
                <GiCargoCrate className="bg-blue-900 p-2 rounded-full text-white text-7xl mx-auto" />
                <h2 className="font-bold text-xl">Safe Warehousing</h2>
                <p>
                  With our well equiped and secured warehouses, you parcels are
                  always safe.
                </p>
              </div>

              <div className="mx-10 text-center">
                <MdDeliveryDining className="bg-blue-900 p-2 rounded-full text-white text-7xl mx-auto" />
                <h2 className="font-bold text-xl">Delivery Unlimited</h2>
                <p>Your doorstep home delivery is guaranteed with us.</p>
              </div>
              <div className="mx-10 text-center">
                <GiCargoShip className="bg-blue-900 p-2 rounded-full text-white text-7xl mx-auto" />
                <h2 className="font-bold text-xl">Waterway Transport</h2>
                <p>
                  Regardless of the location, water/sea cannot be a barrier.
                </p>
              </div>
              <div className="mx-10 text-center">
                <GiCommercialAirplane className="bg-blue-900 p-2 rounded-full text-white text-7xl mx-auto" />
                <h2 className="font-bold text-xl">Airway Transport</h2>
                <p>
                  As timeliness is part of our legacy, air transport medium is
                  not left out
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonies */}
        <section className="relative py-20 bg-gray-100">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
          <div className="container mx-auto">
            <h1 className="text-center text-4xl -mt-10 mb-5">
              The Management Team
            </h1>
            <div className="items-center grid md:grid-cols-3">
              <div className="text-center">
                <span className="">
                  <img
                    src={require("../../images/m1.png").default}
                    alt="Team"
                    className="rounded-md ml-20"
                    width="60%"
                  />
                  <h2 className="text-2xl font-bold">Nathan Hoffman</h2>

                  <h4 className="text-xl">Chief Technology Officer.</h4>
                </span>
              </div>
              <div className="text-center">
                <span className="">
                  <img
                    src={require("../../images/m2.jpg").default}
                    alt="Team"
                    className="rounded-md ml-20"
                    width="60%"
                  />
                  <h2 className="text-2xl font-bold">John Hayden</h2>
                  <h4 className="text-xl">Managing Director</h4>
                </span>

                <hr />
              </div>
              <div className="text-center">
                <span className="">
                  <img
                    src={require("../../images/m1.png").default}
                    alt="Team"
                    className="rounded-md ml-20"
                    width="60%"
                  />
                  <h2 className="text-2xl font-bold">Olivia Nick </h2>
                  <h4 className="text-xl">Chief Of Operations.</h4>
                </span>
              </div>
            </div>
          </div>
        </section>
        {/* Mobile */}
        <section className="pb-20 relative block bg-gray-900" id="contact">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-900 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Coming Soon - Everglory App
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                  Our Mobile App would be available on Apple and Google play
                  store(s) soon with more flexible features to ease your
                  expirience.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-fit px-4 text-center">
                <div className="text-gray-900 p-3 w-full h-12 inline-flex items-center justify-center">
                  <form onSubmit={saveParcel}>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="p-2 w-full mb-2"
                      placeholder="Name"
                    />
                    {/* <input
                      value={email}
                      onChange={(e) => setName(e.target.value)}
                      className="p-2 w-full mb-2"
                      placeholder="Email"
                    /> */}
                    <textarea
                      value={messages}
                      onChange={(e) => setMessage(e.target.value)}
                      className="p-2 w-full"
                      placeholder="Message"
                    />
                    <input
                      type="submit"
                      className="p-2 text-center text-white bg-blue-900 cursor-pointer"
                      value="Submit"
                    />
                  </form>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg">
                  <div className="flex-auto p-5 lg:p-10">
                    <img
                      src={require("../../images/feedback.png").default}
                      alt="BTC"
                      className="mt-24 md:mt-2 w-96 md:ml-14"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
