import '../styles/Legal.css';

function Terms() {
  return (
    <div className="legal-container">
      <div className="legal-hero">
        <h1>Terms and Conditions</h1>
        <p>Last updated: January 2025</p>
      </div>

      <div className="legal-content">
        <section className="legal-section">
          <p className="legal-intro">
            By accessing or using our website and services, you agree to the following Terms and
            Conditions. If you do not agree, please do not use our services.
          </p>
        </section>

        <section className="legal-section">
          <h2>Services</h2>
          <p>
            We provide custom fantasy book cover design services for authors and publishers. All designs
            are created based on the information, references, and direction provided by the client.
          </p>
        </section>

        <section className="legal-section">
          <h2>Client Responsibilities</h2>
          <p>Clients agree to:</p>
          <ul>
            <li>Provide clear briefs, references, and required materials</li>
            <li>Respond in a timely manner to feedback and approvals</li>
            <li>Ensure they have the legal right to use any text, images, or materials they supply</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>Revisions</h2>
          <p>
            Each project includes a limited number of revisions as stated in the project agreement.
            Additional revisions may incur extra charges.
          </p>
        </section>

        <section className="legal-section">
          <h2>Turnaround Time</h2>
          <p>
            Estimated delivery timelines will be communicated before work begins. Delays caused by late
            feedback or changes to the brief may affect delivery dates.
          </p>
        </section>

        <section className="legal-section">
          <h2>Intellectual Property</h2>
          <ul>
            <li>
              Final, fully paid designs grant the client the right to use the artwork for its intended
              purpose (book cover, marketing, etc.).
            </li>
            <li>
              We retain the right to display completed work in our portfolio, website, and social media
              for promotional purposes unless otherwise agreed in writing.
            </li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>Prohibited Use</h2>
          <p>
            Our artwork may not be used for illegal, offensive, or defamatory purposes.
          </p>
        </section>

        <section className="legal-section">
          <h2>Refund Policy</h2>
          <p>Due to the custom and creative nature of our services:</p>
          <ul>
            <li>No refunds are available once work has started.</li>
            <li>If a project is cancelled before work begins, a full refund may be issued.</li>
            <li>
              If cancellation occurs after initial concepts or sketches have been delivered, partial
              refunds are not guaranteed and are assessed on a case-by-case basis.
            </li>
          </ul>
          <p>
            We are committed to working closely with clients to achieve a satisfactory result through
            revisions and communication.
          </p>
        </section>

        <section className="legal-section">
          <h2>Contact</h2>
          <p>
            If you have any questions about these terms, please contact us at:{' '}
            <a href="mailto:Airsoftstudios01@gmail.com">Airsoftstudios01@gmail.com</a>
          </p>
        </section>
      </div>
    </div>
  );
}

export default Terms;
