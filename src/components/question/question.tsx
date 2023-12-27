import { useState } from "react";
import { AnswerButton } from "../answerButton";
import React from "react";
import { ResultCard } from "../resultCard";

interface QuestionProps {
    q: IQuestion,
    changeState: (price: number[], result: number[]) => void
    handleChoice: (price: number[], result: number[], resultText: string) => void
}

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

export function Question ({q, changeState, handleChoice} : QuestionProps) {

    const { question, answers } = q;

    return (
            <>
            <h1>{question}</h1>
            {answers.map ((answer, i) =>
                <AnswerButton key={i} answer={answer} handleChoice={handleChoice}/>
            )}
        </>
    )
}