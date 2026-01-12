import '../styles/Legal.css';

function Privacy() {
  return (
    <div className="legal-container">
      <div className="legal-hero">
        <h1>Privacy Policy</h1>
        <p>Last updated: January 2025</p>
      </div>

      <div className="legal-content">
        <section className="legal-section">
          <p className="legal-intro">
            We respect your privacy and are committed to protecting your personal information.
          </p>
        </section>

        <section className="legal-section">
          <h2>Information We Collect</h2>
          <p>We may collect:</p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Project details and communication content</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>How We Use Your Information</h2>
          <p>Your information is used to:</p>
          <ul>
            <li>Communicate with you</li>
            <li>Deliver services</li>
            <li>Send invoices or project updates</li>
          </ul>
          <p>
            We do not sell, rent, or share your personal data with third parties except where required by law.
          </p>
        </section>

        <section className="legal-section">
          <h2>Data Security</h2>
          <p>
            We take reasonable measures to protect your data from unauthorized access or disclosure.
          </p>
        </section>

        <section className="legal-section">
          <h2>Cookies</h2>
          <p>
            Our website may use cookies to improve user experience and analyze site traffic.
          </p>
        </section>

        <section className="legal-section">
          <h2>Contact</h2>
          <p>
            If you have any questions about this privacy policy, please contact us at:{' '}
            <a href="mailto:Airsoftstudios01@gmail.com">Airsoftstudios01@gmail.com</a>
          </p>
        </section>
      </div>
    </div>
  );
}

export default Privacy;
