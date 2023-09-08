import { Header } from "./components/Header/Header"
import { Results } from "./components/Results"
import { Form } from "./components/Form"
import "./App.css"
console.log(Header)

export function App () {
    return (
        <div className="app">
        <Header/>
        <Results/>
        <Form/>
        </div>
        
    )
}