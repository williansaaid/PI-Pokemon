import './App.css';
import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import PokemonCreation from './components/PokemonCreation/PokemonCreation';

function App() {
  return (
    <div className="App">
      <Route exact path={'/'} component={LandingPage}/>
      <Route exact path={'/home'} component={Home}/>
      <Route exact path={'/create'} component={PokemonCreation}/>
    </div>
  );
}

export default App;
