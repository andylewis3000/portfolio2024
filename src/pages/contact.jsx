import PageTransition from '../scripts/transitions';

import ContactForm from '../components/elements/contact-form';
import HeroNew from '../components/blocks/hero-new';
import SocialLinks from '../components/elements/social';
import ContentColumn from '../components/elements/content-col';

const Contact = () => {
  return (
    <PageTransition>
      <HeroNew
        heroSize={'hero-medium'}
        heading={'Contact'}
        imgActive={false}
        btnActive={false}
      />
      <div className="page-container">
        <section className="contact">
          <div className="container">
            <div className="contact__content">
              <div className="contact__text">
                <ContentColumn
                  heading="Get in touch"
                  paragraph={
                    <p>
                      Whether you&apos;re looking for some minor content
                      changes, add some custom functionality, a redesign or a
                      new build, drop me a line and let me know how I can help
                      you realize your next project.
                    </p>
                  }
                />
                <div className="contact__social">
                  <h4>{'Stay Connected!'}</h4>
                  <SocialLinks />
                </div>
              </div>

              <div className="contact__form">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Contact;
