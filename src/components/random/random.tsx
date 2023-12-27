import random from "../../data/randomCards.json"
import { MoneyIcon, FollowersIcon, BurnoutIcon, CloseIcon } from "../images"

export function Random ({handleCloseRandomModal}: 
    { handleCloseRandomModal:(result: number[])=>void }) {

    function getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
      }
      
    const randomNumber = getRandomInt(random.cards.length);
    const {result, text } = random.cards[randomNumber];

    return (
        <div
        style={{borderStyle:'1px solid rgba(0, 0, 0, 0.05)', background:'#FAFAF5', borderRadius:'5px'}}
        >
        <h1>{text}</h1>
        <MoneyIcon/>{result[0]}
        <FollowersIcon/>{result[1]}
        <BurnoutIcon/>{result[2]}
        <a href="#" onClick={() => handleCloseRandomModal(result)}><CloseIcon/></a>
        </div>
    )
}