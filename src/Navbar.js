import "./style/style.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import React, { useContext, useState } from "react";
import Blog from "./Blog";
import Contact from "./Contact";
import Shop from "./Shop";
import { BiSearch } from "react-icons/bi";
import Pages from "./Pages";
import logo from "./img/Logo.svg";
import { BsFillPersonFill } from "react-icons/bs";
import { MdShoppingCart } from "react-icons/md";
import { AiTwotoneHeart } from "react-icons/ai";
import Like from "./Like";
import Savat from "./Savat";
import Person from "./Person";
import { DataContext } from "./context/Context";

function Navbar({ search, setsearch }) {
  const { local } = useContext(DataContext);
  const [bolean, setbolean] = useState(true);
  function func() {
    setbolean(!bolean);
  }
  return (
    <div className="..">
      <Router>
        <nav className={bolean ? "nav" : "style"}>
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/Clothes"}>Clothes</NavLink>
            </li>
            <li>
              <NavLink to={"/Shoes"}>Shoes</NavLink>
            </li>
            <li>
              <NavLink to={"/Accessories"}>Accessories</NavLink>
            </li>
          </ul>
          <div className="navbar">
            <Link  to={"/"}><img className="logo" src={logo} alt="logo" /></Link>
            <div className={bolean ? "flex" : "activee"}>
              <input
                type="search"
                id="inp1"
                placeholder="Search..."
                onChange={(e) => {
                  setsearch(e.target.value);
                  console.log(e.target.value);
                }}
              />
              <BiSearch />
            </div>
            <button
              style={{ color: bolean ? "silver" : "red", border: "none" }}
              onClick={func}
              className="btn"
            >
              {bolean ? "=" : "X"}
            </button>
          </div>
          <ul>
            <NavLink style={{ border: "none" }} to={"/person"}>
              <BsFillPersonFill style={{ cursor: "pointer" }} />
            </NavLink>
            <NavLink
              className="relative"
              style={{ border: "none" }}
              to={"/savat"}
            >
              <MdShoppingCart />
              <p className="absalute">
                {local.filter((val) => val.savat === true).length}
              </p>
            </NavLink>
            <NavLink
              className="relative"
              style={{ border: "none" }}
              to={"/like"}
            >
              <AiTwotoneHeart />
              <p className="absalute">
                {local.filter((val) => val.like === true).length}{" "}
              </p>
            </NavLink>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={<Blog setsearch={setsearch} search={search} />}
          />
          <Route
            path="/Clothes"
            element={<Pages setsearch1={setsearch} search1={search} />}
          />
          <Route
            path="/Shoes"
            element={<Shop setsearch2={setsearch} search2={search} />}
          />
          <Route
            path="/Accessories"
            element={<Contact search3={search} setsearch3={setsearch} />}
          />
          <Route path="/like" element={<Like />} />
          <Route path="/savat" element={<Savat />} />
          <Route path="/person" element={<Person />} />
        </Routes>
      </Router>
    </div>
  );
}
export default Navbar;
