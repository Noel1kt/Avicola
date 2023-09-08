import "./Inputs.css"

export const InputForm = (props) => {
    return (
        <div className="container">
            <h3 className="Title">{props.name}</h3>
            <input 
            placeholder={props.placeholder}
            className="Input"
            />
        </div>
        
    )
}