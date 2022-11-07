import retro from "./images/image-retro-pcs.jpg";
import keyboard from "./images/image-top-laptops.jpg";
import joystick from "./images/image-gaming-growth.jpg";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <div className="wrapper">
            <img src={retro} alt="Retro PC" />
          </div>
          <div className="text">
            <h2>01</h2>
            <h3>
              <a href="/">Reviving Retro PCs</a>
            </h3>
            <p>What happens when old PCs are given modern upgrades?</p>
          </div>
        </li>
        <li>
          <div className="wrapper">
            <img src={keyboard} alt="Keyboard" />
          </div>
          <div className="text">
            <h2>02</h2>
            <h3>
              <a href="/">Top 10 Laptops of 2022</a>
            </h3>
            <p>Our best picks for various needs and budgets.</p>
          </div>
        </li>
        <li>
          <div className="wrapper">
            <img src={joystick} alt="Joystick" />
          </div>
          <div className="text">
            <h2>03</h2>
            <h3>
              <a href="/">The Growth of Gaming</a>
            </h3>
            <p>How the pandemic has sparked fresh opportunities.</p>
          </div>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
