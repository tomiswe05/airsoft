import ImageHero from "../components/ImageHero";
import Offer from "../components/Offer";
import HomeImage from "../components/HomeImage";
import Timeline from "../components/Timeline";
import "../styles/Home.css";
import Different from "../components/Different";
function Home() {
  return (
    <>
      <div className="home-container">
        {/*/ Hero Section */}
        <h1>Discover the world’s best <span>Fantasy Book <br /> Cover </span>Design</h1>
        <ImageHero />

        <p>We help self-published fantasy authors enchant readers at first glance,
         through high-quality fantasy book cover design that sparks curiosity before
        a single page is turned</p>
        {/* Button Section */}
         <div className="home-button">
            <button>View Portfolio</button>
         </div>
          {/* Offer Component - the buttons that toggle the images */}
          <Offer />
          {/* Home Image Component - the images that change based on the offer selected */}
          <HomeImage />

          {/* Steps Section */}
          <div className="steps-container">
            <div className="steps-description">
              <h2>How It Works</h2>
              <p>Follow these simple steps to bring your fantasy book cover to life. Our streamlined process ensures quality results and clear communication every step of the way.</p>
            </div>
            
            <div className="steps">
              <div className="step-item">
                <h3>STEP 1: Contact Us for Scheduling</h3>
                <p>After reviewing our process and pricing, reach out via live chat on our website—our lead artist will guide you. You can also contact us by email or through Instagram, WhatsApp, or Telegram.</p>
              </div>

              <div className="step-item">
                <h3>STEP 2: Send Info</h3>
                <p>Once your project is accepted, you'll receive three forms: Order Form, Contract, and Questionnaire. All must be completed within 7 days to secure your slot. Failure to submit forms, questionnaire, and contract on time may result in losing your slot or project delay.</p>
              </div>

              <div className="step-item">
                <h3>STEP 3: Receive Free Draft</h3>
                <p>After booking and submitting your forms, you'll receive your first sketch draft within 3 to 7 days of your start date.</p>
              </div>

              <div className="step-item">
                <h3>STEP 4: Receive Second Draft</h3>
                <p>If the first sketch matches your vision, a 50% payment secures the second draft. This version will be closer to the final cover but still rough, requiring further painting and polish.</p>
              </div>

              <div className="step-item">
                <h3>STEP 5: Give Feedback and Revisions</h3>
                <p>You review, we refine, we make sure everything aligns with your vision. Custom covers include up to 3 revisions. There will be an additional cost for more revisions. This is a collaborative process, and we want you to love your cover. That is the goal.</p>
              </div>

              <div className="step-item">
                <h3>STEP 6: Approve Final Cover</h3>
                <p>Once you're happy with the draft, we add the painting and detailing that make covers shine. At this stage, only minor fixes are possible, major revisions end once you approve finalizing. Your finalized cover will then be sent and you send the final 50% payment.</p>
              </div>

              <div className="step-item">
                <h3>STEP 7: Add-Ons</h3>
                <p>If you ordered and need extras (print cover, page illustrations, marketing images, or audio design), please allow 2 weeks' notice to ensure deadlines are met.</p>
              </div>
            </div>
          </div>
          {/* Different Component */}
          <Different />

      </div>
    </>
  );
}


export default Home;