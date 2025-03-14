import PageTransition from '../scripts/transitions';

import ContactForm from '../components/elements/contact-form';
import HeroNew from '../components/blocks/hero-new';
import SocialLinks from '../components/elements/social';

const Contact = () => {
  return (
    <PageTransition>
      <HeroNew
        heroSize={'hero-small'}
        heading={'Contact'}
        imgActive={false}
        btnActive={false}
      />
      <div className="page-container">
        <section className="contact">
          <div className="container">
            <div className="contact__content">
              <h2>Get in Touch</h2>
              <p>
                {
                  "Whether you're looking for some minor content changes, add some custom functionality, a redesign or a new build, drop me a line and let me know how I can help you realize your next project."
                }
              </p>
              <h4>{'Stay Connected!'}</h4>
              <SocialLinks />
            </div>
            <div className="contact__form">
              <ContactForm />
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Contact;
