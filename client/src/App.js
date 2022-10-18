import './App.css';
import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import PokemonCreation from './components/PokemonCreation/PokemonCreation';
import PokemonDetail from './components/PokemonDetail/PokemonDetail';

function App() {
  return (
    <div className="App">
      <Route exact path={'/'} component={LandingPage}/>
      <Route exact path={'/home'} component={Home}/>
      <Route path={'/pokemons/:id'} component={PokemonDetail}/>
      <Route exact path={'/create'} component={PokemonCreation}/>
    </div>
  );
}

export default App;
