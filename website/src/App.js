import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Card from "./components/Card";
import GlobalStyles from "./components/styles/Global";
import CardImg from "./assets/card-image.png";

function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <Navbar />
        <Intro />
        <Card img={CardImg} alt="Components of a Design System" />
      </div>
    </>
  );
}

export default App;
