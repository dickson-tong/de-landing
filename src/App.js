import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';

const MenuItem = (props) => {
  //replace with link
  const {location} = props;
  return (
    <Link to={location} style={{marginRight: '12px', color: 'white'}}>
      {props.children}
    </Link>
  );
}

const MidSection = (props) => {
  const {dir, picture, header, text, button} = props;
  return (
    <section style={{justifyContent: 'space-between', backgroundColor: 'white', padding: '63px 38px', display: 'flex', flexDirection: dir === 'left' ? 'row' : 'row-reverse'}}>
      {picture}
      <div style={{width: '400px'}}>
        <div style={{width: '300px', marginBottom: '16px', fontSize: '45px', fontWeight: 500, lineHeight: '55px', color: 'black'}}>{header}</div>
        <div style={{marginBottom: '16px', fontSize: '16px', fontWeight: 300, color: 'black'}}>{text}</div>
        <button>{button.text}</button>
      </div>
    </section>
  );
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/earn">
          <Home />
        </Route>
        <Route exact path="/advertise">
          <Advertise />
        </Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Switch>
    </Router>
  );
}

const Home = () => {
  return (
    <div style={{height: '100%'}}>
      <div style={{
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundImage: 'url("https://media.discordapp.net/attachments/718995649550352689/719031866082197544/city-meal-food-produce-usa-market-544027-pxhere.com_2.jpg?width=1404&height=936")',
        height: '450px',
        backgroundColor: 'blue',
        padding: '0px 24px',
        display: 'flex',
        flexDirection:  'column'
      }}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100px'}}>
          <div style={{color: 'white', fontSize: '25px', fontWeight: 500, lineHeight: '36px'}}>Placeholder</div>
        </div>
        <div style={{width: '450px', display: 'flex', justifyContent: 'center', flexDirection: 'column', flexGrow: 1}}>
          <div style={{color: 'white', fontSize: '45px', fontWeight: 500, marginBottom: '32px'}}>Make your retail space work for you.</div>
          <div style={{color: 'white', textDecoration: 'underline'}}>Learn More</div>
        </div>
      </div>
      <section>
        <MidSection
          header={'Advertise with us to increase your revenue'}
          text={'Increase your business revenue by placing digital advertisements in your retail space, with no disruption.'}
          button={{text: 'Join Us'}}
          dir={'left'}
          picture={<img style={{width: '45%', height: 'auto'}} src="https://media.discordapp.net/attachments/718995649550352689/719219692417581056/wallpaperflare.com_wallpaper_1.jpg?width=936&height=936" />}
        />
        <MidSection
          header={'No work involved, just a bit of your space.'}
          text={'We will source advertisements and parts necessary to display ads in your space. Earn up to 80% of the ad revenue.'}
          button={{text: 'Learn More'}}
          dir={'right'}
          picture={<img style={{width: '45%', height: 'auto'}} src="https://cdn.discordapp.com/attachments/718995649550352689/719220796039626752/Untitled_3.jpg" />}
        />
      </section>
      <section>
        pricing
      </section>
      <footer style={{padding: '40px', display: 'flex', justifyContent: 'space-between', backgroundColor: '#e1e3ea'}}>
        <div>Slogan</div>
        <div>
          <div>About Us</div>
          <div>Contact Us</div>
          <div>Get Started</div>
          <div>Social Media Placeholder</div>
        </div>
      </footer>
    </div>
  );
}

const Advertise = () => {
  return (
    <div>About Us</div>
  );
}

export default App;
