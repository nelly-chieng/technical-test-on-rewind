import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserContext from './UserContext';
import Layout from './Layout';
import Home from './components/Home';
import VideoPage from './components/VideoPage';
import './App.css';
import Testimoniales from './components/Testimoniales';
import Funzone from './components/Funzone';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider>
          <Layout />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/funzone" component={Funzone} />
            <Route path="/testimoniales" component={Testimoniales} />
            <Route path="/video/:id" component={VideoPage} />
          </Switch>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
