import { useState } from 'react';
import './styles/css/collapse.css';

const Collapse = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse">
            <button
                className="collapse__toggle"
                onClick={toggleCollapse}
                aria-expanded={isOpen}
            >
                {title}
                <i class={`fa-solid fa-chevron-up ${isOpen ? 'rotate' : ''}`}></i>
            </button>
            <div className={`collapse__content ${isOpen ? 'open' : 'closed'}`}>
                {children}
            </div>
        </div>
    );
};

export default Collapse;
