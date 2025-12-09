import "../styles/Pricing.css";
import PricingCard from '../components/PricingCard';

const pricingData = [
  {
    name: 'Abstract Cover Design',
    price: '$250',
    offers: ['1 Book Cover', 'Up to 3 Revisions'],
    additional: 'An additional $100 for a complex background',
  },
  {
    name: 'Minimalist Cover',
    price: '$180',
    offers: ['1 Book Cover', '2 Revisions'],
    additional: 'Extra $50 for custom illustration',
  },
  {
    name: 'Fantasy Cover',
    price: '$320',
    offers: ['1 Book Cover', 'Up to 5 Revisions', 'Custom Typography'],
    additional: 'Add $120 for character artwork',
  },
  {
    name: 'Sci-Fi Cover',
    price: '$290',
    offers: ['1 Book Cover', '3 Revisions', 'Space Theme'],
    additional: 'Add $80 for spaceship illustration',
  },
  {
    name: 'Romance Cover',
    price: '$210',
    offers: ['1 Book Cover', '2 Revisions', 'Soft Color Palette'],
    additional: 'Add $60 for custom floral art',
  },
  {
    name: 'Children’s Book Cover',
    price: '$270',
    offers: ['1 Book Cover', '4 Revisions', 'Playful Design'],
    additional: 'Add $90 for character illustration',
  },
];

function Pricing() {
  return (
    <>
      <div className="pricing-container">
       <div className="pricing-text">
         <h1>Choose your <span className="pricing-span">Plan</span></h1>
        <p>We offer a range of packages to suit every author’s needs; from a free draft to get you started to  a 20% discount when you order a trilogy.</p>
       </div>

          
        <div className="pricing-cards">
          {pricingData.map((card, idx) => (
            <PricingCard
              key={idx}
              name={card.name}
              price={card.price}
              offers={card.offers}
              additional={card.additional}
              className={idx === pricingData.length - 1 ? 'glass-card' : ''}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Pricing;
