import imageWeb from "./images/image-web-3-desktop.jpg";
const Main = () => {
  return (
    <main>
      <div className="img-wrapper">
        <img src={imageWeb} alt="" />
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
