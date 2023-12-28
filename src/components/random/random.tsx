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
        className="card random-card"
        >
        <h1>{text}</h1>
        <a className="close-icon" href="#" onClick={() => handleCloseRandomModal(result)}><CloseIcon/></a>
        {(result[0]!==0) && <><MoneyIcon/>{result[0]}</>}
        {(result[1]!==0) && <><FollowersIcon/>{result[1]}</>}
        {(result[2]!==0) && <><BurnoutIcon/>{result[2]}</>}
        </div>
    )
}