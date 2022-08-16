import InfoBtn from '../InfoBtn/InfoBtn';
import './hero-content.scss';

const HeroContent = () => {
  const socialLinks = [
    {
      name: 'facebook',
      image: './facebook.svg',
      link: 'https://www.facebook.com/',
    },
    {
      name: 'instagram',
      image: './instagram.svg',
      link: 'https://www.instagram.com/',
    },
    {
      name: 'twitter',
      image: './twitter.svg',
      link: 'https://www.twitter.com/',
    },
  ];

  return (
    <div className="offer">
      <img className="offer__img" src="./Dancer.png" alt="dancer" />
      <div className="offer__content">
        <p className="offer__text">
          Enjoy each step along the way.
        </p>
        <h1 className="offer__title">
          Learn To Dance With Style
        </h1>
        <InfoBtn text="learn more" />
      </div>
      <div className="offer__socials">
        <p className="offer__socials-text">
          follow us
        </p>
        <ul className="socials">
          {
            socialLinks.map((el) => (
              <li className="socials__item" key={Math.random()}>
                <a href={el.link} className="socials__link">
                  <img src={el.image} alt={el.name} />
                </a>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default HeroContent;
