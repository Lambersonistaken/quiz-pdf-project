import {useEffect} from 'react'
import Bar from "@/components/Bar"
import Image from 'next/image'
import {useReward} from 'react-rewards'

type Props = {
    scorePercentage: number,
    score : number,
    totalQuestions: number,
}

const QuizSubmission = (props: Props) => {
    const {scorePercentage, score, totalQuestions} = props;
    const {reward} = useReward("rewardId","confetti");

    useEffect(() => {
        if(scorePercentage === 100){
            reward();
        }
    }, [scorePercentage, reward])



  return (
    <div className='flex flex-col flex-1'>
        <main className='py-11 flex flex-col gap-4 items-center flex-1 mt-24'>
            <h2 className='text-3xl font-bold'>Quiz Completed!</h2>
            <p>You scored: {scorePercentage}%</p>
            {scorePercentage === 100 ? 
            <div>
                <p className='text-center'>Congratulations!🥳</p>
                <div className='flex justify-center'>
                    <Image src="/images/celebration.png" width={300} height={300} alt="celebration" />
                </div>
                <span className='flex justify-center' id="rewardId"></span>
            </div>
            :
             <>
            <div className='flex flex-row gap-8 mt-6'>
                <Bar color='green' percentage={scorePercentage} />
                <Bar color='red' percentage={100 - scorePercentage} />
            </div>
            <div className='flex flex-row gap-8 '>
                <p>{score} Correct</p>
                <p>{totalQuestions - score} Incorrect</p>
            </div>
            </>}
        </main>
    </div>
  )
}

export default QuizSubmission