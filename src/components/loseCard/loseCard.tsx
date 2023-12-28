import { SafeIcon } from "../images/images";

interface LoseCardProps {
    reason: number,
    isSafe: boolean,
    handleSafeCard: (reason: number) => void
}

export function LoseCard ({reason, isSafe, handleSafeCard} : LoseCardProps) {
    const reasons = ["закончились деньги", "все отписались", "вы выгорели"];
    const safeActivities = ["продать машину", "создать хайп", "съездить на ретрит"]
    return (
        <div className="card">
        <h1>{reasons[reason]}</h1>
        {isSafe && (
            <div>
                <div>
                Но вы еще можете всё спасти!
            </div>
            <div>
                Нужно всего лишь {safeActivities[reason]}.
            </div>
                <a href="#" onClick={() => handleSafeCard(reason)}><SafeIcon/></a>
            </div>
        )}
        </div>
    )
}