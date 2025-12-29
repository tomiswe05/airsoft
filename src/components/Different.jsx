import { useState } from 'react';
import './Different.css';

function Different() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const cards = [
        {
            id: 1,
            title: 'Capture More Attention',
            description: "Your fantasy book's first impression is everything, make it unforgettable with a cover design readers can't resist.",
            color: "#ff6b6b",
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
            color: "#4ecdc4",
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
            color: "#f38181",
            iconSvg: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
            )
        },
        {
            id: 4,
            title: 'Magic in Every Design',
            description: "Are you longing for a fantasy cover that truly communicates the magic within your story? We bring your vision to life.",
            color: "#95e1d3",
            iconSvg: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                    <path d="M5 3v4"></path>
                    <path d="M19 17v4"></path>
                    <path d="M3 5h4"></path>
                    <path d="M17 19h4"></path>
                </svg>
            )
        },
        {
            id: 5,
            title: 'Creative Excellence',
            description: "At Airsoft Studios, we combine artistic expertise with your unique vision to create covers that stand out in the fantasy genre.",
            color: "#ffa07a",
            iconSvg: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
                    <path d="M3.27 12A9.96 9.96 0 0 0 2 16c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 6 12 6c-1.84 0-3.56.5-5.04 1.37"></path>
                    <path d="M8 12c1.38-1.38 3.14-2 4.95-1.84"></path>
                    <path d="M10.5 8.5c1.24-.51 2.62-.77 4.03-.66"></path>
                    <path d="M16.5 13.5c-.64.64-1.52 1.02-2.5 1.02-1.38 0-2.56-.75-3.21-1.86"></path>
                </svg>
            )
        },
        {
            id: 6,
            title: 'Exceptional Care',
            description: "We provide exceptional customer care and dedication to bringing your vision to life—the creative partner you've been searching for.",
            color: "#aa96da",
            iconSvg: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
            )
        },
        {
            id: 7,
            title: 'Fast & Professional',
            description: "Self-published indie authors deserve professional quality without the wait. We deliver stunning covers efficiently and affordably.",
            color: "#fcbad3",
            iconSvg: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
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

    // Minimum swipe distance (in px)
    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(0); // Reset touch end
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            handleNext();
        } else if (isRightSwipe) {
            handlePrev();
        }
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

                <div
                    className="carousel-wrapper"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    <div
                        className="carousel-track"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {cards.map((card) => (
                            <div key={card.id} className="carousel-card">
                                <div className="card-icon" style={{ backgroundColor: `${card.color}15` }}>
                                    <div style={{ color: card.color }}>
                                        {card.iconSvg}
                                    </div>
                                </div>
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