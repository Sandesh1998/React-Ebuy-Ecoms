import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.components";
import Header from "./Components/header/header.componets";
import SigInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.components";

import { auth,createUserProfileDocument } from "./firbase/firebase.utils";
import './App.css';



class App extends React.Component{
  constructor(){
    super();

    this.state ={
      currentuser : null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if (userAuth){ // to store data in application
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>{
          this.setState({
            currentuser :{
              id : snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }
      this.setState({ currentuser : userAuth });
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth(); // close the subscription
  }

  render(){
    return (
      <div>
      <Header  currentuser={this.state.currentuser} />
        <Switch>
          <Route exact={true} path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SigInAndSignUpPage} />
        </Switch>
      </div>
  
    );
  }
  
}

export default App;