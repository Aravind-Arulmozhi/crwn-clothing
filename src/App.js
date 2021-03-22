
import './App.css';
import HomePage from './pages/homepage/HomePage.Components';
import {Switch,Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.components';
import Header from './components/Header/header.Components';
import SignInandSignUpPage from './pages/sigin-inandsignup/signinandsignup.Components';
import React from 'react';
import {auth} from   './components/firebase/firebase.utilis';

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      currentUser :null
    };
  }
  
unsubscribeFromAuth =null;
  componentDidMount() {
   this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  ComponentDidUnMount(){
    this.unsubscribeFromAuth();


  }
  render(){
  return (
    
    <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/SignInandSignUp' component={SignInandSignUpPage} />
      </Switch>
    </div>
  );
}
}
export default App;
