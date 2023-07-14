import "./style.scss";
import instagram from "./img/instagram.png";
import facebook from "./img/facebook.png";
import youtube from "./img/youtube.png";
import logo_M from "./img/logo-M.png";
import menuLogo_M from "./img/menuLogo-M.png";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { ALLDATAS } from "../../../static/datas/AllDatas";
import { ScrollFunc } from "../../../pages/Home/Introduction";


const SocialImages = [
  {
    alt: "I",
    src: instagram,
    click: "https://google.com",
  },
  {
    alt: "F",
    src: facebook,
  },
  {
    alt: "Y",
    src: youtube,
  },
];
const Navbar = (props) => {
  let navigate = useNavigate();
  let location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <>  <div className="Nav">
    <div className="Nav-M">
      {<><div className="Nav-M-Logo">
        <img src={logo_M} alt="Bollo" />
      </div>
      <div className="Nav-M-menuLogo"onClick={() => {setIsOpen(!isOpen)}}>
        <img src={menuLogo_M} alt="Menu" />
      </div></>}
    </div>
    <div className="Nav-Lang">
      <select
        className="Nav-Lang-Select"
        onChange={(event) => navigate(event.target.value)}
        defaultValue={location.pathname}
      >
        <option className="Nav-Lang-Select-Option" value="/az">
          AZ
        </option>
        <option className="Nav-Lang-Select-Option" value="/en">
          EN
        </option>
        <option className="Nav-Lang-Select-Option" value="/ru">
          RU
        </option>
      </select>
    </div>
    <div className="Nav-Soc">
      {SocialImages.map((img, index) => {
        return (
          <div className="Nav-Soc-img" key={index}>
            <img src={img.src} alt={img.alt} />
          </div>
        );
      })}
    </div>
  </div></>
   {isOpen?
    <div className="OpenMenu">
    <div className="OpenMenu-Nav-M">  
        <div className="OpenMenu-Nav-M-menuLogo"onClick={() => {setIsOpen(!isOpen);}}>
          <img src={menuLogo_M} alt="Menu" />
        </div>
      </div>
      <div className="OpenMenu-AllItems">
      <div className="OpenMenu-AllItems-Logo"> <img src={logo_M} alt="Bollo" /></div>
      <div className="OpenMenu-AllItems-Items">
        <div className="OpenMenu-AllItems-Items-Item" onClick={()=>{setIsOpen(false); ScrollFunc("Home")}}>{ALLDATAS[props.lang].HomePage.Home}</div>
        <div className="OpenMenu-AllItems-Items-Item" onClick={()=>{setIsOpen(false); ScrollFunc("About")}}>{ALLDATAS[props.lang].HomePage.About}</div>
        <div className="OpenMenu-AllItems-Items-Item" onClick={()=>{setIsOpen(false); ScrollFunc("Questions")}}>{ALLDATAS[props.lang].HomePage.Questions}</div>
        <div className="OpenMenu-AllItems-Items-Item" onClick={()=>{setIsOpen(false); ScrollFunc("Footer")}}>{ALLDATAS[props.lang].HomePage.Contact}</div>
      </div>
      <div className="OpenMenu-AllItems-Lang">
        <select
          className="OpenMenu-AllItems-Select"
          onChange={(event) => navigate(event.target.value)}
          defaultValue={location.pathname}
        >
          {/* <option value="/">--Choose--</option> */}
          <option className="OpenMenu-AllItems-Select-Option" value="/az">
            AZ
          </option>
          <option className="OpenMenu-AllItems-Select-Option" value="/en">
            EN
          </option>
          <option className="OpenMenu-AllItems-Select-Option" value="/ru">
            RU
          </option>
        </select>
      </div>
      </div>
    </div>
    :<></>
  }
  </>
    
  );
};

export default Navbar;
