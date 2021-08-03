import React, { Suspense } from 'react';
import Header from '../component/Header'
import Footer from '../component/Footer'
import '../css/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import HotelDetails from "./hotelDetails";
import StayDates from "./dates";
import Confirmation from "./confirmation";
import Loader from '../component/Loader'

const Landing = React.lazy(() => import('./landing'));

function App() {
  return (
    <div className="App">

      <div className="page-wrapper">
        <section className="home_section">
          <div className="imgwrapper">
            <Header />

            <BrowserRouter>
              <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/Signup" component={Signup} />
                <Route exact path="/Home">
                  <Suspense fallback={<Loader/>}>
                    <Landing />
                  </Suspense>
                </Route>
                <Route path="/hotelDetails">
                  <HotelDetails />
                </Route>
                <Route path="/PickDate">
                  <StayDates />
                </Route>
                <Route path="/confirmation">
                  <Confirmation />
                </Route>
              </Switch>
            </BrowserRouter>

            <Footer />
          </div>
        </section>
      </div>

    </div>
  );
}

export default App;
