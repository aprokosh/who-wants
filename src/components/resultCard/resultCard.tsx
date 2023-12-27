import { BurnoutIcon, CloseIcon, FollowersIcon, MoneyIcon } from "../images"

interface ResultProps {
    result: number[],
    resultText: string,
    handleClose: () => void
}

export function ResultCard ({result, resultText, handleClose}: ResultProps) {
    return (
        <div
        style={{borderStyle:'1px solid rgba(0, 0, 0, 0.05)', background:'#FAFAF5', borderRadius:'5px'}}
        >
        <h1>{resultText}</h1>
        <MoneyIcon/>{result[0]}
        <FollowersIcon/>{result[1]}
        <BurnoutIcon/>{result[2]}
        <a href="#" onClick={handleClose}><CloseIcon/></a>
        </div>
    )
}