import "./Results.css"
import { TextResults } from "./TextResults"
import { Form } from "../Form"

export const Results = (props) => {

    const {calculos} = props
    console.log("datos calculados",calculos)

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