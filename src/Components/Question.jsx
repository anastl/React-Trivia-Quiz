import React from "react"

export default function Question( { question, answers } ) {
    const answersArray = answers.map( answer => (
        <label htmlFor="answers">
            <input 
            type='checkbox'
            />
        </label>
    ) )
}