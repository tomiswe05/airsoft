import './PricingCard.css';

function PricingCard({ name, price, offers, additional, className }) {
  return (
    <div className={`pricin car${className ? ' ' + className : ''}`}>
      <p className="card-name">{name}</p>
      <h1 className="price">{price}</h1>
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