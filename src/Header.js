import logo from "./images/logo.svg";

const Header = () => {
  const handleClick = () => {
    const layer = document.querySelector("#layer");
    const nav = document.querySelector("nav");
    const menu = document.querySelector("#menu");
    layer.classList.toggle("show");
    nav.classList.toggle("show");
    menu.classList.toggle("change");
  };

  return (
    <header>
      <div className="img-wrapper">
        <img src={logo} alt="Logo" id="logo" />
      </div>
      <div id="layer"></div>
      <div id="menu" onClick={handleClick}></div>
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
