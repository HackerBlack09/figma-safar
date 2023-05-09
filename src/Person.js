import { Button } from "@mui/material";
import { React, useState } from "react";
import { useContext } from "react";
import { DataContext } from "./context/Context";
function Person() {
  const [bolean, setbolean] = useState(true);
  const [bolean1, setbolean1] = useState(true);
  const { inputData, inputfun,sendfun,local } = useContext(DataContext);
  const [input, setinput] = useState({
    login: "",
    parol: "",
  });
  function clear() {
    setinput({
      login: "",
      parol: "",
    });
  }
  function inputf(e) {
    setinput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }
  function send() {
    console.log(input);
    if (input.login === "12345" && input.parol === "12345") {
      setbolean(false);
      setbolean1(true);
    } else {
      setbolean1(false);
      setbolean(true);
    }
    clear();
    console.log(local);
  }

  return (
    <div className="div">
      {bolean ? (
        <div className="form">
          <input
            type="text"
            className="input"
            name="login"
            placeholder="login"
            onInput={inputf}
            value={input?.login}
            style={{
              border: bolean1 ? "1px solid  green" : "1px solid red ",
              boxShadow: bolean1
                ? " 0px -0.3px 5px green"
                : "0px -0.3px 5px red ",
            }}
          />
          <br />
          <br />
          <input
            type="password"
            className="input"
            name="parol"
            placeholder="parol"
            onInput={inputf}
            value={input?.parol}
            style={{
              border: bolean1 ? "1px solid  green" : "1px solid red ",
              boxShadow: bolean1
                ? " 0px -0.3px 5px green"
                : "0px -0.3px 5px red ",
            }}
          />{" "}
          <br /> <br />
          <button className="kirish" onClick={send}>
            Kirish
          </button>
        </div>
      ) : (
      <div className="boxx">
        <div className="form2">
          <h1 className="h1">Ma'lumot Qo'shish</h1>
          <div className="btn_box2"></div>
          <form action="" className="form1">
            <label htmlFor="">
              Maxsulot Nomi <br />
              <input
                type="text"
                className="input"
                name="nomi"
                value={inputData?.nomi}
                onInput={inputfun}
              />
            </label>
            <label htmlFor="">
              Maxsulot Xaqida <br />
              <input
                type="text"
                className="input"
                name="text"
                onInput={inputfun}
                value={inputData?.text}
              />
            </label>
            
    {/* id: "",
    nomi: "",
    text: "",
    price: "",
    color: "",
    size: " ",
    category: "",
    savat: false,
    like: false,
    soni: "0",
    img: "", */}
            <label htmlFor="">
              Maxsulot narxi <br />
              <input
                type="number"
                className="input"
                name="price"
                onInput={inputfun}
                value={inputData?.price}
              />
            </label>
            <label htmlFor="">
              Maxsulot rangi <br />
              <input
                type="text"
                className="input"
                name="color"
                onInput={inputfun}
                value={inputData?.color}
              />
            </label>

            <label htmlFor="">
              Maxsulot categoriyasi
              <br />
              <input
                type="text"
                className="input"
                name="category"
                onInput={inputfun}
                value={inputData?.category}
              />
            </label>
            <label htmlFor="">
              Maxsulot size <br />
              <input
                type="text"
                className="input"
                name="size"
                onInput={inputfun}
                value={inputData?.size}
              />
            </label>
            <label htmlFor="">
              Maxsulot rasmi
              <br />
              <input
                type="text"
                className="input"
                name="img"
                placeholder="rasmni urlni kiriting"
                onInput={inputfun}
                value={inputData?.img}
              />
            </label>
          </form>
          <div className="btn_box3">
            <Button
              className="btn"
              variant="contained"
              href="#contained-buttons"
              onClick={sendfun}
            >
              Save all
            </Button>
          </div>
        </div>
      </div>
     )} 
    </div>
  );
}
export default Person;
