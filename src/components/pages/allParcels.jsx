import React from "react";
import { Link } from "react-router-dom";

function Parcels({ parcels }) {
  return (
    <div className="">
        
      <h1 className="text-3xl font-bold text-center">
       Parcels
      </h1>
     
      <div className="p-56 -mt-48">
        <table className="w-full table-auto mb-20 p-10 border-collapse border border-slate-400">
          <thead>
            <tr>
              <th className="border border-slate-300 text-center">Email</th>
              <th className="border border-slate-300 text-center">Item Name</th>
              <th className="border border-slate-300 text-center">Sender</th>
              <th className="border border-slate-300 text-center">Reciever</th>
              <th className="border border-slate-300 text-center">From</th>
              <th className="border border-slate-300 text-center">To</th>
              <th className="border border-slate-300 text-center">Location</th>
              <th className="border border-slate-300 text-center">Date</th>
              <th className="border border-slate-300 text-center">Time</th>
              <th className="border border-slate-300 text-center">Status</th>
              <th className="border border-slate-300 text-center">ID</th>
            </tr>
          </thead>

          <tbody>
            {parcels.map((item, i) => (
              <tr key={item._id} className="text-center">
                <td>{item.email}</td>
                <td>{item.item}</td>
                <td>{item.sender}</td>
                <td>{item.reciever}</td>
                <td>{item.from}</td>
                <td>{item.to}</td>
                <td>{item.currentLocation}</td>
                <td>{item.date}</td>
                <td>{item.time}</td>
                <td>{item.status}</td>
                <td style={{ color: "blue" }}>
                  <Link key={item._id} to={`/parcel/${item._id}/edit`}>
                    {item._id}  
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
     
    </div>
  );
}

export default Parcels;
