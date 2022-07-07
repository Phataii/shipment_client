import { requestClient } from "../../utils/request-client";
import React, { useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import "antd/dist/antd.css";
import { message } from "antd";

function ParcelForm({ getParcels }) {
  //const [nav, setNav] = useState(true);

  const { loggedIn } = useContext(AuthContext);
  const [item, setItem] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [sender, setSender] = useState("");
  const [status] = useState("Pending");
  const [reciever, setReciever] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  async function saveParcel(e) {
    e.preventDefault();

    try {
      const parcelData = {
        item,
        from,
        to,
        currentLocation,
        sender,
        status,
        reciever,
        time,
        date,
      };
      await requestClient.post("parcel/", parcelData, {
        withCredentials: true,
      });
      message.success("Request has been sent!");
      // getParcels();
    } catch (err) {
      console.error(err);
      message.error("Error Sending Request. Try again!");
    }
  }

  return (
    <div class="bg-secondary-100 text-gray-800 h-fit">
      {/* Content */}
      <main class="px-16 py-6 md:col-span-4">
        <header>
          <h1 className="text-xl">Hi, {loggedIn.email}</h1>
          <h4 class="font-bold pb-2">CREATE SHIPMENT</h4>
        </header>

        <div className="">
          <h2 className="font-bold text-5xl uppercase pb-2 border-b border-gray-200 text-center">
            Enter details below
          </h2>
          <h2 className="text-red-500 font-bold ml-10 py-3">
            Details of this form will be displayed to anyone with the item
            tracking ID
          </h2>
          <form onSubmit={saveParcel} className="">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
              <div className="flex-auto p-5 lg:p-10">
                <h4 className="text-2xl font-semibold">
                  Are you about to send a parcel?
                </h4>
                <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                  Kindly enter the details of the shipment below.
                </p>
                <div className="relative w-full mb-3 mt-8">
                  <input
                    value={item}
                    onChange={(e) => setItem(e.target.value)}
                    type="text"
                    className="border-0 px-3 py-3 mb-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="Enter Item Name"
                    style={{ transition: "all .15s ease" }}
                  />
                  <input
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    type="text"
                    className="border-0 px-3 py-3 mb-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="From"
                    style={{ transition: "all .15s ease" }}
                  />
                  <input
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    type="text"
                    className="border-0 px-3 py-3 mb-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="To"
                    style={{ transition: "all .15s ease" }}
                  />
                   <input
                    value={currentLocation}
                    onChange={(e) => setCurrentLocation(e.target.value)}
                    type="text"
                    className="border-0 px-3 py-3 mb-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="Enter Current Location"
                    style={{ transition: "all .15s ease" }}
                  />
                  <input
                    value={sender}
                    onChange={(e) => setSender(e.target.value)}
                    type="text"
                    className="border-0 px-3 py-3 mb-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="Sender's Name"
                    style={{ transition: "all .15s ease" }}
                  />
                  <input
                    value={reciever}
                    onChange={(e) => setReciever(e.target.value)}
                    type="text"
                    className="border-0 px-3 py-3 mb-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="Reciever's Name"
                    style={{ transition: "all .15s ease" }}
                  />
                  <input
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    type="text"
                    className="border-0 px-3 py-3 mb-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="Enter Time"
                    style={{ transition: "all .15s ease" }}
                  />
                  <input
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    type="date"
                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="Enter Item Name"
                    style={{ transition: "all .15s ease" }}
                  />
                </div>

                <div className="text-center mt-6">
                  <button
                    className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="submit"
                    style={{ transition: "all .15s ease" }}
                  >
                    Save Shipment Details
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

export default ParcelForm;
