import { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    question: "How much do fantasy book covers cost?",
    answer:
      "Pricing depends on art style and level of detail. As professional fantasy book cover designers, we use tiered pricing so you only pay for what you need. Check our pricing section for package details and examples.",
  },
  {
    question: "Do I own the rights to the fantasy book covers you create?",
    answer:
      "Yes. Once final payment is made, you receive full usage rights for your fantasy book cover(s) for personal or commercial use (depending on the package). We retain the right to display the cover in our portfolio unless you request otherwise.",
  },
  {
    question: "What do you need from me to get started on fantasy book covers?",
    answer: (
      <ul>
        <li>Story or scene description</li>
        <li>Character appearance / references</li>
        <li>Art style preference</li>
        <li>Cover format (ebook, print, or both)</li>
        <li>Title & author name</li>
        <li>Any inspiration images</li>
      </ul>
    ),
  },
  {
    question: "How can I contact you to order fantasy book covers?",
    answer:
      "Send us a message through our live chat anytime with “fantasy book covers” in the subject. You can also reach out on Instagram, WhatsApp, or Telegram share your brief and we’ll walk you through the process.",
  },
  {
    question: "How long will it take to finish my fantasy book cover?",
    answer:
      "Our typical production timeline for fantasy book covers is 2–4 weeks, depending on complexity and revision rounds. After we review your story description and references, we’ll send a clear, detailed schedule.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>

      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <button
            className={`faq-question ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
            <span className="icon">{activeIndex === index ? "−" : "+"}</span>
          </button>

          <div
            className={`faq-answer ${
              activeIndex === index ? "show" : ""
            }`}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </section>
  );
}
