import React, { useContext, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { requestClient } from "../../utils/request-client";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import "antd/dist/antd.css";
import { message } from "antd";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  async function login(e) {
    e.preventDefault();

    try {
      const loginData = {
        email,
        password,
      };

      await requestClient.post("/auth/login", loginData);

      await getLoggedIn();

      history.push("/");
    } catch (err) {
      console.error(err);
      message.error("Please check your credentials.");
    }
  }

  return (
    <div>
      <Navbar />
      <div className="grid md:grid-cols-5 mb-14">
        <section className="col-span-3 bg-white md:mx-10 card2 my-24 md:ml-56">
          <div className="text-center md:p-5 md:mt-2">
            <h1 className="font-bold text-3xl">Welcome Back!</h1>
            <h2 className="text-gray-600 text-2xl">Login to continue</h2>
          </div>
          <form onSubmit={login} className="md:ml-11 md:ml-5 p-3">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="example@example.com"
              className="border-l-4 border-gray-700 w-full rounded-md shadow-md p-2 mt-1 mb-3"
            />
            <br />

            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="border-l-4 border-gray-700 w-full rounded-md shadow-md p-2 mt-1 mb-3"
            />
            <br />

            <input
              type="submit"
              value="Login"
              className="p-2 mt-7 ml-20 rounded-sm md:w-2/5 cursor-pointer text-white bg-blue-900 opacity-75"
            />
            <p className="p-2 md:ml-14 text-gray-700">
              Don't have an account?{" "}
              <Link to="/register" className="font-bold">
                Signup
              </Link>
            </p>
          </form>
        </section>
        <section className="md:col-span-2 mr-5">
          <img
            src={require("../../images/login.png").default}
            alt="BTC"
            className="hidden md:block w-96 mt-24"
          />
        </section>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Login;
