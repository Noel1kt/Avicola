import "./Results.css"
import { TextResults } from "./TextResults"
import { Form } from "../Form"

export const Results = (props) => {

    const {calculos} = props
    console.log("datos calculados",calculos)

    const Cajas = () => {
        if (isNaN(calculos.resultado)) {
          return "-----";
        } else if (calculos.resultado) {
          const cajas = (calculos.resultado / 360).toFixed(2);
          return cajas;
        }
    }

    const Quintales = () => {
        if(isNaN(calculos.consumog)){
            return "_____";
        }else{
            const quintales = (((calculos.consumog * calculos.cantidad)* 0.00220462)/100).toFixed(2);
            return quintales
        }
        
    }

     
      
     return <section className="results">
        <div className="info">
            <TextResults 
            name="Cajas de Huevo:"
            output={Cajas()}
            />
            <TextResults
            name="Producción (unidad):"
            output={calculos.resultado}
            />
            <TextResults
            name="Producción (%):"
            output={calculos.porcentaje}
            />
            <TextResults
            name="Consumo Quintales:"
            output={Quintales()}
            />
        </div>
    </section>
}