import { FunctionComponent } from "react";

interface ButtonProps {
    className?: string
    onClick: () => void
    text?: string 
}
 
const Button: FunctionComponent<ButtonProps> = ({onClick, className, text}) => {
    return ( 
        <button className={className} onClick={onClick}>
            {text}
        </button>
     );
}
 
export default Button;