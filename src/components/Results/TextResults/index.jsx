import "./TextResults.css"
export const TextResults = (props) => {
    const resultsEdith = `${props.output}`
    return (
        <div className="info-item">{props.name} 
        <span className="output">{resultsEdith}</span>
        </div>
    )
}