import React, { useState, useEffect } from "react"

const Context = React.createContext()

function ContextProvider( { children } ) {
    const [start, setStart] = useState( false )
    const [questions, setQuestions] = useState([])
    const [selected, setSelected] = useState([])
    const [settings, setSettings] = useState({
        amount: 5,
        category: '',
        difficulty: '',
        type: ''
    })

    function handleSettings( name, value ) {
        setSettings( prevSettings => {
            return {
                ...prevSettings,
                [name]: value
            }
        } )
    }

    function reset() {
        setSettings( {
            amount: 5,
            category: '',
            difficulty: '',
            type: ''
        } )
        setStart( prev => !prev )
        setQuestions( [] )
        setSelected( [] )
    }

    function again() {
        setQuestions( [] )
        setSelected( [] )
        setStart( prev => !prev )
    }

    return (
        <Context.Provider
        value={
            {
                reset,
                again,
                start,
                settings,
                selected, 
                questions,
                setStart,
                setSelected,
                setQuestions,
                handleSettings
            }
        }>
            { children }
        </Context.Provider>
    )
}

export { ContextProvider, Context }