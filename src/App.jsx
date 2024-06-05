import { Footer } from "./components/Footer";
import { LeaderBoard } from "./components/LeaderBoard";
import { Subs } from "./components/Subs";
import { Perks } from "./components/Perks";
import HomePage from "./HomePage";
import "./App.css";

function App() {
  return (
    <>
      <HomePage />
      <Perks />
      <Subs />
      <LeaderBoard />
      <Footer />
    </>
  );
}

export default App;
