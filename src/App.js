import "./style/style.css";
import "./style/mediya.css";
import { useState } from "react";
import Navbar from "./Navbar";
import logo from "./img/Logo.svg";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import React, { Component } from "react";

function App() {
  const [search, setsearch] = useState("");

  return (
    <div className="..">
      <Navbar search={search} setsearch={setsearch} />
      <div className="footer">
        <img className="logo" src={logo} alt="logo" />
        <div className="f1">
          <a className="ahref" href="#">
            Abaut Ua
          </a>
          <br />
          <br />
          <a className="ahref" href="#">
            Contact
          </a>
          <br />
          <br />
          <a className="ahref" href="#">
            Terms & Condition
          </a>
          <br />
          <br />
        </div>
        <div className="f1">
          <div className="flexx">
            <FaFacebookF className="icon" />
            <a className="ahref" href="#">
              Facebook
            </a>
          </div>
          <br />
          <div className="flexx">
            <AiOutlineTwitter className="icon" />
            <a className="ahref" href="#">
              Twitter
            </a>
          </div>
          <br />
          <div className="flexx">
            <AiOutlineInstagram className="icon" />
            <a className="ahref" href="#">
              Instagram
            </a>
          </div>
        </div>
        <div className="f1">
          <a className="ahref" href="#">
            {" "}
            Subscripe to our newsletter
          </a>
          <br />
          <br />
          <br />
          <div className="inpbox">
            <input type="email" name="" id="" placeholder="Email Adres" />
            <button className="ok">ok</button>
          </div>
        </div>
        <div className="f1">
          <a className="ahref" href="#">
            497 Evergren Rd. Rosevile,CA 95675 <br />
            <br />
            +44 345 678 903 <br />
            <br />
            adobexd@mail.com
          </a>
        </div>
      </div>
    </div>
  );
}
export default App;
