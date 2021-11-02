import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <Router>
              <Switch>
                      <Route path="/" exact component={Home}></Route>
                      {/* Define All Your Routes Here */}
              </Switch>
      </Router>
    </>
  );
}

export default App;
