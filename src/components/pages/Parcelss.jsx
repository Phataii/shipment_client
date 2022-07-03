import React, { useEffect, useState } from "react";
import Parcels from "./allParcels";
import Messages from "./messages";
import Footer from "../layout/Footer";
import { requestClient } from "../../utils/request-client";

function Parcel() {
  const [parcels, setParcels] = useState([]);
  const [messages, setMessages] = useState([]);

  async function getParcels() {
    const ParcelRes = await requestClient.get("/parcel/");
    setParcels(ParcelRes.data);
  }

  useEffect(() => {
    getParcels();
  }, []);

  async function getMessages() {
    const MessageRes = await requestClient.get("/message/");
    setMessages(MessageRes.data);
  }

  useEffect(() => {
    getMessages();
  }, []);
  return (
    <div>
     
      <Parcels parcels={parcels} />
      <Messages messages={messages}/>
      <Footer />
    </div>
  );
}

export default Parcel;
