import './Offer.css'
import Card from './Card';
import { offerData } from '../data/offerData';

function Offer() {
   
    return (
        <>
            <div className="offer-section">
                <div className="offer-title">
                    <span className="offer-subtitle">Our Services</span>
                    <h2 className="offer-heading">What We Offer</h2>
                    <p className="offer-description">
                        Discover our comprehensive range of fantasy book cover solutions designed to elevate your story
                    </p>
                    <div className="dot-style">
                        <div className='line'></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className='line'></div>
                    </div>
                </div>

               <div className="card-wrapper">
                {offerData.map((offer) => (
                    <Card 
                        key={offer.id}
                        icon={offer.icon}
                        title={offer.title}
                        subtitle={offer.subtitle}
                        description={offer.description}
                        color={offer.color}
                    />
                ))}
               </div>

                

            </div>
        </>
    )

}

export default Offer;