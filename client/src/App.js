import React from 'react';
// import Menu from './pages/Menu'
import Landing from './pages/Landing'
import PaymentForm from './components/PaymentForm'
import ReviewForm from './components/ReviewForm'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Menu from './pages/Menu'
import Privacy from './pages/PrivacyP'
import {
  BrowserRouter as Router,
  Route,
  Switch

} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div>
        <Switch>

{/* LANDING PAGE */}

          <Route exact path="/">
            <Landing/>
          </Route>

{/* HOME PAGE */}

          <Route path="/home">
            <Home/>
          </Route>

{/* ABOUT US  */}

          <Route path="/about">
            <About/>
          </Route>

{/* CONTACT US */}

          <Route path="/contact">
            <Contact />
          </Route>

{/* PAYMENT */}

          <Route path="/payment">
          <Navbar/>
            <PaymentForm />
          </Route>

{/* REVIEW */}

          <Route path="/review">
            <ReviewForm />
          </Route>

{/* MENU */}

          <Route path="/menu">
            <Menu />
          </Route>

{/* PRIVACY POLICY */}

          <Route path="/privacy">
            <Privacy />
          </Route>

{/* END */}

        </Switch>
      </div>
    </Router>
  )
}

export default App