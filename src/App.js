import "./App.css";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Info from "./components/info";
import Menu from "./components/menu";
import Nav from "./components/nav";
import Newsfeed from "./components/newsfeed";
import Statistik from "./components/statistik";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Info />
      <Newsfeed />
      <Menu />
      <Statistik />
      <Footer />
    </>
  );
}

export default App;
