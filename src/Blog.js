import { useContext, useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import $ from "./img/₦.svg";
import img1 from ".//img/engin-akyurt-ehdI_89nzMo-unsplash-removebg 1.png";
import img2 from ".//img//Group 57.png";
import { DataContext } from "./context/Context";
import Aos from "aos";
import "aos/dist/aos.css";

function Blog({ search }) {
  useEffect(() => {
    Aos.init();
  }, []);
  const [Bolean, setBolean] = useState(0);
  const { local, btn,likefun,savatfun } = useContext(DataContext);

  function fun(index) {
    setBolean(index);
  }

  return (
    <>
      <div className="container">
        <div data-aos="fade-up" className="start">
          <div className="ministart">
            <img src={img1} alt="" />
          </div>
        </div>
        <br />
        <img data-aos="fade-up" className="img2" src={img2} alt="img" />
        <br />
        <p className="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae gravida
          cursus adipiscing <br /> viverra at tortor, egestas odio parturient.
          Morbi ut lorem in erat. Et et molestie diam diam ultricies.
          <br /> Scelerisque duis diam ac cras dictum adipiscing. Venenatis at
          sit proin ut vitae adipiscing id facilisis.
        </p>
        <br />
        <div className="cardbox">
          {local
            .slice(0, 16)
            .filter((obj) => {
              if (search === "") {
                return obj;
              } else if (
                obj.text.toLowerCase().includes(search.toLowerCase().trim()) ||
                obj.price.toString().includes(search.toLowerCase().trim())
              ) {
                return obj;
              }
            })
            .map((iteam, index) => (
              <div  key={index} className="cards">
                <div  data-aos="fade-up" className="sicl">
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
                    <p>{iteam.price}</p> <br />
                  
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="slid">
          {btn.map((val, index) => (
            <button
              key={index}
              onClick={() => fun(index)}
              style={{
                background: index === Bolean ? "#ED165F" : "",
                color: index === Bolean ? "#fff" : "",
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
export default Blog;
