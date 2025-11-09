const ReusableButton = ({ children, style, onClick }) => {
    return (
    <div className="ReusableButton">
        <button style={style} onClick={onClick}>
            {children}
        </button>
    </div>
    );
}

export default ReusableButton;