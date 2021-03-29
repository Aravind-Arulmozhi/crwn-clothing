
import './App.css';
import HomePage from './pages/homepage/HomePage.Components';
import {Switch,Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.components';
import Header from './components/Header/header.Components';
import SignInandSignUpPage from './pages/sigin-inandsignup/signinandsignup.Components';
import React from 'react';
import {auth,createUserProfileDocument} from   './components/firebase/firebase.utilis';
import {connect} from 'react-redux';
import {setCurrentUser } from './redux/user/user.actions';
class App extends React.Component {
 
  
unsubscribeFromAuth =null;
componentDidMount() {
  const {setCurrentUser } =this.props;
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
        setCurrentUser({
          currentUser: {
            id: snapShot.id,
            ...snapShot.data()
          }
        });

        console.log(this.state);
      });
    }

    setCurrentUser(  userAuth );
  });
}
  ComponentDidUnMount(){
    this.unsubscribeFromAuth();


  }
  render(){
  return (
    
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signIn' component={SignInandSignUpPage} />
      </Switch>
    </div>
  );
}
}
const mapDispatchToProps = dispatch =>({
setCurrentUser: user=>dispatch(setCurrentUser(user))
});
export default connect(null,mapDispatchToProps)(App);
