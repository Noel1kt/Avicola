import { InputForm } from "./Inputs"
import "./Form.css"

export const Form = () => {
    return (
        <form className="formulary">
            <InputForm
            name="Raza:"
            placeholder="Selecciona la raza"
            />
            <InputForm
            name="No. de Gallinas:"
            placeholder="Cantidad de Gallinas"
            />
            <InputForm
            name="Edad en Semanas:"
            placeholder="Edad en Semamas"
            />
        </form>
    )
}