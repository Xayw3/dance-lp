import './mobile-menu.scss';

type MobileMenuProps = {
  handleClick: () => void,
}

const MobileMenu = ({ handleClick }: MobileMenuProps) => {
  const navMenu = ['about', 'blog', 'contact', 'register'];

  return (
    <div className="mobile-menu">
      <button className="mobile-menu__close" onClick={handleClick}>
        <img src="./plus.svg" alt="close button" />
      </button>
      <p className="mobile-logo">dance</p>
      <nav className="mobile-menu__navigation">
        <ul className="mobile-menu__list">
          {
            navMenu.map((el) => (
              <li className="mobile-menu__item" key={Math.random()}>
                <a href="/" className="mobile-menu__link">{el}</a>
              </li>
            ))
          }
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
