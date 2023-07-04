import React from "react";
import "./style.scss";
import instagram from "./img/instagram.png";
import facebook from "./img/facebook.png";
import youtube from "./img/youtube.png";
import logo_M from "./img/logo-M.png";
import menuLogo_M from "./img/menuLogo-M.png";
import { Link, useHistory, useLocation, useNavigate } from "react-router-dom";

const SocialImages = [
  {
    alt: "I",
    src: instagram,
    click : "https://google.com"
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

const Navbar = () => {
  let navigate = useNavigate()
  let location = useLocation()
  return (
    <div className="Nav">
      <div className="Nav-M">
      <div className="Nav-M-Logo"><img src={logo_M} alt="Bollo" /></div>
      <div className="Nav-M-menuLogo"><img src={menuLogo_M} alt="Menu" /></div>
      </div>
      <div className="Nav-Lang">
       <select className="Nav-Lang-Select" onChange={event => navigate( event.target.value)} defaultValue={location.pathname}>
        {/* <option value="/">--Choose--</option> */}
        <option className="Nav-Lang-Select-Option" value="/az">AZ</option>
        <option className="Nav-Lang-Select-Option" value="/en">EN</option>
        <option className="Nav-Lang-Select-Option" value="/ru">RU</option>
       </select>
      </div>  
      <div className="Nav-Soc">
        {SocialImages.map((img,index) => {
          return (
            <div className="Nav-Soc-img" key={index}>
              <img src={img.src} alt={img.alt} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
