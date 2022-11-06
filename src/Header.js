import logo from './images/logo.svg';

const Header = () => {
  return (
    <header>
      <div className="img-wrapper">
        <img src={logo} alt="Logo" id="logo" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">New</a>
          </li>
          <li>
            <a href="/">Popular</a>
          </li>
          <li>
            <a href="/">Trending</a>
          </li>
          <li>
            <a href="/">Categories</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
