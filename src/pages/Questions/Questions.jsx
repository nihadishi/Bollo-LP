import React from 'react'
import './style.scss';
import arrowSVG from './img/arrow-up.svg'
import { ALLDATAS } from '../../static/datas/AllDatas';
const OpenAnswer = (id)=>{
    if(document.getElementById(id).style.display == 'block'){  
        document.getElementById(id).style.display = 'none';
    }
    else{
        document.getElementById(id).style.display = 'block'
    } 
}
const Questions = (props) => {
    const AllQuestionsAndAnswers = [
        {
            answerID: 1,
            arrow: arrowSVG,
            question: ALLDATAS[props.lang].QuestionPage?.question1,
            answers:ALLDATAS[props.lang].QuestionPage?.answer1,
        },
        {
            answerID: 2,
            arrow: arrowSVG,
            question: ALLDATAS[props.lang].QuestionPage?.question2,
            answers:ALLDATAS[props.lang].QuestionPage?.answer2,
        },
        {
            answerID: 3,
            arrow: arrowSVG,
            question: ALLDATAS[props.lang].QuestionPage?.question3,
            answers:ALLDATAS[props.lang].QuestionPage?.answer3,
        },
        {
            answerID: 4,
            arrow: arrowSVG,
            question: ALLDATAS[props.lang].QuestionPage?.question4,
            answers:ALLDATAS[props.lang].QuestionPage?.answer4,
        },
        {
            answerID: 5,
            arrow: arrowSVG,
            question: ALLDATAS[props.lang].QuestionPage?.question5,
            answers:ALLDATAS[props.lang].QuestionPage?.answer5,
        },
    ];
  return (
    <div className="Que">
        <div className="Questions">
            <div className="Questions-name">{ALLDATAS[props.lang].QuestionPage.name}</div>
            {
                AllQuestionsAndAnswers.map(item=>{
                    return(
                       <div className="Questions-QA" key={item.answerID} onClick={()=>OpenAnswer(item.answerID)}>
                         <div className="Questions-QA-Q" >{item.question} <img src={item.arrow} alt="&#8964;" className='Questions-QA-Q-svg' /></div>
                        <div className="Questions-QA-A" id={item.answerID}>{item.answers}</div>
                       </div>
                    )
                })
            }
            
        </div>
    </div>
  )
}

export default Questions