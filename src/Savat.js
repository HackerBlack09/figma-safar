import React, { useContext, useState } from "react";
import { DataContext } from "./context/Context";
import img from "./img//1.svg";

function Savat() {
  const { local, plusfun, minusfun, refresh } =
    useContext(DataContext);
  const [bolean1, setbolean1] = useState(true);

  function func() {
    local.filter((val) => (val.savat === true ? setbolean1(false) : val));
  }
  function func1() {
    setbolean1(!bolean1);
  }

  function savatfun(iteam) {
    localStorage.setItem(
      "local",
      JSON.stringify(
        local.map((val) =>
          val.id === iteam.id ? { ...val, savat: !val.savat } : val
        )
      )
    );
    refresh();
  }
  return (
    <>
      {bolean1 ? (
        <div className="Savat">
          <div className="form_savat">
            <h3>Shipping Address</h3>
            <br />
            <p>Email</p>
            <input type="email" className="savat_input" />
            <br />
            <br />
            <p>Full name</p>
            <input type="email" className="savat_input" />
            <br />
            <br />
            <p>Address</p>
            <textarea
              className="savat_inputt"
              name=""
              id=""
              cols="25"
              rows="6"
            ></textarea>
            <br />
            <br />
            <p>State/Province</p>
            <select className="savat_input1" name="" id="">
              <option value=""></option>
              <option value="">farg'ona</option>
            </select>
            <br />
            <br />
            <p>City</p>
            <select className="savat_input1" name="" id="">
              <option value=""></option>
              <option value="">farg'ona</option>
            </select>
            <br />
            <br />
            <p>Phone number</p>
            <input type="number" className="savat_input" />
            <br />
            <br />
            <div className="flexx">
              <input type="radio" className="raio" name="" id="" />
              <h3>Set default shipping address</h3>
            </div>
          </div>
          <div className="form_savat2">
            <div className="mini_savat1">
              <h2>Delivery method</h2>
              <div className="flexx">
                <input type="radio" className="raio" name="" id="" />
                <p>₦ 2,000</p>
                <p>Delivery fee</p>
                <p>Door delivery</p>
              </div>
            </div>
            <div className="mini_savat2">
              <h2>Payment Methods</h2>
              <br />
              <br />
              <div className="flexx">
                <input type="radio" className="raio" name="" id="" />
                <h3>Pay with card </h3>
              </div>
              <p>
                (Get 5% off total price and money <br />
                back guarantee)
              </p>
              <span>You will be redirected to Paystack payment gateway</span>
              <br />
              <div className="flexx">
                <input type="radio" className="raio" name="" id="" />
                <h3>Pay on delivery</h3>
                <br />
              </div>
              <p className="p_savat">
                Kindly note that we will only accept POS payment option on
                delivery
              </p>
              <p className="p_savat">
                You have to make payment before opening package
              </p>
              <p className="p_savat">
                Once the seal is broken, item can only be returned if damaged or
                defective{" "}
              </p>
            </div>
          </div>
          <div className="sikle">
            <div className="sikl_savat">
              <h3 style={{ textAlign: "center" }}>ORDER SUMMARY</h3>
              <div className="div">
                {local
                  .filter((val) => val.savat === true)
                  .map((val, i) => (
                    <div key={i} className="flexx">
                      <br />
                      <br />
                      <img className="savat_img" src={val.img} alt="" />
                      <div className="div">
                        <h3>{val.text}</h3>
                        <span style={{ color: "silver" }}>
                          Size : {val.size}
                        </span>
                        <br />
                        <span style={{ color: "#ED165F" }}>
                          Price : ₦{val.price}
                        </span>
                        <br />
                        <div className="flexx">
                          <p>soni</p>
                          <div className="btnbox">
                            <button
                              className="btn1"
                              onClick={() => minusfun(val)}
                            >
                              -
                            </button>
                            <p className="soni">{val.soni}</p>
                            <button
                              className="btn2"
                              onClick={() => plusfun(val)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <br />
                        <br />
                      </div>
                    </div>
                  ))}
              </div>
              <hr />
              <div className="flexx1">
                <h3>Cart sub-total</h3>
                <br />
                <h3>-------</h3>
              </div>
              <div className="flexx1">
                <h3>Card discount</h3>
                <br />
                <h3>-------</h3>
              </div>
              <div className="flexx1">
                <h3>Delivery fee</h3>
                <br />
                <h3>-------</h3>
              </div>
              <hr />
              <div style={{ color: "red" }} className="flexx1">
                <h1>Total</h1>
                <h1>
                  {" "}
                  {local
                    .filter((val) => val.savat === true)
                    .reduce((a, b) => a + b.soni * b.price, 0)}
                  $
                </h1>
              </div>
            </div>
            <button onClick={() => func()} className="btn_big">
              PLACE ORDER
            </button>
          </div>
        </div>
      ) : (
        <div className="big_savat">
          <button onClick={func1} className="button">
            Back
          </button>
          <h2>
            Shopping Cart ({local.filter((val) => val.savat === true).length}{" "}
            iteam)
          </h2>
          <br />
          <br />
          <div className="table">
            <div className="mini_table1">
              <h3>ITEM DESCRIPTION</h3>
              <div className="table_text">
                <h3>QUANTITY</h3>
                <h3>UNIT PRICE</h3>
                <h3>SUB TOTAL</h3>
              </div>
            </div>
            <div className="big_table">
              {local
                .filter((val) => val.savat === true)
                .map((val, i) => (
                  <div key={i} className="mini_table2">
                    <div className="box_one">
                      <img className="savat_img" src={val.img} alt="" />
                      <div className="div">
                        <p>{val.text}</p>
                        <br />
                        <p>Size : {val.size}</p>
                        <br />
                        <button
                          onClick={() => savatfun(val)}
                          className="imgbtn"
                        >
                          <img src={img} alt="X" />
                          REMOVE
                        </button>
                      </div>
                    </div>
                    <div className="table_text1">
                      <div className="text_mini_1">
                        <h3>{val.soni}</h3>
                      </div>
                      <div className="text_mini_1">
                        <h3>₦ {val.price}</h3>
                      </div>
                      <div className="text_mini_1">
                        <h3>₦ {val.price * val.soni}</h3>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div
            style={{ textAlign: "right", paddingRight: "90px" }}
            className="total"
          >
            <h1>
              Total :{" "}
              {local
                .filter((val) => val.savat === true)
                .reduce((a, b) => a + b.soni * b.price, 0)}
              $
            </h1>
            <br />
            <p>Delivery fee not included yet</p>
          </div>
        </div>
      )}
    </>
  );
}
export default Savat;
