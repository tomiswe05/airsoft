import './PricingCard.css';

function PricingCard({ name, price, offers, additional, className }) {
  return (
    <div className={`pricin car${className ? ' ' + className : ''}`}>
      <p className="card-name">{name}</p>
      <p className="price">{price}</p>
      <div className="offer-list">
        {offers && offers.map((offer, idx) => (
          <p className="offer-item" key={idx}>{offer}</p>
        ))}
      </div>
      {additional && (
        <div className="additional">
          <p>{additional}</p>
        </div>
      )}
    </div>
  );
}

export default PricingCard;