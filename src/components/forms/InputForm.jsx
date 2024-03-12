import './InputForm.sass'

const InputForm = ({placeholder}) => {
    return (
        <div>
            <input type="text" placeholder={placeholder}/>
        </div>
    )
}
export default InputForm