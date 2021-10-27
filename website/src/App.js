import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Card from "./components/Card";
import GlobalStyles from "./components/styles/Global";
import CardImg from "./assets/card-image.png";

// const flightArrowRight =
//   require("@hashicorp/flight-icons/svg/arrow-right-16.svg").default;

function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <Navbar />
        {/* <img src={flightArrowRight} /> */}
        <Intro />
        <Card img={CardImg} alt="Components of a Design System" />
      </div>
    </>
  );
}

export default App;
