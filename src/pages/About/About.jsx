import React from 'react'
import "./style.scss";
import box from './img/box.svg'
import delivery from './img/delivery.svg'
import farm from './img/farm.svg'
import infoImg from './img/info-img.png'
import { ALLDATAS } from '../../static/datas/AllDatas';
const About = (props) => {
    const Advantages = [
        {
            svg: delivery,
            alt: 'delivery',
            name: ALLDATAS[props.lang].AboutPage?.Advantages?.name1,
            description: ALLDATAS[props.lang].AboutPage?.Advantages?.description1,
        },
        {
            svg: farm,
            alt: 'farm',
            name: ALLDATAS[props.lang].AboutPage?.Advantages?.name2,
            description: ALLDATAS[props.lang].AboutPage?.Advantages?.description2,
        },
        {
            svg: box,
            alt: 'box',
            
            name: ALLDATAS[props.lang].AboutPage?.Advantages?.name3,
            description: ALLDATAS[props.lang].AboutPage?.Advantages?.description3,
        },
    ]
  return (
    <div className='Ab'>
        <div className="About">
            <div className="About-Advantages">
                {
                    Advantages.map((item,index)=>{
                        return(
                            <div key={index} className='About-Advantages-Item'>
                                <div className='About-Advantages-Item-img'><img src={item.svg} alt={item.alt}/></div>
                                <h1 className='About-Advantages-Item-name'>{item.name}</h1>
                                <h5 className='About-Advantages-Item-description'>{item.description}</h5>
                            </div>
                        )
                    })
                }
            </div>

            <div className="About-Info">
                <div className='About-Info-Text'>
                <div className='About-Info-Text-name'>{ALLDATAS[props.lang].AboutPage?.Info?.name}</div>
                <div className='About-Info-Text-description'>{ALLDATAS[props.lang].AboutPage?.Info?.description}</div>
                </div>
                <div className='About-Info-img'>
                    <img src={infoImg} alt="Bollo" />
                </div>
            </div>
        </div>

    </div>
  )
}

export default About