import React, { useContext } from "react"
import { Link } from 'react-router-dom'
import { Context } from "../Context/QuizContext"
import "../CSS/App.css"

export default function StartPage( ) {
    const { settings, setStart, handleSettings } = useContext( Context )

    function handleChange( event ) {
        const { name, value } = event.target
        handleSettings( name, value )
    }

    return (
        <main className="start-page">
            <h1>Quizzlical</h1>
            <form>
                <label htmlFor='amount' >
                    <input 
                    placeholder={5}
                    type='number'
                    id='amount'
                    name='amount'
                    value={ settings.amount }
                    onChange={ handleChange }
                    />
                    <span className='label'>Number of questions</span>
                </label>
                <label htmlFor='category' >
                    <select
                    id='category'
                    name='category'
                    value={ settings.category }
                    onChange={ handleChange }
                    >
                        <option value={-1}>Any category</option>
                        <option value={27}>Animals</option>
                        <option value={25}>Art</option>
                        <option value={26}>Celebrities</option>
                        <option value={9}>General knowledge</option>
                        <option value={16}>Entertainment: Board Games</option>
                        <option value={10}>Entertainment: Books</option>
                        <option value={32}>Entertainment: Cartoon & Animations</option>
                        <option value={29}>Entertainment: Comics</option>
                        <option value={11}>Entertainment: Film</option>
                        <option value={31}>Entertainment: Japanese Anime & Manga</option>
                        <option value={12}>Entertainment: Music</option>
                        <option value={13}>Entertainment: Musicals & Theatres</option>
                        <option value={17}>Entertainment: Science and Nature</option>
                        <option value={14}>Entertainment: Television</option>
                        <option value={15}>Entertainment: Video Games</option>
                        <option value={22}>Geography</option>
                        <option value={23}>History</option>
                        <option value={20}>Mythology</option>
                        <option value={24}>Politics</option>
                        <option value={18}>Science: Computers</option>
                        <option value={30}>Science: Gadgets</option>
                        <option value={19}>Science: Mathematics</option>
                        <option value={21}>Sports</option>
                        <option value={28}>Vehicles</option>
                    </select>
                    <span className='label'>Please select a category</span>
                </label>
                <label htmlFor='difficulty'>
                    <select
                    id='difficulty'
                    name='difficulty'
                    value={ settings.difficulty }
                    onChange={ handleChange }
                    >
                        <option value='any'>Any</option>
                        <option value='easy'>Easy</option>
                        <option value='medium'>Medium</option>
                        <option value='hard'>Hard</option>
                    </select>
                    <span className='label'>Please select the difficulty</span>
                </label>
                <label htmlFor='type'>
                    <select
                    id='type'
                    name='type'
                    value={ settings.type }
                    onChange={ handleChange }
                    >
                        <option value='any'>Any</option>
                        <option value='boolean'>True / False</option>
                        <option value='multiple'>Multiple</option>
                    </select>
                    <span className='label'>Please select the type of questions</span>
                </label>
            </form>    
            <Link to='start-quiz'>
                <button 
                className="start-quiz-btn btn--shadow"
                onClick={ () => setStart( prev => !prev ) }
                >Start Quiz!</button>
            </Link>
        </main>
    )
}