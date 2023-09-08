import { InputForm } from "./Inputs"
import "./Form.css"
import { Button } from "./Button"

export const Form = () => {
    return (
        <form className="formulary">

            <InputForm
            name="No. de Gallinas:"
            placeholder="Cantidad de Gallinas"
            />
            <InputForm
            name="Edad en Semanas:"
            placeholder="Edad en Semamas"
            />

            <Button
            name="Calcular"
            />
        </form>
    )
}