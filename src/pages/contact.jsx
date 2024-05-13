import coolGuyAndy from '../assets/images/cool-guy-posterize.png';
import ContactForm from '../components/contact-form';
import PageTransition from '../scripts/transitions';

const Contact = () => {
  return (
    <PageTransition>
      <section className="hero hero-small contact-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Contact</h1>
          </div>
          <div className="contact-hero-image">
            <img
              src={coolGuyAndy}
              alt="Cool Guy Andy"
              width="600"
              height="600"
            />
          </div>
        </div>
      </section>
      <section className="contact">
        <div className="container">
          <div className="contact__content">
            <h2>Get in touch!</h2>
            <p>
              {
                "Whether you're looking for some minor content changes, add some custom functionality, full redesign or rebuild, drop us a line and let us know how we can help your next project."
              }
            </p>
          </div>
          <div className="contact__form">
            <ContactForm />
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
