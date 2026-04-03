import { useState, useRef, useEffect } from "react";
import Heading from "./Heading";

function Collapse({ title, text, hx = "h4" }) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    useEffect(() => {
        const el = contentRef.current;
        if (isOpen) {
            el.style.transition = "height 0.3s ease, padding 0s ease";
            el.style.height = el.scrollHeight + "px";
            el.style.padding = "15px";
        } else {
            el.style.transition = "height 0.3s ease, padding 0.05s ease 0.2s";
            el.style.height = "0px";
            el.style.padding = "0px";
        }
    }, [isOpen]);

    return (
        <div className="collapse">
            <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
                <Heading as={hx} className="collapse-title">{title}</Heading>
                <span className={`arrow ${isOpen ? "up" : "down"}`}></span>
            </div>
            <div ref={contentRef} className="collapse-content">
                {
                    Array.isArray(text) ? 
                    ( <ul>
                        { text.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul> ) :
                    ( <p className="collapse-text">{text}</p> )
                    
                }
            </div>
        </div>
    );
}

export default Collapse;