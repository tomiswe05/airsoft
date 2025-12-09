import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/images/imge2.jpg';
import commitmentImage from '../assets/images/bk1.jpg';
import historyImage from '../assets/images/bk2.jpg';
import '../styles/About.css';
import { animateCounters } from '../utils/countUpAnimation';

function About() {
  useEffect(() => {
    animateCounters();
  }, []);

  return (
    <>
      <div className="about-hero">
        <div className="hero-background">
          <img src={heroImage} alt="Book covers" className="hero-image" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            We are the book cover artists you've been searching for.
          </h1>
          <div className="hero-text">
            <p className="hero-description">
              AirSoft Studios is a design studio dedicated to helping self-published authors bring their world to life. 
              We craft high-quality book covers that spark curiosity and capture the imagination at first glance. 
              Every design we create is the doorway into your world, setting the stage for the adventure within.
            </p>
          </div>
        </div>
      </div>

      {/* Capabilities Section */}
      <section className="capabilities-section">
        <div className="capabilities-container">
          <h2 className="capabilities-header">
            <span>Our Capabilities</span>
          </h2>
          
          <div className="capabilities-grid">
            <div className="capability-card">
              <div className="card-number">01</div>
              <h3>Marketing Powerhouse</h3>
              <p>Your book cover isn't just art—it's your most powerful marketing tool.</p>
            </div>

            <div className="capability-card">
              <div className="card-number">02</div>
              <h3>Stand Out Everywhere</h3>
              <p>Designs that pop on bookshelves, online stores, and in readers' memories.</p>
            </div>

            <div className="capability-card">
              <div className="card-number">03</div>
              <h3>Psychology Meets Art</h3>
              <p>We blend human behavior insights with artistic magic to captivate readers.</p>
            </div>

            <div className="capability-card">
              <div className="card-number">04</div>
              <h3>Multi-Genre Experts</h3>
              <p>World-class artists who understand what makes people stop, look, and buy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Authors Section */}
      <section className="authors-section">
        <div className="authors-container">
          <h2 className="section-title-main">Our Authors</h2>
          
          <div className="authors-intro">
            <p>
              Partner with a team that combines <strong>imagination</strong>, <strong>psychology</strong>, and <strong>visual storytelling</strong>. 
              We work across all genres and platforms—making your book unforgettable at first glance.
            </p>
          </div>

          <h3 className="stats-heading">By the Numbers</h3>

          <div className="stats-table-wrapper">
            <table className="stats-table">
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Result</th>
                  <th>Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="metric-name">Reader Engagement</td>
                  <td className="metric-value">85%</td>
                  <td className="metric-description">Authors report increased reader engagement after launch</td>
                </tr>
                <tr>
                  <td className="metric-name">Featured Covers</td>
                  <td className="metric-value">70%</td>
                  <td className="metric-description">Covers featured in top book communities and online groups</td>
                </tr>
                <tr>
                  <td className="metric-name">Recommendations</td>
                  <td className="metric-value">9/10</td>
                  <td className="metric-description">Self-published authors recommend us to other writers</td>
                </tr>
                <tr>
                  <td className="metric-name">Client Retention</td>
                  <td className="metric-value">60%</td>
                  <td className="metric-description">Clients return for series covers or new projects</td>
                </tr>
                <tr>
                  <td className="metric-name">Projects Completed</td>
                  <td className="metric-value">100+</td>
                  <td className="metric-description">Imaginative worlds brought to life with enchanting, market-ready cover art</td>
                </tr>
                <tr>
                  <td className="metric-name">Global Reach</td>
                  <td className="metric-value">15+</td>
                  <td className="metric-description">Countries where authors have trusted us to craft their visual identity</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="values-section">
        <div className="values-container">
          <h2 className="section-title-main">Our Values</h2>
          
          <div className="values-content">
            <p className="values-intro">
              At AirSoft Studios, our values shape the way we create, collaborate, and bring stories to life. 
              Every cover we design is guided by these principles:
            </p>

            <div className="values-list">
              <div className="value-item">
                <h3 className="value-title">• Excellence.</h3>
                <p className="value-text">
                  We believe every book deserves a cover that feels as magical as the story inside. We push beyond 
                  "good enough" to create captivating, market-ready designs that enchant readers at first glance.
                </p>
              </div>

              <div className="value-item">
                <h3 className="value-title">• Ambition.</h3>
                <p className="value-text">
                  We are driven to help authors succeed. Each project is an opportunity to raise the bar, transform 
                  imagination into art, and ensure your book stands out in the crowded marketplace.
                </p>
              </div>

              <div className="value-item">
                <h3 className="value-title">• Courage.</h3>
                <p className="value-text">
                  Bold stories deserve bold covers. We dare to explore new ideas, push creative boundaries, and craft 
                  visuals that truly reflect the heart of your world.
                </p>
              </div>

              <div className="value-item">
                <h3 className="value-title">• Inclusion.</h3>
                <p className="value-text">
                  Stories are for everyone. We respect and celebrate diverse voices and worlds, designing covers that 
                  speak to broad audiences while honoring each author's unique vision.
                </p>
              </div>

              <div className="value-item">
                <h3 className="value-title">• Innovation.</h3>
                <p className="value-text">
                  We blend timeless artistry with an understanding of psychology and visual trends. By uniting creativity 
                  and strategy, we design covers that don't just look beautiful—they connect deeply with readers.
                </p>
              </div>

              <div className="value-item">
                <h3 className="value-title">• One Team, One Vision.</h3>
                <p className="value-text">
                  We work hand-in-hand with authors, combining your imagination with our expertise. Together, we create 
                  covers that are not only illustrations, but gateways into your story.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="commitment-section">
        <div className="commitment-container">
          <h2 className="commitment-heading">Our Commitment</h2>
          
          <div className="commitment-content">
            <p className="commitment-intro">
              At AirSoft Studios, we believe every story deserves to be seen, felt, and remembered. Ourcommitment goes beyond creating beautiful book covers. It's about helping authors connect with 
              readers on a deeper, emotional level.
            </p>

            <p className="commitment-text">
              This isn't just design for us; it's a philosophy ingrained in everything we do. <Link to="/commitments" className="commitment-link">Learn more about our commitments</Link> and how we dedicate ourselves to bringing your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Our Studio's History Section */}
      <section className="history-section">
        <div className="history-container">
          <div className="history-card">
            <div className="history-image-wrapper">
              <img src={historyImage} alt="Our Studio's History" className="history-image" />
            </div>
            
            <div className="history-content">
              <h2 className="history-heading">Our Studio's History</h2>
              
              <p className="history-text">
                From our beginnings in 2020, AirSoft Studios set out with a clear vision: to help self-published 
                authors enchant readers at first glance. What started as a small creative studio with a passion 
                for storytelling through art quickly grew into a trusted name in the book cover design industry.
              </p>

              <p className="history-text">
                As the publishing world became more competitive and visually driven, we evolved to meet the 
                changing needs of authors; combining artistry, market awareness, and the psychology of design 
                to create covers that don't just decorate books, but sell them.
              </p>

              <p className="history-text">
                Today, we are proud to stand as a leading creative partner for authors around the globe, 
                blending imagination and strategy to deliver covers that captivate, connect, and compete with 
                the very best in the industry.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
