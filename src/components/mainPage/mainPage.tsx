import { useCallback, useEffect, useMemo, useState } from "react";
import { States } from "../states";
import { Stages } from "../stages";
import { Random } from "../random";
import data from "../../data/questions.json"
import { LoseCard } from "../loseCard";

interface IQuestion {
    question: string,
    answers: Array<answer>
}

interface answer {
    text: string,
    price: Array<number>,
    resultText: string,
    result: Array<number>
}

export function MainPage () {
    const [money, setMoney] = useState(1000);
    const [followers, setFollowers] = useState(1000);
    const [burnout, setBurnout] = useState(0);
    const [safeCardMoney, setSafeCardMoney] = useState(true);
    const [safeCardFollowers, setSafeCardFollowers] = useState(true);
    const [safeCardBurnout, setSafeCardBurnout] = useState(true);
    const [isRandomModalShown, setIsRandomModalShown] = useState(false);
    const [firstCallForRandomCard, setFirstCallForRandomCard] = useState(true);

    const quiz:Array<IQuestion> = data;
    console.log("quiz: ", quiz);

    function changeState (price: Array<number>, result: Array<number>) {
        setMoney(money+price[0]+result[0]);
        setFollowers(followers+price[1]+result[1]);
        setBurnout(burnout+price[2]+result[2]);
        if (firstCallForRandomCard) {
            setFirstCallForRandomCard(false);
            const newInterval = 30000 + Math.random()*10000;
            console.log(newInterval);
            const intervalId = setInterval(() => {
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
                setBurnout(0);
            }
            break;
        }

    }

    function handleCloseRandomModal(result:number[]) {
        changeState([0,0,0], result);
        setIsRandomModalShown(false);
        const newInterval = 30000 + Math.random()*10000;
        console.log(newInterval);
        const intervalId = setInterval(() => {
          // Update the state here
          setIsRandomModalShown(true);
        }, newInterval);
    }

    return (
        <>
        <header className="statesBar">
        <States money={money} followers={followers} burnout={burnout}/>
        </header>

        {isRandomModalShown && (
            <Random handleCloseRandomModal={handleCloseRandomModal}/>
        )}

        {!isRandomModalShown && (<>

        {(money)>0 && (followers>0) && (burnout<=100) && (
            <>
            <Stages questions={quiz} changeState={changeState}></Stages>
            </>
        )}

        {(money<0) && (
            <LoseCard reason={0} isSafe={safeCardMoney} handleSafeCard={handleSafeCard}/>
        )}

        
        {(followers<0) && (
            <LoseCard reason={1} isSafe={safeCardFollowers} handleSafeCard={handleSafeCard}/>
        )}

        
        {(burnout>100) && (
            <LoseCard reason={2} isSafe={safeCardBurnout} handleSafeCard={handleSafeCard}/>
        )}
        </>)}
        </>
    )
    
}