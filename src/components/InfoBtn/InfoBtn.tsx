import './info-btn.scss';

type InfoBtnProps = {
  text: string,
}

const InfoBtn = ({ text }: InfoBtnProps) => (
  <div className="info">
    <p className="info__text">
      {text}
    </p>
    <button className="info__btn">
      <img src="./arrow-right.svg" alt="arrow right" />
    </button>
  </div>
);

export default InfoBtn;
