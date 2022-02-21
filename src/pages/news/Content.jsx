import { useContext } from "react"
import { AccordionContext } from "./Accordion"

const Content = ({children})=>{
    const {isOpened} = useContext(AccordionContext);
    return isOpened && <div>{children}</div>
}

export default Content