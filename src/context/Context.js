import React from "react";
import { useState } from "react";
import img3 from "../img//1.png";
import img4 from "../img//10.png";
import img5 from "../img//10.png";
import img6 from "../img//10.png";
import img7 from "../img//10.png";
import img8 from "../img//10.png";
import img9 from "../img//10.png";
import img10 from "../img/All 1.png";
import img11 from "../img/All 1.png";
import img12 from "../img/All 1.png";
import img13 from "../img/All 1.png";
import Swal from "sweetalert2";

export const DataContext = React.createContext();

export default function ContextProvider({ children }) {
  const [category, setcategory] = useState([
    "",
    "Erkaklar Kiyimlari",
    "Ayollar Kiyimlari",
    "Bolalar Kiyimlari",
    "Aksesuarlar",
    "Soatlar",
    "Qishki Kiyimlar",
    "Futbolkalar",
    "Shimlar",
  ]);
  const [colormassiv, setcolormassiv] = useState([
    "",
    "red ",
    "black",
    "blue",
    "brown",
    "gold",
    "silver",
    "white",
    "purple",
    "green",
    "pink",
    "orange",
  ]);
  const [sizemassiv, setsizemassiv] = useState([
    "",
    "XS ",
    "S",
    "M",
    "L",
    "XL",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
  ]);
  const [info1, setinfo1] = useState([
 
    {
      id: 1,
      img: img5,
      text: "Grey bee wrist-watch",
      price: 82,
      savat: false,
      size: "S",
      soni: "0",
      like: false,
    },
    {
      id: 2,
      img: img5,
      text: "Grey bee wrist-watch",
      price: 82,
      savat: false,
      size: "S",
      soni: "0",
      like: false,
    },
    {
      id: 3,
      img: img3,
      text: "Mini skirt",
      price: 53,
      like: false,
      soni: "0",
      size: "M",
      savat: false,
    },
    {
      id: 4,
      img: img3,
      text: "Red lightweight gown",
      price: 34,
      size: "L",
      soni: "0",
      savat: false,
      like: false,
    },
    {
      id: 5,
      img: img3,
      text: "Blue botton-down gown",
      price: 29,
      savat: false,
      size: "XL",
      soni: "0",
      like: false,
    },
    {
      id: 6,
      img: img4,
      text: "Moon and star neckpiece",
      price: 90,
      savat: false,
      size: "23",
      soni: "0",
      like: false,
    },
    {
      id: 7,
      img: img6,
      text: "Tambourine Crossbody Bag ",
      price: 34,
      size: "24",
      soni: "0",
      savat: false,
      like: false,
    },
    {
      id: 8,
      soni: "0",
      img: img7,
      text: "Katy Perry Killer Queen EDP",
      price: 94,
      savat: false,
      size: "25",
      like: false,
    },
    {
      id: 9,
      img: img8,
      text: "High heels ladies shoes",
      soni: "0",
      price: 67,
      size: "26",
      savat: false,
      like: false,
    },
    {
      id: 10,
      img: img9,
      text: "Nerdy oval glasses",
      price: 82,
      savat: false,
      soni: "0",
      size: "27",
      like: false,
    },
    {
      id: 11,
      img: img10,
      text: "Diamond ladies ring",
      soni: "0",
      price: 100,
      size: "27",
      savat: false,
      like: false,
    },
    {
      id: 12,
      img: img3,
      text: "Ladies bush pants ",
      price: 76,
      savat: false,
      soni: "0",
      size: "28",
      like: false,
    },
    {
      id: 13,
      img: img11,
      text: "Guilhermina Embellished Slides",
      price: 10,
      savat: false,
      size: "23",
      soni: "0",
      like: false,
    },
    {
      id: 14,
      img: img12,
      text: "Superga Plaid Sneakers",
      price: 13,
      savat: false,
      size: "28",
      like: false,
    },
    {
      id: 15,
      img: img3,
      text: "Checked ladies trouser",
      price: 71,
      soni: "0",
      savat: false,
      size: "28",
      like: false,
    },
    {
      id: 16,
      img: img13,
      text: "Beanie winter fleece",
      price: 92,
      savat: false,
      size: "25",
      like: false,
    },
    {
      id: 17,
      img: img3,
      text: "Multicolored armless top",
      price: 23,
      like: false,
      category: "Ayollar Kiyimlari",
      savat: false,
      soni: "0",
      size: "XS ",
      color: "beige",
    },
    {
      id: 18,
      img: img3,
      text: "Erkaklar Kiyimlari",
      price: 43,
      like: false,
      savat: false,
      soni: "0",
      category: "Denim",
      color: "red",
      size: "S",
    },
    {
      id: 19,
      img: img3,
      text: "Mini skirt",
      savat: false,
      price: 65,
      like: false,
      soni: "0",
      category: "Bolalar Kiyimlari",
      color: "black",
      size: "M",
    },
    {
      id: 20,
      img: img3,
      savat: false,
      text: "Denim",
      price: 87,
      like: false,
      soni: "0",
      category: "Aksesuarlar",
      color: "brown",
      size: "L",
    },
    {
      id: 21,
      img: img3,
      text: "Blue botton-down gown",
      price: 98,
      savat: false,
      like: false,
      soni: "0",
      category: "Soatlar",
      color: "blue",
      size: "XL",
    },
    {
      id: 22,
      img: img3,
      text: "Moon and star neckpiece",
      savat: false,
      soni: "0",
      price: 11,
      like: false,
      category: "Qishki Kiyimlar",
      color: "gold",
      size: "23",
    },
    {
      id: 23,
      img: img3,
      soni: "0",
      text: "Tambourine Crossbody Bag ",
      price: 1,
      savat: false,
      like: false,
      category: "Futbolkalar",
      color: "silver",
      size: "24",
    },
    {
      id: 24,
      img: img3,
      soni: "0",
      text: "Katy Perry Killer Queen EDP",
      price: 4,
      savat: false,
      like: false,
      category: "Shimlar",
      color: "white",
      size: "25",
    },
    {
      id: 25,
      img: img3,
      text: "High heels ladies shoes",
      price: 9,
      soni: "0",
      like: false,
      category: "Ayollar Kiyimlari",
      savat: false,
      color: "purple",
      size: "26",
    },
    {
      id: 26,
      img: img3,
      text: "Nerdy oval glasses",
      price: 45,
      like: false,
      soni: "0",
      savat: false,
      category: "Erkaklar Kiyimlari",

      color: "green",
      size: "27",
    },
    {
      id: 27,
      img: img3,
      text: "Diamond ladies ring",
      savat: false,
      price: 23,
      like: false,
      soni: "0",
      category: "Bolalar Kiyimlari",

      color: "pink",
      size: "27",
    },
    {
      id: 28,
      img: img3,
      text: "Ladies bush pants ",
      price: 32,
      savat: false,
      like: false,
      category: "Aksesuarlar",

      soni: "0",
      color: "orange",
      size: "28",
    },
    {
      id: 29,
      img: img3,
      text: "Multicolored armless top",
      price: 19,
      like: false,
      category: "Soatlar",

      soni: "0",
      savat: false,
      size: "XS ",
      color: "beige",
    },
    {
      id: 30,
      img: img3,
      text: "Grey bee wrist-watch",
      price: 93,
      like: false,
      savat: false,
      soni: "0",
      category: "Qishki Kiyimlar",
      color: "red",
      size: "S",
    },
    {
      id: 31,
      img: img3,
      text: "Mini skirt",
      savat: false,
      soni: "0",
      price: 43,
      like: false,
      category: "Futbolkalar",
      color: "black",
      size: "M",
    },
    {
      id: 32,
      img: img3,
      savat: false,
      soni: "0",
      text: "Denim",
      price: 12,
      like: false,
      category: "Shimlar",

      color: "brown",
      size: "L",
    },
    {
      id: 33,
      img: img3,
      text: "Blue botton-down gown",
      soni: "0",
      price: 15,
      savat: false,
      like: false,
      category: "Ayollar Kiyimlari",

      color: "blue",
      size: "XL",
    },
    {
      id: 34,
      img: img3,
      text: "Moon and star neckpiece",
      savat: false,
      soni: "0",
      price: 12,
      like: false,
      category: "Ayollar Kiyimlari",

      color: "gold",
      size: "23",
    },
    {
      id: 35,
      img: img3,
      text: "Tambourine Crossbody Bag ",
      soni: "0",
      price: 65,
      savat: false,
      like: false,
      category: "Bolalar Kiyimlari",

      color: "silver",
      size: "24",
    },
    {
      id: 36,
      img: img3,
      text: "Katy Perry Killer Queen EDP",
      price: 54,
      savat: false,
      soni: "0",
      like: false,
      category: "Aksesuarlar",

      color: "white",
      size: "25",
    },
    {
      id: 37,
      img: img3,
      text: "High heels ladies shoes",
      price: 32,
      like: false,
      category: "Soatlar",

      soni: "0",
      savat: false,
      color: "purple",
      size: "26",
    },
    {
      id: 38,
      img: img3,
      text: "Nerdy oval glasses",
      price: 23,
      soni: "0",
      like: false,
      savat: false,
      category: "Qishki Kiyimlar",

      color: "green",
      size: "27",
    },
    {
      id: 39,
      img: img3,
      text: "Diamond ladies ring",
      savat: false,
      price: 89,
      like: false,
      category: "Futbolkalar",
      soni: "0",
      color: "pink",
      size: "27",
    },
    {
      id: 40,
      img: img3,
      text: "Ladies bush pants ",
      price: 98,
      savat: false,
      like: false,
      category: "Shimlar",
      soni: "0",
      color: "orange",
      size: "28",
    },
    {
      id: 41,
      img: img13,
      text: "Multicolored armless top",
      price: 63,
      savat: false,
      like: false,
      category: "Erkaklar Kiyimlari",

      soni: "0",
      size: "XS ",
      color: "beige",
    },
    {
      id: 42,
      img: img3,
      text: "Grey bee wrist-watch",
      price: 216,
      savat: false,
      like: false,
      category: "Ayollar Kiyimlari",

      soni: "0",
      color: "red",
      size: "S",
    },
    {
      id: 43,
      img: img3,
      text: "Mini skirt",
      price: 173,
      savat: false,
      like: false,
      category: "Bolalar Kiyimlari",

      color: "black",
      soni: "0",
      size: "M",
    },
    {
      id: 44,
      img: img3,
      text: "Denim",
      price: 176,
      savat: false,
      like: false,
      category: "Aksesuarlar",

      color: "blue",
      soni: "0",
      size: "L",
    },
    {
      id: 45,
      img: img3,
      text: "Blue botton-down gown",
      price: 110,
      savat: false,
      like: false,
      category: "Soatlar",

      soni: "0",
      color: "brown",
      size: "XL",
    },
    {
      id: 46,
      img: img3,
      text: "Moon and star neckpiece",
      price: 271,
      savat: false,
      like: false,
      category: "Qishki Kiyimlar",

      soni: "0",
      color: "gold",
      size: "23",
    },
    {
      id: 47,
      img: img3,
      text: "Tambourine Crossbody Bag ",
      price: 100,
      savat: false,
      soni: "0",
      like: false,
      category: "Futbolkalar",

      color: "silver",
      size: "24",
    },
    {
      id: 48,
      img: img3,
      text: "Katy Perry Killer Queen EDP",
      price: 110,
      savat: false,
      soni: "0",
      like: false,
      category: "Shimlar",

      color: "white",
      size: "25",
    },
    {
      id: 49,
      img: img3,
      text: "High heels ladies shoes",
      price: 101,
      savat: false,
      like: false,
      category: "Erkaklar Kiyimlari",

      soni: "0",
      color: "purple",
      size: "26",
    },
    {
      id: 50,
      img: img3,
      text: "Nerdy oval glasses",
      price: 111,
      savat: false,
      soni: "0",
      like: false,
      category: "Ayollar Kiyimlari",

      color: "green",
      size: "27",
    },
    {
      id: 51,
      img: img3,
      text: "Diamond ladies ring",
      price: 126,
      soni: "0",
      savat: false,
      like: false,
      category: "Bolalar Kiyimlari",

      color: "pink",
      size: "27",
    },
    {
      id: 52,
      img: img3,
      text: "Ladies bush pants ",
      price: 145,
      savat: false,
      like: false,
      soni: "0",
      category: "Aksesuarlar",
      color: "orange",
      size: "28",
    },
  ]);
  const [btn, setbtn] = useState([1, 2, 3]);
  const [local, setlocal] = useState(
    JSON.parse(localStorage.getItem("local")) || info1
  );
  const [inputData, setInputData] = useState({
    id: "",
    nomi: "",
    text: "",
    price: "",
    color: "",
    size: " ",
    category: "",
    savat: false,
    like: false,
    soni: "0",
    img: "",
  });
  function refresh() {
    setlocal(JSON.parse(localStorage.getItem("local")) || info1);
  }
  function inputfun(e) {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  }
  function clearfun() {
    setInputData({
      id: "",
      nomi: "",
      text: "",
      price: "",
      color: "",
      size: " ",
      category: "",
      savat: false,
      like: false,
      soni: "0",
      img: "",
    });
  }
  function sendfun() {
    if (inputData.id === "") {
      if (localStorage.getItem("local")) {
        localStorage.setItem(
          "local",
          JSON.stringify([...local, { ...inputData, id: new Date().getTime() }])
        );
      } else {
        localStorage.setItem(
          "local",
          JSON.stringify([{ ...inputData, id: new Date().getTime() }])
        );
      }
      setinfo1([...info1, { ...inputData, id: new Date().getTime() }]);
      console.log(info1);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
      refresh();
    } else {
      localStorage.setItem(
        "local",
        JSON.stringify(
          local.map((elem) => (elem.id === inputData.id ? inputData : elem))
        )
      );
      refresh();
    }

    clearfun();
  }
  function likefun(iteam) {
    localStorage.setItem(
      "local",
      JSON.stringify(
        local.map((val) =>
          val.id === iteam.id ? { ...val, like: !val.like } : val
        )
      )
    );
    refresh();
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
    if (iteam.savat === false) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Sizning Tanlangan Maxsulotingiz savatga saqlandi",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Sizning Tanlangan Maxsulotingiz savatdan o'chirildi ",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
  let plusfun = (iteam) => {
    localStorage.setItem(
      "local",
      JSON.stringify(
        local.map((val) =>
          +val.id === iteam.id && val.soni < 10
            ? { ...val, soni: +val.soni + 1 }
            : val
        )
      )
    );
    refresh();
  };
  let minusfun = (iteam) => {
    if (iteam.soni > 0) {
      localStorage.setItem(
        "local",
        JSON.stringify(
          local.map((obj) =>
            +obj.id === iteam.id ? { ...obj, soni: obj.soni - 1 } : obj
          )
        )
      );
      refresh();
    } else {
      alert("error");
    }
  };

  const [value, setValue] = React.useState([0, 250]);

  return (
    <DataContext.Provider
      value={{
        value,
        setValue,
        minusfun,
        plusfun,
        refresh,
        likefun,
        savatfun,
        category,
        setcategory,
        colormassiv,
        setcolormassiv,
        btn,
        setbtn,
        local,
        setlocal,
        info1,
        setinfo1,
        sizemassiv,
        setsizemassiv,
        inputData,
        inputfun,
        sendfun,
        // bolean,
        // boleanfun,
        // local,
        // delitefun,
        // editefun,
        // setdata,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
