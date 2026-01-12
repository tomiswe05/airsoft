import './PortfolioCard.css'

function PortfolioCard({card}) {
  return (
    <>
      <div className="rectIn">
          <div className="image-container">
              <img src={card.image} alt={card.title} loading="lazy" decoding="async" />
          </div>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
      </div>
    </>
  );
}
export default PortfolioCard;