import '../styles/Commitments.css';

function Commitments() {
  return (
    <>
      <div className="commitments-page">
        <div className="commitments-hero">
          <h1 className="commitments-title">Our Commitments</h1>
          <p className="commitments-subtitle">
            At AirSoft Studios, we believe every story deserves to be seen, felt, and remembered. Our 
            commitment goes beyond creating beautiful book covers. It's about helping authors connect with 
            readers on a deeper, emotional level.
          </p>
        </div>

        <div className="commitments-container">
          <p className="commitments-philosophy">
            This isn't just design for us; it's a philosophy ingrained in everything we do. We dedicate 
            ourselves to:
          </p>

          <div className="commitments-list">
            <div className="commitment-item">
              <div className="commitment-bullet">•</div>
              <div className="commitment-content">
                <strong>Championing authors' visions</strong> by turning imagination into captivating visuals.
              </div>
            </div>

            <div className="commitment-item">
              <div className="commitment-bullet">•</div>
              <div className="commitment-content">
                <strong>Promoting diversity in storytelling</strong> by crafting covers for voices from every 
                background, culture, and fantasy world.
              </div>
            </div>

            <div className="commitment-item">
              <div className="commitment-bullet">•</div>
              <div className="commitment-content">
                <strong>Empowering self-published authors</strong> with professional, market-ready designs that 
                compete with mainstream publishing.
              </div>
            </div>

            <div className="commitment-item">
              <div className="commitment-bullet">•</div>
              <div className="commitment-content">
                <strong>Blending psychology and art</strong> to create covers that don't just look stunning, but 
                also move people to pick up the book.
              </div>
            </div>

            <div className="commitment-item">
              <div className="commitment-bullet">•</div>
              <div className="commitment-content">
                <strong>Collaborating with integrity</strong>—open communication, transparency, and respect at 
                every step of the process.
              </div>
            </div>
          </div>

          <div className="commitments-closing">
            <p>
              Our success lies in staying true to these commitments and ensuring every cover we design 
              becomes a powerful gateway into the worlds you've created.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Commitments;
