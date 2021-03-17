import '../css/button.css'

const Button = ({value, handleClick, className}) => {
    return (
            <button className={className} onClick={handleClick}>{value}</button>
    )
}

export default Button
