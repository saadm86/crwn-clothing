import './App.css';
import {useState, useEffect} from 'react'
import HomePage from './pages/homepage/homepage.component'
import {Switch, Route} from 'react-router-dom'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component'
import {auth} from './firebase/firebase.utils'

function App() {
  
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(user => {
    setCurrentUser(user)}) 
    return () => {
      unsubscribeFromAuth()
    }
  }, [])
console.log(currentUser)
  return (
    <div className="App">
      <Header currentUser={currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route path='/signIn' component={SignInSignUp}/>
      </Switch>
    </div> 
  );
}

export default App;
