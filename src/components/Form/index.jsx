import { InputForm } from "./Inputs"
import "./Form.css"
import { Button } from "./Button"
import { useState } from "react"

export const Form = (props) => {

    const [cantidad, setCantidad] = useState("")
    const [edad, setEdad] = useState("")

    const {UsarDatos} = props

    const manejarEnvio = (e) => {
        e.preventDefault()
        let datosAEnviar = {
            cantidad,
            edad
        }
        UsarDatos(datosAEnviar)
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
            name="Edad en Semanas (18-31):"
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