import SectionTitle from '../SectionTitle/SectionTitle';
import './classes-section.scss';

const ClassesSection = () => {
  const danceClasses = [
    {
      id: '1',
      name: 'Classical Ballet',
      level: 'Beginner',
      fees: '$54/hr',
      image: './classes-1.png',
      stars: ['./star.svg', './star.svg', './star.svg', './star.svg', './star.svg'],
    },
    {
      id: '2',
      name: 'Street dancing',
      level: 'Intermediate',
      fees: '$44/hr',
      image: './classes-2.png',
      stars: ['./star.svg', './star.svg', './star.svg', './star.svg', './star.svg'],
    },
    {
      id: '3',
      name: 'Contemporary Dancing',
      level: 'Beginner',
      fees: '$59/hr',
      image: './classes-3.png',
      stars: ['./star.svg', './star.svg', './star.svg', './star.svg', './star.svg'],
    },
    {
      id: '4',
      name: 'Ballroom Dancing',
      level: 'Beginner',
      fees: '$78/hr',
      image: './classes-4.png',
      stars: ['./star.svg', './star.svg', './star.svg', './star.svg', './star.svg'],
    },
  ];

  return (
    <section className="classes">
      <div className="container">
        <SectionTitle text="our classes" />
        <div className="classes-cards">
          {
            danceClasses.map(({
              name, level, fees, image, stars, id,
            }) => (
              <div className="classes-card" key={id}>
                <img className={`classes-card__image classes-card__image_${id}`} src={image} alt={name} />
                <div className="classes-card__content">
                  <h5 className="classes-title">
                    {name}
                  </h5>
                  <p className="classes-level">
                    {level}
                  </p>
                  <div className="classes-rating">
                    {
                  stars.map((el) => (
                    <img src={el} alt="star" key={Math.random()} />
                  ))
                  }
                  </div>
                  <div className="classes-fees">
                    <p className="classes-fees_text">
                      Fees
                    </p>
                    <p className="classes-fees_price">
                      {fees}
                    </p>
                  </div>
                  <button className="classes-btn">
                    enroll now
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;
