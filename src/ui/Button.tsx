import { FunctionComponent, ReactNode } from "react";

interface ButtonProps {
    className?: string
    children?: ReactNode
    onClick: () => void
    text?: string 
}
 
const Button: FunctionComponent<ButtonProps> = ({onClick, className, text, children}) => {
    return ( 
        <button className={className} onClick={onClick}>
            {text} {children}
        </button>
     );
}
 
export default Button;