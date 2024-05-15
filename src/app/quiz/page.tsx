"use client"
import {Button} from '@/components/ui/button';
import {useState} from 'react';


const questions = [
    {
        questionText: 'What is React?',
        answers: [
            { answerText: 'A library for building user interfaces', isCorrect: true, id: 1},
            { answerText: 'A framework for building user interfaces', isCorrect: false, id: 2},
            { answerText: 'A framework for managing state', isCorrect: false, id: 3},
            { answerText: 'A library for managing state', isCorrect: false,     id: 4},
        ],
    },
    {
        questionText: 'What is JSX?',
        answers: [
            { answerText: 'JavaScript XML', isCorrect: true, id: 1},
            { answerText: 'JavaScript XML', isCorrect: false, id: 2},
            { answerText: 'JavaScript XML', isCorrect: false, id: 3},
            { answerText: 'JavaScript XML', isCorrect: false, id: 4},
        ],
    },
    {
        questionText: 'What is the virtual DOM?',
        answers: [
            { answerText: 'A virtual representation of the actual DOM', isCorrect: true, id: 1},
            { answerText: 'A virtual representation of the actual DOM', isCorrect: false, id: 2},
            { answerText: 'A virtual representation of the actual DOM', isCorrect: false, id: 3},
            { answerText: 'A virtual representation of the actual DOM', isCorrect: false, id: 4},
        ],
    },
    
]


export default function Home() {
    const [started, setStarted] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handleNext = () => {
        if(!started)
        {
    setStarted(true);
    return;   
        }
        
        if(currentQuestion < questions.length - 1)
        {
            setCurrentQuestion(currentQuestion + 1);
            return;
        }


    }

  return (
    <div className='flex flex-col flex-1'>
      <main className="flex min-h-screen justify-center flex-1">
      {!started ? <h1 className="text-6xl font-bold">This is our Quiz Page👋</h1> : (
        <div>
            <h2 className='text-3xl font-bold'>{questions[currentQuestion].questionText}</h2>
            <div className='grid grid-cols-1 gap-6 mt-6'>
                {questions[currentQuestion].answers.map((answer) => (
                    <Button variant={"secondary"} key={answer.id} className='p-4 rounded-md shadow-md'>{answer.answerText}</Button>
                ))}
            </div>
        </div>
      )}
    </main>
    <footer className='footer pb-9 px-6 relative mb-0'>
      <Button onClick={handleNext}>{!started ? "Start" : "Next"}</Button>
    </footer>
    </div>
    
  )
}
