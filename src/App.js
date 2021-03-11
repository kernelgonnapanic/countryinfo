// import './App.css';
import './main.scss'
import Heading from "./Components/Heading/Heading";
import Menu from "./Components/Menu/Menu";
import CountryList from "./Components/CountryList/CountryList"
import Country from "./Components/Country/Country";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
        <Switch>
          <Route path="/country/:name">
            <Country />
          </Route>
          <Route exact path="/">
            <Heading />
            <Menu />
            <CountryList />
          </Route>
        </Switch>
      </Router>
     
      
    </div>
  );
}

export default App;
