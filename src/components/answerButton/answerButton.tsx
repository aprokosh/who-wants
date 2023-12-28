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
        <button className="option-button"
            onClick={() => handleChoice(price, result, resultText)}>
            <div>{text}</div>
            {(price[0]!==0) && <><MoneyIcon/>{price[0]<0?"+":""}{Math.abs(price[0])}</>}
            {(price[1]!==0) && <><FollowersIcon/>{price[1]<0?"+":""}{Math.abs(price[1])}</>}
            {(price[2]!==0) && <><BurnoutIcon/>{price[2]<0?"+":""}{Math.abs(price[2])}</>}
        </button>
    )
}