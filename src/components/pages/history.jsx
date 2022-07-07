import React, { useEffect, useState } from "react";
import Parcels from "./Parcels";
import { requestClient } from "../../utils/request-client";

function History() {
  const [parcels, setParcels] = useState([]);


  async function getParcels() {
    const ParcelRes = await requestClient.get("/parcel/user");
    setParcels(ParcelRes.data);
  }

  useEffect(() => {
    getParcels();
  }, []);
 

 
  return (
    <div>
      <Parcels parcels={parcels} />
    </div>
  );
}

export default History;
