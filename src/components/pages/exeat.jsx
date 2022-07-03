import { requestClient } from "../../utils/request-client";
import React, { useState, useContext } from "react";
import LogOutBtn from "../auth/LogOutBtn";
import AuthContext from "../../context/AuthContext";
import "antd/dist/antd.css";
import { message } from "antd";

function Exeat({ getParcels }) {
  const [nav, setNav] = useState(true);

  const { loggedIn } = useContext(AuthContext);
  const [reason, setReason] = useState("");
  const [destination, setDestination] = useState("");
  const [dateOfDeparture, setDateOfDeparture] = useState("");
  const [dateOfArrival, setDateOfArrival] = useState("");
  const [status] = useState("Pending");
  // const [reciever, setReciever] = useState("");
  // const [time, setTime] = useState("");
  // const [date, setDate] = useState("");

  async function saveParcel(e) {
    e.preventDefault();

    try {
      const exeatData = {
        reason,
        destination,
        dateOfDeparture,
        dateOfArrival,
        
      };
      await requestClient.post("parcel/", exeatData, {
        withCredentials: true,
      });
      message.success("Exeat has been submitted Successfully!");
      
    } catch (err) {
      console.error(err);
      message.error("Error Sending Exeat Request. Try again!");
    }
  }

  return (
    <div class="bg-secondary-100 text-gray-800 h-fit">
      {/* Content */}
      <main class="px-16 py-6 md:col-span-4">
        <header>
          <h1 className="text-xl">Hi, {loggedIn.email}</h1>
          {/* <h4 class="font-bold pb-2">CREATE SHIPMENT</h4> */}
        </header>

        <div className="">
          <h2 className="font-bold text-5xl uppercase pb-2 border-b border-gray-200 text-center">
            EXEAT APPLICATION
          </h2>
          
          <form onSubmit={saveParcel} className="">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
              <div className="flex-auto p-5 lg:p-10">
                <h4 className="text-2xl font-semibold">
                  Are you about to make a request for exeat?
                </h4>
                <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                  Kindly enter the details of the shipment below.
                </p>
                <div className="relative w-full mb-3 mt-8">
                <label>Reason:</label>
                  <input
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    type="text"
                    className="border-0 px-3 py-3 mb-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="Reason for exeat"
                    style={{ transition: "all .15s ease" }}
                  />
                  <label>Destination:</label>
                  <input
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    type="text"
                    className="border-0 px-3 py-3 mb-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="Destination"
                    style={{ transition: "all .15s ease" }}
                  />
                  <label>Date of Departure:</label>
                  <input
                    value={dateOfDeparture}
                    onChange={(e) => setDateOfDeparture(e.target.value)}
                    type="date"
                    className="border-0 px-3 py-3 mb-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="Date of Departure"
                    style={{ transition: "all .15s ease" }}
                  />
                  <label>Date of Arrival:</label>
                  <input
                    value={dateOfArrival}
                    onChange={(e) => setDateOfArrival(e.target.value)}
                    type="date"
                    className="border-0 px-3 py-3 mb-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="Date of arrival"
                    style={{ transition: "all .15s ease" }}
                  />
                </div>

                <div className="text-center mt-6">
                  <button
                    className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="submit"
                    style={{ transition: "all .15s ease" }}
                  >
                    Submit
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

export default Exeat;
