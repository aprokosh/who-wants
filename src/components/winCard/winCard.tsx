export function WinCard () {
    const storeQuestionNumber =  () => {
        localStorage.setItem('questionNumber', JSON.stringify(0));
    }
    return (
        <div className="card">
            <h1>Вау! Теперь вы настоящая матерь бложья. Уже искали себя на багине?</h1>
        </div>
    )
}