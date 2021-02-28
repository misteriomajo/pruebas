import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//REDUX
import { Provider } from 'react-redux';
import store from './store';
import Home from "./component/home/Home";

function App() {
  return (
    <Provider store={store}>
        <Router>
              <Switch>
                  <Route exact path="/" component={Home} />
            </Switch>
      </Router>
    </Provider>
  );
}

export default App;
