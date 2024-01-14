import { useEffect, useState } from "react";
import { Question } from "../question";
import { ResultCard } from "../resultCard";
import { WinCard } from "../winCard";
import { useLocalStorage } from "@uidotdev/usehooks";

interface StagesProps {
    questions: IQuestion[],
    changeState: (array: number[], type: string) => void,
    finishGame: ()=>void
}

interface IQuestion {
    question: string,
    imagesource?: string,
    answers: Array<answer>
}

interface answer {
    text: string,
    price: Array<number>,
    resultText: string,
    result: Array<number>
}

export function Stages ({questions, changeState, finishGame} : StagesProps) {
    const [currentQuestion, setCurrentQuestion] = useLocalStorage('questionNumber', 0);
    const [resultCard, setResultCard] = useState(false);
    const [result, setResult] = useState([0,0,0]);
    const [resultText, setResultText] = useState("");
    const [isWin, setIsWin] = useState(false);

    const n = questions.length;
    const question = questions[currentQuestion];
    console.log("current que: ", currentQuestion);

    const storeQuestionNumber =  () => {
        localStorage.setItem('questionNumber', JSON.stringify(currentQuestion));
    }

    function handleChoice (price: Array<number>, result: Array<number>, resultText:string) {
        setResultCard(true);
        setResult(result);
        setResultText(resultText);
        changeState(price, "price");
    };

    function handleClose (result: number[]) {
        changeState(result, "result");
        setResultCard(false);
        if (currentQuestion+1<n) setCurrentQuestion(currentQuestion+1)
        else {
            setCurrentQuestion(0);
            setIsWin(true);
            finishGame();
        }
    }
    

    return (
        <>
        {!isWin && (
            <>
            {(resultCard) && (
                <ResultCard result={result} resultText={resultText} handleClose={handleClose}></ResultCard>  
            )}
            {(!resultCard) && (
                <Question q={question} changeState={changeState} handleChoice={handleChoice}/>
            )}
            </>
        )}
        {isWin && <WinCard/>}
        </>
    )
}