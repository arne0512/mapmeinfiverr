import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./view/Search/Search";
import Map from './view/Map/Map';
import Profile from './view/Profile/Profile';

function App() {
  return (
    <Router>
      <div>
        <Switch>
        <Route path="/" exact render={() => <Search />} />
        <Route path="/map" exact render={() => <Map />} />
        <Route path="/profile" exact render={() => <Profile />} />
        </Switch>
      </div>

    </Router>

  );
}

export default App;
