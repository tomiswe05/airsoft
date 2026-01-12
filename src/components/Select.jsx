import './Select.css'
import Display from './Display';
import { useState } from 'react';

function Select() {
    const [customOpen, setCustomOpen] = useState(false);
    const [customSelected, setCustomSelected] = useState('All');

    const handleCustomSelect = (option) => {
        setCustomSelected(option);
        setCustomOpen(false);
    };

    const options = [
        'All',
        'Hyper Realism',
        'Minimalism',
        'Semi-Realism',
        'Realism',
        'Trilogy'
    ];

    return (
        <>
            <h3 className='cover-title'>Our Covers</h3>

            {/* Mobile/Tablet Dropdown */}
            <div className="select-container mobile-only">
                <div className="dropdown">
                    <button
                        onClick={() => setCustomOpen(!customOpen)}
                        className="dropdown-button"
                    >
                        <span className={customSelected === 'Select an option' ? 'placeholder' : ''}>
                            {customSelected}
                        </span>
                        <svg
                            className={`arrow ${customOpen ? 'arrow-up' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {customOpen && (
                        <div className="dropdown-menu">
                            {options.map((option, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleCustomSelect(option)}
                                    className={`dropdown-item ${customSelected === option ? 'active' : ''}`}
                                >
                                    {option}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Desktop Horizontal Tabs */}
            <div className="tabs-container desktop-only">
                {options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => setCustomSelected(option)}
                        className={`tab-button ${customSelected === option ? 'active' : ''}`}
                    >
                        {option}
                    </button>
                ))}
            </div>

            <Display selected={customSelected} />
        </>
    );
}

export default Select;
