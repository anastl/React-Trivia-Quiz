async function getQuestions( settings ) {

    const { amount, category, difficulty, type } = settings
    
    let url = `https://opentdb.com/api.php?amount=${amount}`

    if ( category !== -1 ) url+= `&category=${category}`
    if ( difficulty !=='any' ) url+= `&difficulty=${difficulty}`
    if ( type !=='any' ) url+= `&type=${type}`

    url += `&encode=url3986`
        
    const res = await fetch( url )
    const data = await res.json()

    if ( data.response_code == 1 ) {
        return false
    }

    const questionsPolished = data.results.map( questionObject => { 
        const question = decodeURIComponent( questionObject.question )
        const allAnswers = [ ...questionObject.incorrect_answers.map ( ans => decodeURIComponent( ans ) ), decodeURIComponent( questionObject.correct_answer ) ]
        const sortedAnswers = []
        allAnswers.forEach( answer => sortedAnswers.splice( Math.ceil(Math.random()*4), 0, answer ) ) 
        return {
            question: question,
            correctAnswer: decodeURIComponent( questionObject.correct_answer ),
            allAnswers: sortedAnswers
        }
    }  )

    return questionsPolished
}

export { getQuestions }