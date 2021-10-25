import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import GlobalStyles from "./components/styles/Global";

function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <Navbar />
        <Intro />
      </div>
    </>
  );
}

export default App;
