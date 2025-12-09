import './Card.css'
import { useState } from 'react';

function Card({ icon: Icon, title, subtitle, description, color }){
    const [showModal, setShowModal] = useState(false);

    return(
        <>
            <div className="card-border">
                <div className='card-top'>
                    <div className='card-icon-wrapper'>
                        <div className='card-icon' style={{ backgroundColor: `${color}15` }}>
                            <Icon size={40} color={color} strokeWidth={1.5} />
                        </div>
                    </div>
                    <div className='card-content'>
                        <div className='card-header'>
                            <h3 className='card-title'>{title}</h3>
                            <span className='card-subtitle'>{subtitle}</span>
                        </div>
                    </div>
                </div>
                <div 
                    className='card-read-more'
                    onMouseEnter={() => setShowModal(true)}
                    onMouseLeave={() => setShowModal(false)}
                >
                    <span>Learn more</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12L10 8L6 4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>

            {showModal && (
                <div className="card-modal">
                    <div className="card-modal-content" style={{ borderColor: color }}>
                        <div className="card-modal-header" style={{ backgroundColor: `${color}20` }}>
                            <div className='modal-icon' style={{ backgroundColor: `${color}30` }}>
                                <Icon size={32} color={color} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h4 style={{ color: color }}>{title}</h4>
                                <span className='modal-subtitle'>{subtitle}</span>
                            </div>
                        </div>
                        <p className="card-modal-description">{description}</p>
                    </div>
                </div>
            )}
        </>
    )
}
export default Card;