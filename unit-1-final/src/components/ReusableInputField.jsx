const ReusableInputField = ({ type, name, value, onChange, style }) => {
    return (
        <input type={type} name={name} value={value} onChange={onChange} style={style}/>
    );
};

export default ReusableInputField;