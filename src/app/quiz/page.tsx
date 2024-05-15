"use client"
import {Button} from '@/components/ui/button';
import {useState} from 'react';
import ProgressBar from '@/components/progressBar';
import {ChevronLeft, X} from "lucide-react";
import ResultCard from "./ResultCard";


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
    const [started, setStarted] = useState<boolean>(false);
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [score, setScore] = useState<number>(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean|null>(null);



    const handleNext = () => {
        if(!started)
        {
    setStarted(true);
    return;   
        }
        
        if(currentQuestion < questions.length - 1)
        {
            setCurrentQuestion(currentQuestion + 1);
            
        }

        setSelectedAnswer(null);
        setIsCorrect(null);


    }


    const handleAnswer = (answer) => {
        setSelectedAnswer(answer.id);
        const isCurrenctCorrect = answer.isCorrect;
        if(isCurrenctCorrect)
        {
            setScore(score + 1);
        }
        setIsCorrect(isCurrenctCorrect);
    }


  return (
    <div className='flex flex-col flex-1'>
      <div className='position-sticky top-0 z-10 shadow-md py-4 w-full'>
        <header className='grid grid-cols-[auto,1fr,auto] grid-flow-col items-center justify-between py-2 gap-2'>
            <Button size="icon" variant="outline"><ChevronLeft/></Button>
            <ProgressBar value={(currentQuestion + 1) / questions.length * 100} />
            <Button size="icon" variant="outline"><X/></Button>
            
        </header>
      </div>
      <main className="flex min-h-screen justify-center flex-1">
      {!started ? <h1 className="text-6xl font-bold">This is our Quiz Page👋</h1> : (
        <div>
            <h2 className='text-3xl font-bold'>{questions[currentQuestion].questionText}</h2>
            <div className='grid grid-cols-1 gap-6 mt-6'>
                {questions[currentQuestion].answers.map((answer) => (
                    <Button variant={"secondary"} key={answer.id} onClick={() => handleAnswer(answer)} className='p-4 rounded-md shadow-md'>{answer.answerText}</Button>
                ))}
            </div>
        </div>
      )}
    </main>
    <footer className='footer pb-9 px-6 relative mb-0'>
        <ResultCard isCorrect={isCorrect} correctAnswer={questions[currentQuestion].answers.find(answer => answer.isCorrect === true)?.answerText}/>
      <Button onClick={handleNext}>{!started ? "Start" : "Next"}</Button>
    </footer>
    </div>
    
  )
}
