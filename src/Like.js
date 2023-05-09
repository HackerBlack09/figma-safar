import React from "react";
import { useState } from "react";

function Like() {
  const [local, setlocal] = useState(
    JSON.parse(localStorage.getItem("local")) || []
  );
  return (
    <div className="like_page">
      <div style={{ margin: "0 auto" }} className="cardboxx">
        {local
          .filter((val) => val.like === true)
          .map((iteam, index) => (
            <div key={index} className="cards">
              <div data-aos="fade-up" className="sicl">
                <img className="cardimg" src={iteam.img} alt="" />
              </div>
              <div className="padding">
                <p className="p1">{iteam.text}</p>
                <br />
                <div className="flexx">
                  <p>{iteam.price} $</p>
                </div>
                <div className="psmal">
                  <p>{iteam.color}</p>
                  <p>{iteam.size}</p>
                  <p>{iteam.category}</p>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* {
        info1.slice(52,55).map((val,i)=>(
          <div key={i} className="cards">
             <h1>{val.nomi}</h1>
             <img className="cardimg" src={val.img} alt="" />
             <h1> size: {val.size}</h1>
             <h1>xaqida: {val.text}</h1>
             <h1>narxi: {val.price}$</h1>
          </div>
        )) 
      } */}
    </div>
  );
}
export default Like;
