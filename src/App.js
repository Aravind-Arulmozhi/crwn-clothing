
import './App.css';
import HomePage from './pages/homepage/HomePage.Components';
import {Switch,Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.components';
import Header from './components/Header/header.Components';

function App() {
  return (
    
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}
export default App;
