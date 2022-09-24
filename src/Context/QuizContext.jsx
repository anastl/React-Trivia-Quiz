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

    return (
        <Context.Provider
        value={
            {
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