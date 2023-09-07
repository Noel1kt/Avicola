import "./Results.css"
import { TextResults } from "./TextResults"

export const Results = () => {
    return <section className="results">
        <div className="info">
            <TextResults 
            name="Cajas de Huevo:"
            output="------"
            />
            <TextResults
            name="Producción (unidad):"
            output="------"
            />
            <TextResults
            name="Producción (%):"
            output="------"
            />
            <TextResults
            name="Consumo Quintales:"
            output="------"
            />
        </div>
    </section>
}