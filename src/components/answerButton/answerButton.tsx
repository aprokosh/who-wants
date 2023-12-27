import { MoneyIcon, FollowersIcon, BurnoutIcon} from "../images"

interface AnswerButtonProps {
    answer: {
        text: string,
        price: Array<number>,
        result: Array<number>,
        resultText: string
    },
    handleChoice: (price: number[], result: number[], resultText: string) => void,
    key: number
}
export function AnswerButton ({ answer : {text, price, result, resultText}, handleChoice}: AnswerButtonProps) {



    return (
        <button
            onClick={() => handleChoice(price, result, resultText)}>
            {text}
            <MoneyIcon/>{price[0]}
            <FollowersIcon/>{price[1]}
            <BurnoutIcon/>{price[2]}
        </button>
    )
}