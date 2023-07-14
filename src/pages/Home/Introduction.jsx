import React from "react";
import "./style.scss";
import Logo from "./img/bollo-logo.png";
import { ALLDATAS } from "../../static/datas/AllDatas";
import bg_M from "./img/bg2.png";
export const ScrollFunc = (navigation) =>{
  switch (navigation) {
    case 'Nav':
      document.querySelector('.Nav').scrollIntoView({ behavior: 'smooth' });
      break;
    case 'Home':
      document.querySelector('.Int').scrollIntoView({ behavior: 'smooth' });
      break;
    case 'About':
      document.querySelector('.Ab').scrollIntoView({ behavior: 'smooth' });
      break;
    case 'Questions':
      document.querySelector('.Que').scrollIntoView({ behavior: 'smooth' });
      break;
    case 'Footer':
      document.querySelector('.Foo').scrollIntoView({ behavior: 'smooth' });
      break;
  }
}
const Introduction = (props) => {

  return (
    <div className="Int">
        <div className="Int-M">
          <img src={bg_M} alt="" />
        </div>
      <div className="Intro">
        <div className="Intro-Nav">
          <div className="Intro-Nav-Logo">
            <img src={Logo} alt="Bollo" />
          </div>
          <div className="Intro-Nav-Navbar">
            <ul className="Intro-Nav-Navbar-ul">
              <li className="Intro-Nav-Navbar-ul-li" onClick={()=>{ScrollFunc('Nav')}}>{ALLDATAS[props.lang].HomePage?.Home}</li>
              <li className="Intro-Nav-Navbar-ul-li" onClick={()=>{ScrollFunc('About')}}>{ALLDATAS[props.lang].HomePage?.About}</li>
              <li className="Intro-Nav-Navbar-ul-li" onClick={()=>{ScrollFunc('Questions')}}>{ALLDATAS[props.lang].HomePage?.Questions}</li>
            </ul>
          </div>
          <div className="Intro-Nav-Contact">
            <li className="Intro-Nav-Contact-li">{ALLDATAS[props.lang].HomePage?.Contact}</li>
          </div>
        </div>
        <div className="Intro-About">
          <div className="Intro-About-Text">{ALLDATAS[props.lang].HomePage?.Slogan}</div>
          <div className="Intro-About-Order">
            <button className="Intro-About-Order-button">{ALLDATAS[props.lang].HomePage?.Order}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
