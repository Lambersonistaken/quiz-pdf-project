import React from 'react'

type Props = {
    isCorrect: boolean | null,
    correctAnswer: string,
}

const ResultCard = (props: Props) => {
    const {isCorrect, correctAnswer} = props;

    if(isCorrect === null){
        return null;
    }


    const text = isCorrect ? 'Correct!' : 'Incorrect! The correct answer is: ' + props.correctAnswer;


  return (
    <div>{text}</div>
  )
}

export default ResultCard