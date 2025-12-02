export default function ErrorContainer({error}) {
    return (
        <div>
            <div className="errorContainer">
                <p>{error}</p>
            </div>
        </div>

    )
}