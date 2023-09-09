import { Header } from "./components/Header/Header"
import { Results } from "./components/Results"
import { Form } from "./components/Form"
import "./App.css"
import { useState , useEffect} from "react"


export function App () {
    const [datos, setDatos] = useState("____")
    const [resultadoCajas, setResultadoCajas] = useState("------"); // Nuevo estado para el resultado

    useEffect(() => {
        if (datos) {
          const edad = parseInt(datos.edad);
          const cantidad = parseInt(datos.cantidad);
          const resultado = cajasDeHuevo(edad, cantidad);
          setResultadoCajas(resultado);
        }
      }, [datos]);
    
      const UsarDatos = (datos) => {
        setDatos(datos);
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
        },
        {
            edad:22,
            porcentaje: 82,
            consumog: 84,
        },
        {
            edad:23,
            porcentaje: 90,
            consumog: 89,
        },
        {
            edad:24,
            porcentaje: 92.5,
            consumog: 92.5,
        },
        {
            edad:25,
            porcentaje: 94,
            consumog: 96,
        },
        {
            edad:26,
            porcentaje: 95,
            consumog: 97.5,
        },
        {
            edad:27,
            porcentaje: 95.5,
            consumog: 99,
        },
        {
            edad:28,
            porcentaje: 95.5,
            consumog: 99.5,
        },
        {
            edad:29,
            porcentaje: 96,
            consumog: 100,
        },
        {
            edad:30,
            porcentaje: 96,
            consumog: 100,
        },
        {
            edad:31,
            porcentaje: 96,
            consumog: 100,
        },
        {
            edad:100,
            porcentaje: 68.5,
            consumog: 105,
        },
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
                return {
                    resultado,
                    porcentaje: datoEncontrado.porcentaje,
                    consumog: datoEncontrado.consumog,
                    cantidad: datos.cantidad,
                };
              }else{
                console.log("No se encontró la semana");
                return {
                    resultado: "_____",
                    porcentaje: "_____",
                    consumog: "_____",
                    cantidad:"_____",
                  };
            
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