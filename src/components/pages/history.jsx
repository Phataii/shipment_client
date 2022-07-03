import React, { useEffect, useState } from "react";
import Parcels from "./Parcels";
import Messages from "./messages";
import { requestClient } from "../../utils/request-client";

function History() {
  const [parcels, setParcels] = useState([]);
  const [messages, setMessages] = useState([]);

  async function getParcels() {
    const ParcelRes = await requestClient.get("/parcel/user");
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
    </div>
  );
}

export default History;
