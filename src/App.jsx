import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Jobs from "./components/Jobs";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Jobs />
      <Footer />
    </div>
  );
};

export default App;
