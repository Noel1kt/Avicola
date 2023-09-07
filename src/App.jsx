import { Header } from "./components/Header/Header"
import { Results } from "./components/Results"
import "./App.css"
console.log(Header)

export function App () {
    return (
        <div className="app">
        <Header/>
        <Results/>
        </div>
        
    )
}