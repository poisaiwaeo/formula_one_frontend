import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
// import Teams from './components/teams/Teams';
import Drivers from './components/drivers/Drivers';
import Driver from './components/drivers/Driver';
import Soeg from './components/drivers/Soeg';
// import Calendar from './components/calendar/Calendar';
// import Cartechnical from './components/cartechnical/Cartechnical';
// import Fia from './components/fia/Fia';
import Footer from './components/footer/Footer';
import './App.scss';


function App() {
  return (

    <BrowserRouter>
      <div className="App">

        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/teams" component={Teams} /> */}
          <Route path="/drivers" component={Drivers} />
           <Route path="/driver/:driverid" component={Driver} />    
          <Route path="/soeg/:soegeord" component={Soeg} />
          {/* <Route path="/calendar" component={Calendar} /> */}
          {/* <Route path="/cartechnical" component={Cartechnical} /> */}
          {/* <Route path="/fia" component={Fia} /> */}
        </Switch>

        <Footer />

      </div>
    </BrowserRouter>

  );
}

export default App;
