import React from 'react'
import './style.scss';
import { ALLDATAS } from '../datas/AllDatas';
import instagram from "../../static/header/navbar-menu/img/instagram.png"
import facebook from "../../static/header/navbar-menu/img/facebook.png"
import youtube from "../../static/header/navbar-menu/img/youtube.png"

const Footer = (props) => {
  return (
    <div className="Foo">
        <div className="Footer">
          <div className="Footer-Contact">
            <div className='Footer-Contact-Name'>{ALLDATAS[props.lang].Footer?.Contact?.name}</div>
          <div className="Footer-Contact-Left">
            <h3>{ALLDATAS[props.lang].Footer?.Contact?.email}</h3>
            <h3>{ALLDATAS[props.lang].Footer?.Contact?.number}</h3>
          </div>
          <div className="Footer-Contact-Right">
            <h3>{ALLDATAS[props.lang].Footer?.Contact?.privacy}</h3>
          </div>
          </div>
          <div className="Footer-Copyright">
            <div className="Footer-Copyright-Social">
              <div className="Footer-Copyright-Social-Imgs">
                <img src={instagram} alt="Instagram" />
                <img src={facebook} alt="Facebook" />
                <img src={youtube} alt="Youtube" />
              </div>
            </div>
            <div className="Footer-Copyright-Copyright">
              <div className="Footer-Copyright-Copyright-title">{ALLDATAS[props.lang].Footer?.Copyright?.title} </div>
              <div>&nbsp;</div>
              <div className="Footer-Copyright-Copyright-name">{ALLDATAS[props.lang].Footer?.Copyright?.name}</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer;