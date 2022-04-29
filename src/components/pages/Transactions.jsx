import React, { useEffect, useState } from "react";
import TransactionsList from "./adminTransactionList";
// import TransactionsList from "./TransactionsList";
import Messages from "./messages";
import Footer from "../layout/Footer";
import { requestClient } from "../../utils/request-client";

function Transaction() {
  const [transactions, setTransactions] = useState([]);
  const [messages, setMessages] = useState([]);

  async function getTransactions() {
    const TransactionRes = await requestClient.get("/transaction/");
    setTransactions(TransactionRes.data);
  }

  useEffect(() => {
    getTransactions();
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
      {/* <TransactionForm getTransactions={getTransactions} /> */}
      <TransactionsList transactions={transactions} />
      <Messages messages={messages}/>
      <Footer />
    </div>
  );
}

export default Transaction;
