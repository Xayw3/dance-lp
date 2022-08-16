import InfoBtn from '../InfoBtn/InfoBtn';
import SectionTitle from '../SectionTitle/SectionTitle';
import './about-section.scss';

const AboutSection = () => (
  <section className="about">
    <div className="container">
      <div className="about__wrapper">
        <div className="about__content">
          <SectionTitle text="everything about us" />
          <p className="about__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </p>
          <InfoBtn text="read more" />
        </div>
        <img src="./about-img.png" alt="dancer" className="about__img" />
      </div>
    </div>
  </section>
);

export default AboutSection;
