import { InputForm } from "./Inputs"
import "./Form.css"
import { Button } from "./Button"
import { useState } from "react"

export const Form = () => {

    const [cantidad, setCantidad] = useState("")
    const [edad, setEdad] = useState("")

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("Manejar Envío")
    }
    return (
        <form className="formulary" onSubmit={manejarEnvio}>

            <InputForm
            name="Cantidad de Gallinas:"
            placeholder="Cantidad de Gallinas"
            valor={cantidad}
            setValor={setCantidad}
            />
            <InputForm
            name="Edad en Semanas:"
            placeholder="Edad en Semamas"
            valor={edad}
            setValor={setEdad}
            />

            <Button
            name="Calcular"
            />
        </form>
    )
}