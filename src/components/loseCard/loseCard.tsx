interface LoseCardProps {
    reason: number,
    isSafe: boolean,
    handleSafeCard: (reason: number) => void
}

export function LoseCard ({reason, isSafe, handleSafeCard} : LoseCardProps) {
    const reasons = ["закончились деньги", "все отписались", "вы выгорели"];
    const safeActivities = ["продать машину", "создать хайп", "съездить на ретрит"]
    return (
        <>
        <h1>{reasons[reason]}</h1>
        {isSafe && (
            <div>
                Но вы еще можете всё спасти! Нужно всего лишь {safeActivities[reason]}
                <button onClick={() => handleSafeCard(reason)}>Да</button>
            </div>
        )}
        </>
    )
}