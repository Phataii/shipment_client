import React from "react";

function Parcels({ parcels }) {
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center">Parcel</h1>
      <div className="p-10">
        <div className="grid grid-cols-4">
          {parcels.map((item, i) => (
            <ul
              key={item._id}
              className="bg-gray-200 mx-5 p-5 shadow-xl rounded-sm font-bold"
            >
              <h2 className="text-center text-xl font-extrabold">
                Parcel Details
              </h2>
              <li className="mb-1">
                Email: <span className="">{item.email}</span>
              </li>
              <li className="mb-1">Name: {item.item}</li>
              <li className="mb-1">Sender: {item.sender}</li>
              <li className="mb-1">Reciever: {item.reciever}</li>
              <li className="mb-1">From: {item.from}</li>
              <li className="mb-1">To: {item.to}</li>
              <li className="mb-1">Current Location: {item.currentLocation}</li>
              <li className="mb-1">Date: {item.date}</li>
              <li className="mb-1">Time: {item.time}</li>
              <li className="mb-1">Status: {item.status}</li>
              <li className="mb-1">{item._id}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Parcels;
