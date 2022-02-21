import React, { useState, createContext } from 'react';
import Header from './Header';
import Content from './Content';

export const AccordionContext=createContext();

const Accordion = ({ children }) => {
    const [isOpened,setIsOpened] = useState(false);
    return <AccordionContext.Provider value={{isOpened,setIsOpened}}>
        <div>{children}</div>
    </AccordionContext.Provider>  
}

Accordion.Header = Header;
Accordion.Content = Content;
  
export default Accordion;