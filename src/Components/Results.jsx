import React, { useContext } from "react"
import { Link } from 'react-router-dom'
import { Context } from "../Context/QuizContext"
import { nanoid } from "../../node_modules/nanoid"

export default function Results() {
    const { questions, selected, reset, again } = useContext( Context )
    let correct = 0
    const questionsArray = questions.map( ( {question, correctAnswer, allAnswers} ) => {
        const answers = allAnswers.map( answer => {
            // console.log( selected[question], answer )
            let classAnswer
            if ( selected[question] == answer && correctAnswer == selected[question] ) {
                classAnswer = 'correct' // Selected the right answer
                correct += 1
            } else if ( selected[question] == answer && correctAnswer != selected[question] ) {
                classAnswer = 'incorrect' // Selected the wrong answer
            } else if ( correctAnswer == answer ) { 
                classAnswer = 'not-selected right' // Right answer wasn't selected
            } else {
                classAnswer = 'not-selected wrong' // A wrong answer that wasn't selected
            }
            return (
                <span className={ `answer ${classAnswer}` } key={ nanoid() } >{ answer }</span>
                )
        } )
        return (
            <div key={ nanoid() } className="question">
                <span className="question--title">{ question }</span>
                <div className="answers--container">
                    { answers }
                </div>
            </div>
        )
    } )

    return (
        <main>
            <h1 className="results--number">You got { correct }/{ questions.length } answers right! { correct >= questions.length / 2 ? '🥳' : '😢'}</h1>
            <div className="results--container">
                { questionsArray }
            </div>
            <div className="btns--container">
                <Link to='/start-quiz'>
                    <button 
                    className="play-again-btn btn--shadow"
                    onClick={ again }
                    >Play again</button>
                </Link>
                <Link to='/'>
                    <button 
                    className="change-settings-btn"
                    onClick={ reset }
                    >Change settings</button>
                </Link>
            </div>
        </main>
    )

}