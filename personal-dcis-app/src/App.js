import { Route, Switch } from 'react-router-dom';
import './App.css';
import Time from './pages/Time';
import Layout from './components/Layout';
import Services from './pages/Services';
import Home from './pages/Home';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>

        <Route path='/time'>
          <Time />
        </Route>

        <Route path='/services'>
          <Services />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;