import { useState } from 'react';
import './contact-form.scss';

const ContactForm = () => {
  const formData = {
    name: '',
    email: '',
    message: '',
  };

  const [error, setError] = useState({ name: false, email: false, message: false });
  const [data, setData] = useState(formData);
  const [errorMessage, setErrorMessage] = useState({ name: '', email: '', message: '' });

  const formValidation = () => {
    const includeNumber = /[0-9]/;

    if (!data.name) {
      setError({ name: true, email: false, message: false });
      setErrorMessage({ ...errorMessage, name: 'This field is mandsory' });
    } else if (includeNumber.test(data.name)) {
      setErrorMessage({ ...errorMessage, name: 'Only letters' });
      setError({ name: true, email: false, message: false });
    } else if (!data.email) {
      setErrorMessage({ ...errorMessage, email: 'Email is required' });
      setError({ name: false, email: true, message: false });
    } else if (!data.email.includes('@')) {
      setErrorMessage({ ...errorMessage, email: 'The email adress must include "@"' });
      setError({ name: false, email: true, message: false });
    } else if (!data.message) {
      setErrorMessage({ ...errorMessage, message: 'Please write message' });
      setError({ name: false, email: false, message: true });
    } else {
      setError({ name: false, email: false, message: false });
      setErrorMessage({ name: '', email: '', message: '' });
      setData(formData);
    }
  };

  return (
    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="contact-form-name">
        <input
          value={data.name}
          onChange={(e) => { setData({ ...data, name: e.target.value }); }}
          id="contact-form-name"
          type="text"
          placeholder="Name"
          className="contact-form__input"
        />
        {
          error.name === true ? <p>{errorMessage.name}</p> : null
        }
      </label>
      <label htmlFor="contact-form-email">
        <input
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          id="contact-form-email"
          type="email"
          placeholder="Email"
          className="contact-form__input"
        />
        {
          error.email === true ? <p>{errorMessage.email}</p> : null
        }
      </label>
      <label htmlFor="contact-form-message">
        <textarea
          value={data.message}
          onChange={(e) => setData({ ...data, message: e.target.value })}
          placeholder="Message"
          className="contact-form__input contact-form__textaera"
          id="contact-form-message"
        />
        {
          error.message === true ? <p>{errorMessage.message}</p> : null
        }
      </label>
      <button
        type="button"
        onClick={() => { formValidation(); }}
        className="contact-form__btn"
      >
        submit
      </button>
    </form>
  );
};

export default ContactForm;
