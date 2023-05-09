import Aos from "aos";
import { useState, React, useContext, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import { DataContext } from "./context/Context";
import $ from "./img/₦.svg";
import "aos/dist/aos.css";
import RangeSlider from "./Slid";

function Shop({ search2 }) {
  const { sizemassiv, savatfun, likefun, category, colormassiv, local, btn } =
    useContext(DataContext);
  useEffect(() => {
    Aos.init();
  }, []);

  const [btnBolean, setBolean] = useState(0);
  const [Bolean, setcolorBolean] = useState(0);
  const [bolean, SetBolean] = useState(0);
  const [categoryBolean, setcategoryBolean] = useState(0);
  const [Category1, Setcategory] = useState("");
  const [color, Setcolor] = useState("");
  const [size, Setsize] = useState("");
  const { value } = useContext(DataContext);

  function fun(index) {
    SetBolean(index);
  }
  function clear() {
    setBolean(0);
  }
  function clear1() {
    setcolorBolean(0);
  }

  return (
    <>
      <div className="container">
        <div className="bigbox">
          <div className="big1">
            <h1 className="padding">CLOTHES</h1>
            <h3 className="h1_border">CATEGORY</h3>
            <div className="text_box">
              {category.map((val, index) => (
                <div data-aos="fade-up" key={index}>
                  <br />
                  <p
                    onClick={() => Setcategory(val) || setcategoryBolean(index)}
                    style={{
                      cursor: "pointer",
                      color: index === categoryBolean ? "red " : "",
                      fontSize: index === categoryBolean ? "20px " : "",
                    }}
                    key={index}
                  >
                    {val === "" ? "All" : val}
                  </p>
                </div>
              ))}
            </div>
            <br />
            <div className="size_box">
              <div className="size_box_mini">
                <h2>SIZE</h2>
                <button onClick={clear} className="btnb">
                  Clear x
                </button>
              </div>

              <div className="btn_box">
                {sizemassiv.map((iteam, index) => (
                  <button
                    data-aos="fade-up"
                    style={{
                      background: index === btnBolean ? "red" : "",
                      color: index === btnBolean ? "white" : "",
                      border: index === btnBolean ? "red" : "",
                    }}
                    onClick={() => Setsize(iteam) || setBolean(index)}
                    key={index}
                    className="sicle_btn"
                  >
                    {iteam}
                  </button>
                ))}
              </div>
            </div>
            <br />
            <br />
            <div className="size_box">
              <div className="size_box_mini">
                <h2>Color</h2>
                <button onClick={clear1} className="btnb">
                  Clear x
                </button>
              </div>

              <div className="btn_boxx">
                {colormassiv.map((iteam, index) => (
                  <div
                    data-aos="fade-up"
                    key={index}
                    className="mini_color_box"
                  >
                    <button
                      onClick={() => Setcolor(iteam) || setcolorBolean(index)}
                      className="m"
                      style={{
                        background: iteam,
                        borderColor: index === Bolean ? "black" : "",
                        width: index === Bolean ? "33px" : "",
                        height: index === Bolean ? "33px" : "",
                      }}
                    ></button>
                    <p className="sicle_p">{iteam}</p>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <RangeSlider />
            </div>
          </div>
          <div className="cardboxx">
            {local
              .slice(16, 28)
              .filter(
                (val) =>
                  val.category
                    .toLowerCase()
                    .includes(Category1.toLowerCase().trim()) &&
                  val.size.toLowerCase().includes(size.toLowerCase().trim()) &&
                  val.color
                    .toLowerCase()
                    .includes(color.toLowerCase().trim()) &&
                  value[0] <= val.price &&
                  val.price <= value[1]
              )
              .filter((obj) => {
                if (search2 === "") {
                  return obj;
                } else if (
                  obj.text
                    .toLowerCase()
                    .includes(search2.toLowerCase().trim()) ||
                  obj.text
                    .toLowerCase()
                    .includes(search2.toLowerCase().trim()) ||
                  obj.price.toString().includes(search2.toLowerCase().trim())
                ) {
                  return obj;
                }
              })
              .map((iteam, index) => (
                <div key={index} className="cards">
                  <div data-aos="fade-up" className="sicl">
                    <img className="cardimg" src={iteam.img} alt="" />
                    <div className="hover">
                      <div
                        style={{ background: iteam.like ? "red" : "#fff" }}
                        className="like"
                      >
                        <BsHeart
                          className="likee"
                          style={{ color: iteam.like ? "#fff" : "red" }}
                          onClick={() => likefun(iteam)}
                        />
                      </div>
                      <br />
                      <button
                        onClick={() => savatfun(iteam)}
                        style={{
                          background: !iteam.savat ? "" : "red",
                          color: iteam.savat ? "#fff" : "",
                        }}
                        className="mini"
                      >
                        <p>ADD TO CART</p>
                        <AiOutlineShoppingCart
                          style={{ color: !iteam.savat ? "" : "white" }}
                          className="savat"
                        />
                      </button>
                    </div>
                  </div>
                  <div className="padding">
                    <p className="p1">{iteam.text}</p>
                    <br />
                    <div className="flexx">
                      <img src={$} alt="img" />
                      <p>{iteam.price}</p>
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
        </div>
        <div className="slid">
          {btn.map((val, index) => (
            <button
              key={index}
              onClick={() => fun(index)}
              style={{
                background: index === bolean ? "#ED165F" : "",
                color: index === bolean ? "#fff" : "",
              }}
              className="btnline"
            >
              {val}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
export default Shop;
