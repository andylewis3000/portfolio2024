/* Contact Form */
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactForm = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    const sendingMsg = (
      <div className="form__result form-sending">
        <h5>Sending...</h5>
      </div>
    );
    setResult(sendingMsg);
    const form = event.target;
    const formData = new FormData(form);

    formData.append('access_key', 'dc706c94-1fb0-465d-9306-9bc15ee5ac23');

    const successMsg = (
      <div className="form__result form-sent">
        <h5>Success!</h5>
        <p>
          Thanks for reaching out - I&apos;ll be in touch within 48 hours. In
          the meantime, feel free to check out my{' '}
          <Link to="/projects">work</Link>.
        </p>
      </div>
    );

    const errorMsg = (message) => (
      <div className="form__result form-error">
        <h5>Something went wrong</h5>
        <p>
          {message} You can also reach me directly at{' '}
          <a href="mailto:info@andylewis.ca">info@andylewis.ca</a>.
        </p>
      </div>
    );

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult(successMsg);
        form.reset();
      } else {
        console.error('Contact form submission error:', data);
        setResult(errorMsg(data.message || 'Your message could not be sent.'));
      }
    } catch (error) {
      console.error('Contact form network error:', error);
      setResult(errorMsg("We couldn't reach the server."));
    }
  };

  return (
    <>
      <form
        id="contact-form"
        className="contact-form__form"
        onSubmit={onSubmit}
      >
        <input type="hidden" name="from_name" value="AL/DC - Webform"></input>
        {/* Honeypot: hidden from real users; bots that fill it are silently
            rejected by Web3Forms. */}
        <input
          type="checkbox"
          name="botcheck"
          style={{ display: 'none' }}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" placeholder="Name" required />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <label htmlFor="project">Project</label>
        <input id="project" type="text" name="Project" placeholder="Project" />
        <label htmlFor="details">Project Details</label>
        <textarea
          id="details"
          name="details"
          placeholder="Project Details"
        ></textarea>
        <input className="btn btn-primary" type="submit" value={'Submit'} />
      </form>

      <span>{result}</span>
    </>
  );
};

export default ContactForm;
