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
    <section style={{justifyContent: 'space-between', backgroundColor: '#bfb1c4', padding: '63px 38px', display: 'flex', flexDirection: dir === 'left' ? 'row' : 'row-reverse'}}>
      {picture}
      <div>
        <div style={{width: '300px', marginBottom: '16px', fontSize: '45px', fontWeight: 500, lineHeight: '55px', color: 'white'}}>{header}</div>
        <div style={{marginBottom: '16px', fontSize: '16px', fontWeight: 300, color: 'white'}}>{text}</div>
        <button>{button.text}</button>
      </div>
    </section>
  );
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <AboutUs />
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
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <MenuItem location="/earn">Earn</MenuItem>
            <MenuItem location="/advertise">Advertise</MenuItem>
            <MenuItem location="/about">About</MenuItem>
            <MenuItem location="/contact">Contact</MenuItem>
            <button style={{fontWeight: 500, padding: '14px 24px', backgroundColor: 'white', border: 'none'}}>Get Started</button>
          </div>
        </div>
        <div style={{width: '550px', display: 'flex', justifyContent: 'center', flexDirection: 'column', flexGrow: 1}}>
          <div style={{color: 'white', fontSize: '45px', fontWeight: 500, marginBottom: '32px'}}>Find your happiness and learn to put it first.</div>
          <div style={{color: 'white', textDecoration: 'underline'}}>Contact Us</div>
        </div>
      </div>
      <section>
        <MidSection
          header={'hello'}
          text={'hello2'}
          button={{text: 'boom'}}
          dir={'left'}
          picture={<img style={{width: '330px', height: '330px'}} src="https://images.squarespace-cdn.com/content/v1/5ced8e1d5fd4c700018dd761/1561907800739-KPLG47SEYE493UI2O24B/ke17ZwdGBToddI8pDm48kFJUfUdkPAb8vZTcpB4safF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UWZdAke8JpxKFTaeg6hrNiTtIumxCxifilQCW2fkmb0_cxz3uI1UGDvEQ2oJMxabyw/Stocksy_txp824ffa5crXt000_Large_844920.jpg?format=1500w" />}
        />
        <MidSection
          header={'hello'}
          text={'hello2'}
          button={{text: 'boom'}}
          dir={'right'}
          picture={<img style={{width: '330px', height: '330px'}} src="https://images.squarespace-cdn.com/content/v1/5ced8e1d5fd4c700018dd761/1561907800739-KPLG47SEYE493UI2O24B/ke17ZwdGBToddI8pDm48kFJUfUdkPAb8vZTcpB4safF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UWZdAke8JpxKFTaeg6hrNiTtIumxCxifilQCW2fkmb0_cxz3uI1UGDvEQ2oJMxabyw/Stocksy_txp824ffa5crXt000_Large_844920.jpg?format=1500w" />}
        />
      </section>
      <footer style={{padding: '40px', display: 'flex', justifyContent: 'space-between'}}>
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

const AboutUs = () => {
  return (
    <div>About Us</div>
  );
}

export default App;
