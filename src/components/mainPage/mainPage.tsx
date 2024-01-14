import { useCallback, useEffect, useMemo, useState } from "react";
import { States } from "../states";
import { Stages } from "../stages";
import { Random } from "../random";
import data from "../../data/questions.json"
import { LoseCard } from "../loseCard";

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

export function MainPage () {
    const [money, setMoney] = useState(0);
    const [followers, setFollowers] = useState(0);
    const [burnout, setBurnout] = useState(0);
    const [safeCardMoney, setSafeCardMoney] = useState(true);
    const [safeCardFollowers, setSafeCardFollowers] = useState(true);
    const [safeCardBurnout, setSafeCardBurnout] = useState(true);
    const [isRandomModalShown, setIsRandomModalShown] = useState(false);
    const [firstCallForRandomCard, setFirstCallForRandomCard] = useState(true);
    let intervalForRandomCard:any = null;

    const quiz:Array<IQuestion> = data;
    console.log("quiz: ", quiz);

    function changeState (array: Array<number>, type: string) {
        if (type==="price") {
            setMoney(money-array[0]);
            setFollowers(followers-array[1]);
            setBurnout(burnout-array[2]);
        }
        else if (type==="result") {
            setMoney(money+array[0]);
            setFollowers(followers+array[1]);
            setBurnout(burnout+array[2]);
        }
        if (firstCallForRandomCard) {
            setFirstCallForRandomCard(false);
            const newInterval = 100000 + Math.random()*10000;
            console.log(newInterval);
            intervalForRandomCard = setInterval(() => {
            setIsRandomModalShown(true);
        }, newInterval);
    }
    }

    function handleSafeCard (reason: number) {
        switch (reason) {
            case 0: {
                setSafeCardMoney(false);
                setMoney(1000);
            }
            break;
            case 1: {
                setSafeCardFollowers(false);
                setFollowers(1000);
            }
            break;
            case 2: {
                setSafeCardBurnout(false);
                setBurnout(100);
            }
            break;
        }

    }

    function handleCloseRandomModal(result:number[]) {
        changeState(result, "result");
        setIsRandomModalShown(false);
    }

    function finishGame () {
        clearInterval(intervalForRandomCard); 
    }

    return (
        <>
        <header className="statesBar">
            <States money={money} followers={followers} burnout={burnout}/>
        </header>
        <main className="main-part">
        {isRandomModalShown && (
            <Random handleCloseRandomModal={handleCloseRandomModal}/>
        )}

        {!isRandomModalShown && (<>

        {(money)>=0 && (followers>=0) && (burnout>=0) && (
            <>
            <Stages questions={quiz} changeState={changeState} finishGame={finishGame}></Stages>
            </>
        )}

        {(money<0) && (
            <LoseCard reason={0} isSafe={safeCardMoney} handleSafeCard={handleSafeCard} finishGame={finishGame}/>
        )}

        
        {(followers<0) && (
            <LoseCard reason={1} isSafe={safeCardFollowers} handleSafeCard={handleSafeCard} finishGame={finishGame}/>
        )}

        
        {(burnout<0) && (
            <LoseCard reason={2} isSafe={safeCardBurnout} handleSafeCard={handleSafeCard} finishGame={finishGame}/>
        )}
        </>)}
        </main>
        </>
    )
    
}