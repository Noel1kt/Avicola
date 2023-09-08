import { InputForm } from "./Inputs"
import "./Form.css"
import { Button } from "./Button"

export const Form = () => {

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("Manejar Envío")
    }
    return (
        <form className="formulary" onSubmit={manejarEnvio}>

            <InputForm
            name="Cantidad de Gallinas:"
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