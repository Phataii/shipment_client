import { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { requestClient } from "../../utils/request-client";
import Navbar from "../layout/Navbar";

export const Update = () => {
  const match = useRouteMatch();
  const history = useHistory();
  const [parcel, setParcel] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const _id = match.params.id;

  useEffect(() => {
    async function fetchParcel() {
      setIsLoading(true);
      const res = await requestClient.get(`parcel/${_id}`);

      setParcel(res.data);
    }

    fetchParcel()
      .catch(() => {})
      .finally(() => setIsLoading(false));
  }, [_id]);

  async function onFormSubmit(e) {
    e.preventDefault();
    console.log(parcel);

    try {
      const res = await requestClient.put(
        `/parcel/${_id}`,
        parcel
      );
      console.log(res);
      history.push("/parcel");
    } catch (err) {
      console.log(err);
    }
  }

  const onInputChange = (e) => {
    const { name, value } = e.target;

    setParcel((old) => ({ ...old, [name]: value }));
  };

  return (
    <div className="bg-secondary-100 h-screen">
      <Navbar/>
      {isLoading ? (
        <p>Loading....</p>
      ) : parcel ? (
        <form onSubmit={onFormSubmit} className="mt-24 w-full md:ml-80 absolute">
          <h2 className="font-bold text-4xl mb-5">
            Edit <span className="text-blue-500">Parcel</span>
          </h2>
          <input
            className="md:w-2/5 w-full h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            type="text"
            name="email"
            placeholder="Email"
            onChange={onInputChange}
            value={parcel.email}
          /><br/>
          <input
            className="md:w-2/5 w-full h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            type="text"
            placeholder="Item Name"
            name="item"
            onChange={onInputChange}
            value={parcel.item}
          /><br/>
          <input
            className="md:w-2/5 w-full h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            type="text"
            placeholder="From"
            name="from"
            onChange={onInputChange}
            value={parcel.from}
          /><br/>
          <input
            className="md:w-2/5 w-full h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            type="text"
            name="to"
            placeholder="To"
            onChange={onInputChange}
            value={parcel.to}
          /><br/>
           <input
            className="md:w-2/5 w-full h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            type="text"
            placeholder="Location"
            name="currentLocation"
            onChange={onInputChange}
            value={parcel.currentLocation}
          /><br/>   
          <input
            className="md:w-2/5 w-full h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            type="text"
            placeholder="Sender"
            name="sender"
            onChange={onInputChange}
            value={parcel.sender}
            disabled
          /><br/>
          
          <select
            className="md:w-2/5 w-full h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            onChange={onInputChange}
            value={parcel.status}
            name="status"
          >
            <option>Moving</option>
            <option>Delivered</option>
            
          </select><br/>
          <input
            className="md:w-2/5 w-full h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            type="text"
            placeholder="Parcel ID"
            name="_id"
            onChange={onInputChange}
            value={parcel._id}
            disabled
          /><br/>

          <button
            type="submit"
            className="bg-blue-500 w-fit h-fit rounded-md shadow-xl p-3"
          >
            Edit Parcel
          </button>
        </form>
      ) : (
        <p>Parcel not found</p>
      )}
    </div>
  );
};
