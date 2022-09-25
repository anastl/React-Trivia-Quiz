import React, { useState, useContext, useEffect } from "react"
import { nanoid } from "../../node_modules/nanoid"
import { Link } from 'react-router-dom'
import { Context } from "../Context/QuizContext"
import { getQuestions } from "../Utilities/getQuestions"

function Quiz() {    
    const { questions, reset, start, settings, setQuestions, selected, setSelected } = useContext( Context )
    const [existResults, setExistResults] = useState( true )
    function addAnswer( event ) {
        const { name, value } = event.target
        // setSelectedAnswers( prevSelAnsw => {
        //     return {
        //         ...prevSelAnsw,
        //         [name]: value
        //     }
        // } )
        // setSelected( selectedAnswers )
        setSelected( prevSelAnsw => {
            return {
                ...prevSelAnsw,
                [name]: value
            }
        }  )
    }

    useEffect( () => {
        async function questionSetter() {
            try {
                const response = await getQuestions( settings )
                if ( response ) {
                    setQuestions( response )
                } else {
                    setExistResults( false )
                }
            } catch ( e ) { console.log( "Error!!", e ) }
        }
        questionSetter()
    }, [ start ] )

    if ( ! existResults ) {
        return ( 
            <main>
                <div className="disclaimer">Couldn't return results. There aren't enough questions for your query.</div>
                <div className="btns--container">
                    <Link to='/'>
                        <button 
                        className="change-settings-btn"
                        >Change settings</button>
                    </Link>
                </div>
            </main> 
        )
    }
    
    // Go through each question object { question, correctAnswer and allAnswers }
    // to add each possible answer to a ( <label> <input> ) and then add
    // that array of possible answers to a div
    const questionsArray = []
    for ( const [ name, { question, allAnswers} ] of Object.entries( questions ) ) {    
        const answers = allAnswers.map( answer => (
            <div key={ nanoid() }>
                <input 
                type='radio'
                name={ question }
                id={ `${name}${answer}` }
                value={ answer }
                checked={ selected[question] == answer }
                onChange={ addAnswer }
                />
                <label htmlFor={ `${name}${answer}` } className="answer" >
                    { answer }
                </label>
            </div>
        ) )
        questionsArray.push( 
            <div key={ nanoid() } className="question">
                <span className="question--title">{ question }</span>
                <div className="answers--container">
                    { answers }
                </div>
            </div>
        )
    }

    return ( 
        <main>
            <form className="questions--container">
                { questionsArray }
            </form>
            
            <div className="btns--container">
                <Link to='/results'>
                    <button 
                    className="get-results-btn"
                    // onClick={ sendAnswers }
                    disabled={ Object.keys(selected).length === questions.length ? false : true }
                    >Get my score</button>
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

export default Quiz