import "./Inputs.css"

export const InputForm = (props) => {

    const manejarCambio = (e) => {
        props.setValor(e.target.value)
    }
    return (
        <div className="container">
            <h3 className="Title">{props.name}</h3>
            <input 
            placeholder={props.placeholder}
            className="Input"
            value={props.valor}
            onChange={manejarCambio}
            required
            />
        </div>
        
    )
}