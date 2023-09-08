import { Header } from "./components/Header/Header"
import { Results } from "./components/Results"
import { Form } from "./components/Form"
import "./App.css"

const UsarDatos = (datos) => {
    console.log("los datos",datos)
}

export function App () {
    return (
        <div className="app">
        <Header/>
        <Results/>
        <Form
        UsarDatos={UsarDatos}
        />
        </div>
        
    )
}