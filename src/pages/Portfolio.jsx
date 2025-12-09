import "../styles/portfolio.css";
import PortfolioCard from "../components/portfolioCard";
import Select from "../components/Select";
import image1 from '../assets/images/bk1.jpg';
import image2 from '../assets/images/bk2.jpg';
import image3 from '../assets/images/book.jpg';

function Portfolio() {
  const portfolioData = [
    {
      id: 1,
      title: "Captivate Readers Instantly",
      image: image1,
      description: "Our book covers grab attention at first glance, sparking curiosity and inviting readers to explore your story."
    },
    {
      id: 2,
      title: "Your Story, Perfectly Reflected",
      image: image2,
      description: "Every design captures the tone and emotion of your book, turning its essence into a visual experience."
    },
    {
      id: 3,
      title: "Market-Ready, Professionally",
      image: image3,
      description: "Our expert designers create high-quality, publish-ready covers that connect with your target audience."
    }
  ];

  return (
    <>

      {/* Card Section */}
      <div className="desc">
        <h1>
          Professional book <span className="cover">cover</span> design
        </h1>
        <p>
          Professional Book Cover Design That Captures <br />
          Your Story
        </p>
      </div>

      {/*Map through the data and pass each card as a prop */}
      <div className="card">
        <div className="portfolio-container">
        {portfolioData.map((card) => (
          <PortfolioCard key={card.id} card={card} />
        ))}
      </div> 
      </div>

      {/*Portfolio Images display*/}
      <Select />
    </>
  );
}

export default Portfolio;