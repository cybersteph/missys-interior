import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
    <h2>Your dream space or event is just one message away.</h2>
    <a
      href="mailto:missysignaturespaces@gmail.com?subject=%5BType%5D%20Consultation%20Request"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="contact-button">Book Your Consultation</button>
    </a>
    </section>
  );
};

export default Contact;