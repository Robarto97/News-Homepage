import Aside from "./Aside";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import "./styles.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Aside />
      <Footer />
    </div>
  );
}

export default App;
