
import './App.css';
import HomePage from './pages/homepage/HomePage.Components';
import {Switch,Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.components';
import Header from './components/Header/header.Components';
import SignInandSignUpPage from './pages/sigin-inandsignup/signinandsignup.Components';
import React from 'react';
import {auth,createUserProfileDocument} from   './components/firebase/firebase.utilis';

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      currentUser :null
    };
  }
  
unsubscribeFromAuth =null;
componentDidMount() {
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
        this.setState({
          currentUser: {
            id: snapShot.id,
            ...snapShot.data()
          }
        });

        console.log(this.state);
      });
    }

    this.setState({ currentUser: userAuth });
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
        <Route path='/signIn' component={SignInandSignUpPage} />
      </Switch>
    </div>
  );
}
}
export default App;
