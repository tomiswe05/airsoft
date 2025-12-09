import { useState } from 'react';
import './Different.css';

function Different() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
        {
            id: 1,
            title: 'Capture More Attention',
            description: "Your fantasy book's first impression is everything, make it unforgettable with a cover design readers can't resist.",
            iconSvg: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                </svg>
            )
        },
        {
            id: 2,
            title: 'No AI',
            description: 'Every fantasy book cover is tailored and custom-designed for you, legally licensed, giving you 100% copyright ownership. Authentically human-made, fully trustworthy, and royalty-free after payment.',
            iconSvg: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                    <line x1="12" y1="19" x2="12" y2="22"></line>
                </svg>
            )
        },
        {
            id: 3,
            title: 'EBook and Paperback',
            description: 'Whether on a screen or in your reader\'s hands, we create captivating fantasy book cover design that looks just as magical in both.',
            iconSvg: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
            )
        }
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return(
        <>
        <div className="different-container">
            <h3>What Makes Us Different?</h3>
            <p>We give holistic solutions with strategy, book cover design & full print illustration.</p>
            
            <div className="carousel-container">
                <button className="carousel-btn prev-btn" onClick={handlePrev} aria-label="Previous">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
                </button>

                <div className="carousel-wrapper">
                    <div 
                        className="carousel-track" 
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {cards.map((card) => (
                            <div key={card.id} className="carousel-card">
                                <div className="card-icon">{card.iconSvg}</div>
                                <h4>{card.title}</h4>
                                <p>{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <button className="carousel-btn next-btn" onClick={handleNext} aria-label="Next">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </button>
            </div>

            <div className="carousel-dots">
                {cards.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
        </>
    )
}
export default Different;