import axios from "axios";
import React, { useState } from "react";
import Footer from "../layout/Footer";
export default function Search() {
  const [parcel, setParcels] = useState([]);
  const [_id, setTrackingId] = useState("");

  async function searchParcel(e) {
    e.preventDefault();
    try {
      const res = await axios.get(`http://localhost:8080/parcel/${_id}`);
      setParcels(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="bg-secondary-100">
      <form onSubmit={searchParcel} className="md:ml-96 ml-3">
        <input
          value={_id}
          onChange={(e) => setTrackingId(e.target.value)}
          type="text"
          className="md:w-2/5 h-10 shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
          placeholder="Search Parcel"
        />
        <input
          type="submit"
          value="Search"
          className="bg-blue-900 text-white rounded-sm w-20 h-10"
        />
      </form>

      <div>
        <div className="">
          <h1 className="text-3xl font-bold text-center">Parcels</h1>
          <div className="md:p-56 md:-mt-48">
            <div className="grid grid-cols-4">
              <ul className="bg-gray-200 mx-5 p-5 shadow-xl rounded-sm font-bold">
                <h2 className="text-center text-xl font-extrabold">
                  Parcel Details
                </h2>
                <li className="mb-1">
                  Email: <span className="">{parcel.email}</span>
                </li>
                <li className="mb-1">Name: {parcel.item}</li>
                <li className="mb-1">Sender: {parcel.sender}</li>
                <li className="mb-1">Reciever: {parcel.reciever}</li>
                <li className="mb-1">From: {parcel.from}</li>
                <li className="mb-1">To: {parcel.to}</li>
                <li className="mb-1">Location: {parcel.currentLocation}</li>
                <li className="mb-1">Date: {parcel.date}</li>
                <li className="mb-1">Time: {parcel.time}</li>
                <li className="mb-1">Status: {parcel.status}</li>
                <li className="mb-1">{parcel._id}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
