import './section-title.scss';

type SectionTitleProps = {
  text: string,
}

const SectionTitle = ({ text }: SectionTitleProps) => (
  <h2 className="section-title">{text}</h2>
);

export default SectionTitle;
