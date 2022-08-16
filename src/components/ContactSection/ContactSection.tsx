/* eslint-disable max-len */
import ContactForm from '../ContactForm/ContactForm';
import SectionTitle from '../SectionTitle/SectionTitle';
import './contact-section.scss';

const ContactSection = () => {
  const contacts = [
    {
      icon: './phone.svg',
      text: '+202 555 0789',
      link: 'tel:+2025550789',
    },
    {
      icon: './email.svg',
      text: 'dance@email.com',
      link: 'mailto:dance@email.com',
    },
    {
      icon: './location.svg',
      text: '218 Pegg Rd, Morris, New York(NY), 13808 ',
      link: 'https://www.google.com/maps/place/218+Pegg+Rd,+Morris,+NY+13808,+%D0%A1%D0%A8%D0%90/@42.5534969,-75.2172127,17z/data=!3m1!4b1!4m5!3m4!1s0x89dbecf0ef9c34cb:0x9af05c660834e2b4!8m2!3d42.553493!4d-75.215024',
    },
  ];

  return (
    <section className="contacts">
      <div className="container">
        <div className="contacts__wrapper">
          <div className="contacts-info">
            <h3 className="contacts-info__title">
              Contact Information
            </h3>
            <ul className="contacts-list">
              {
                contacts.map(({ icon, text, link }) => (
                  <li className="contacts-list__item" key={Math.random()}>
                    <img src={icon} alt="icon" />
                    <a target="blank" href={link} className="contacts-list__link">
                      {text}
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="contacts-form">
            <SectionTitle text="Contact Us" />
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
