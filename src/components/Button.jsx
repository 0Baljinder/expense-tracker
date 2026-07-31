function Button({clickHandler, icon, color, type, ClassName}){
    return (
        <button className={ClassName} onClick={clickHandler} type={type}>{icon}</button>
    )
};

export default Button;