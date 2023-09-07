import "./Results.css"
import { TextResults } from "./TextResults"

export const Results = () => {
    return <section className="results">
        <div className="info">
            <TextResults/>
            <TextResults/>
            <TextResults/>
        </div>
    </section>
}