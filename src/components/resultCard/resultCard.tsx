import { BurnoutIcon, CloseIcon, FollowersIcon, MoneyIcon } from "../images"

interface ResultProps {
    result: number[],
    resultText: string,
    handleClose: (result: number[]) => void
}

export function ResultCard ({result, resultText, handleClose}: ResultProps) {
    return (
        <div
        className="card"
        >
        <h1>{resultText}</h1>
        <a className="close-icon" href="#" onClick={() => handleClose(result)}><CloseIcon/></a>
        {(result[0]!==0) && <><MoneyIcon/>{result[0]}</>}
        {(result[1]!==0) && <><FollowersIcon/>{result[1]}</>}
        {(result[2]!==0) && <><BurnoutIcon/>{result[2]}</>}
        </div>
    )
}