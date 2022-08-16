import './nav-bar.scss';

const NavBar = () => {
  const menu = ['about', 'blog', 'contact', 'register'];

  return (
    <nav className="menu">
      <ul className="menu__list">
        {
          menu.map((el) => (
            <li className="menu__item" key={Math.random()}>
              <a href={el} className="menu__link">
                {el}
              </a>
            </li>
          ))
        }
      </ul>
    </nav>
  );
};

export default NavBar;
