/* Contact Form */
import { useState } from 'react';

const ContactForm = () => {
  // window.onload = function () {
  //   // Reset the form fields when the page loads
  //   document.getElementById('contact-form').reset();
  // };

  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    // setResult('Sending....');
    const sendingMsg = (
      <div className="form__result form-sending">
        <h4>Sending...</h4>
      </div>
    );
    setResult(sendingMsg);
    const formData = new FormData(event.target);

    formData.append('access_key', 'dc706c94-1fb0-465d-9306-9bc15ee5ac23');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    const successMsg = (
      <div className="form__result form-sent">
        <h4>Form submitted successfully!</h4>
        <p>Thanks for reaching out! Our team will reach out within 48 hours.</p>
      </div>
    );

    if (data.success) {
      // setResult('Form Submitted Successfully!');
      setResult(successMsg);
      event.target.reset();
    } else {
      console.log('Error', data);
      setResult(data.message);
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
        <label htmlFor="firstName" aria-hidden>
          Name
        </label>
        <input type="text" name="name" placeholder="Name" />
        <label htmlFor="email" aria-hidden>
          Email
        </label>
        <input type="email" name="email" placeholder="Email" />
        <label htmlFor="subject" aria-hidden>
          Project
        </label>
        <input type="text" name="Project" placeholder="Project" />
        <label htmlFor="message" aria-hidden>
          Project Details
        </label>
        <textarea name="details" placeholder="Project Details"></textarea>
        <input className="btn btn-secondary" type="submit" value={'Submit'} />
      </form>

      <span>{result}</span>
    </>
  );
};

export default ContactForm;
