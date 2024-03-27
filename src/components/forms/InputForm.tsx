type InputProps = {
    placeholder: string;
}

const InputForm = ({ placeholder }: InputProps): JSX.Element => {
    return (
        <input className="outline-none" type="text" placeholder={placeholder} />
    );
};

export default InputForm;
