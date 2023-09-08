import { Header } from "./components/Header/Header"
import { Results } from "./components/Results"
import { Form } from "./components/Form"
import "./App.css"
import { useState } from "react"

export function App () {
    const [datos, setDatos] = useState(null)
    const [resultadoCajas, setResultadoCajas] = useState(null); // Nuevo estado para el resultado

    const UsarDatos = (datos) => {
        const edad = parseInt(datos.edad);
        const cantidad = parseInt(datos.cantidad);
        console.log("los datos",datos)
        setDatos(edad, cantidad);
        const resultado = cajasDeHuevo(edad, cantidad);
        setResultadoCajas(resultado);
    }

    const datosPorEdad = [
        {
            edad:18,
            porcentaje: 2.5,
            consumog: 68.5,
        },
        {
            edad:19,
            porcentaje: 18.5,
            consumog: 72.5,
        },
        {
            edad:20,
            porcentaje: 42.5,
            consumog: 76.5,
        },
        {
            edad:21,
            porcentaje: 63.5,
            consumog: 80,
        }
    ]

    const cajasDeHuevo = (edad, cantidad) => {
        if (datos) {
            // Obtén la edad y la cantidad desde el estado
            console.log("datos primero",datos)
      
            // Busca el objeto correspondiente en datosPorEdad
            const datoEncontrado = datosPorEdad.find((dato) => dato.edad === edad);
            console.log("dato encontrado", datoEncontrado)
            if (datoEncontrado) {
                // Realiza la multiplicación y devuelve el resultado
                const resultado = cantidad * (datoEncontrado.porcentaje / 100);
                console.log("resultado1",resultado)
                return resultado;
              }else{
                console.log("No se encontró la semana");
                return null; // Retorna null si no se encontró coincidencia
              }
        }
    }

    return (
        <div className="app">
        <Header/>
        <Results
        calculos={resultadoCajas}
        />
        <Form
        UsarDatos={UsarDatos}
        />
        </div>
        
    )
}