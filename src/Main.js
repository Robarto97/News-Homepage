import imageWebDesktop from "./images/image-web-3-desktop.jpg";
import imageWebMobile from "./images/image-web-3-mobile.jpg";

const Main = () => {
  return (
    <main>
      <div className="img-wrapper">
        <picture>
          <source media="(min-width: 376px)" srcSet={imageWebDesktop} />
          <img src={imageWebMobile} alt="Web" />
        </picture>
      </div>
      <h1>The Bright Future of Web 3.0?</h1>
      <p>
        We dive into the next evolution of the web that claims to put the power
        of the platforms back into the hands of the people. But is it really
        fulfilling its promise?
      </p>
      <button>Read More</button>
    </main>
  );
};

export default Main;
