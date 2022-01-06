// React part
import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';

// Pages
import HomePage from './pages/homepage/HomePage';
import ShopPage from './components/shop/Shop'; 
import Header from './components/header/Header';
import { SignInAndSignUp } from './components/sign-in-and-sign-up/SignInAndSignUp';

// Authentication
import { auth } from './firebase/firebase.utils';




class App extends Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null

  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged( user => {
      this.setState({currentUser: user})
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return(
    <div className="App">
    <Header currentUser={this.state.currentUser}/>
    <Routes>
      <Route exact path='/' element={<HomePage/>}/>
      <Route exact path='/shop' element={ <ShopPage/>} />
      <Route exact path='/sign-in' element={ <SignInAndSignUp />} />
    </Routes>
    </div>
    );
  }
}



export default App;
