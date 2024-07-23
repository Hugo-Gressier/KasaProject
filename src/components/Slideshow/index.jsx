import React, { useState } from 'react';
import './styles/css/slideshow.css';

const Slideshow = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const previousSlide = () => {
        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    };

    const nextSlide = () => {
        setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    };

    return (
        <div className="slideshow">
            <button onClick={previousSlide}>
                <i className="fas fa-chevron-left"></i>
            </button>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
            <button onClick={nextSlide}>
                <i className="fas fa-chevron-right"></i>
            </button>
        </div>
    );
};

export default Slideshow;
