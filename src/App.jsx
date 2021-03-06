import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Layout from './Layout';
import Home from './components/Home';
import VideoPage from './components/VideoPage';
import Testimoniales from './components/Testimoniales';
import Funzone from './components/Funzone';
import './App.css';

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_API_URL,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'x-account-key': process.env.REACT_APP_KEY,
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ApolloProvider client={client}>
          <Layout />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/funzone" component={Funzone} />
            <Route path="/testimoniales" component={Testimoniales} />
            <Route path="/video/:id" component={VideoPage} />
          </Switch>
        </ApolloProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
