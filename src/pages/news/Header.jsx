import { useContext } from "react"
import { AccordionContext } from "./Accordion"

const Header = ({children})=>{
    const {isOpened,setIsOpened} = useContext(AccordionContext);
    const handleClick = ()=>{
        setIsOpened(!isOpened)
    }
    return <div onClick={handleClick}>{children}</div>
}

export default Header