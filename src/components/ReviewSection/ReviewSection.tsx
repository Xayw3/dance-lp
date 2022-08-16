/* eslint-disable max-len */
import './review-section.scss';

const ReviewSection = () => {
  const reviews = [
    {
      name: 'Robert Lopez',
      profession: 'Broadway Dancer',
      text: "This was one of the best learning experiences I've ever had. The teachers were friendly and gave me great advice.",
      stars: ['./star-blue.svg', './star-blue.svg', './star-blue.svg', './star-blue.svg', './star-blue.svg'],
      image: './client-3.png',
    },
    {
      name: 'Allen King',
      profession: 'Choregrapher',
      text: 'I’ve learned a Variety of new things that helped me a lot in my career as a choregrapher.',
      stars: ['./star-blue.svg', './star-blue.svg', './star-blue.svg', './star-blue.svg', './star-blue.svg'],
      image: './client-2.png',
    },
    {
      name: 'Alexandra laurent',
      profession: 'Dance Instructor',
      text: 'Great learning platform for those who are starting out as a dancer.',
      stars: ['./star-blue.svg', './star-blue.svg', './star-blue.svg', './star-blue.svg', './star-blue.svg'],
      image: './client-1.png',
    },
  ];

  return (
    <section className="reviews">
      <div className="container">
        <h3 className="reviews__title">
          Testimonials
        </h3>
        <p className="reviews__subtitle">
          What our clients have to say
        </p>
        <div className="reviews-list">
          {
            reviews.map(({
              name, profession, text, stars, image,
            }) => (
              <div className="reviews-list__item" key={Math.random()}>
                <img className="reviews-list__img" src={image} alt={name} />
                <h5 className="reviews-list__title">
                  {name}
                </h5>
                <p className="reviews-list__prof">
                  {profession}
                </p>
                <p className="reviews-list__text">
                  {text}
                </p>
                <div className="reviews-list__rating">
                  {
                    stars.map((el) => (
                      <img src={el} alt="star" key={Math.random()} />
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
