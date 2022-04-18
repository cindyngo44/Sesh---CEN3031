import './App.css';
import axios from 'axios'
import { createContext, useState, useEffect } from 'react'
import About from  './components/Webpages/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Webpages/Home';
import Error from './components/Webpages/Error';
import LoginNow from './components/Webpages/LoginNow';
import Register from './components/Webpages/Register';
import ForgotPassword from './components/Webpages/ForgotPassword';
import ResetPassword from './components/Webpages/ResetPassword';
import Profile from './components/Webpages/Profile';
import MusicWidget from './components/SeshComponents/MusicWidget';
import Sesh from './components/Webpages/Sesh';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Leaderboard from './components/Webpages/Leaderboard';
export const UserContext = createContext()
library.add(faBars);

function App() {
  
  return (
    <div> 
     
      <Router> {/* Router lets page render different components based on address path */}
        
      <Routes> {/* Routes contained  for router  */}
       <Route path="/" element={<Home />} /> 
       <Route path="/*" element={<Error />} /> 
      <Route path="/About" element={<About/>} />
      <Route path="/Login" element={<LoginNow/>} />
      <Route path="/Register" element={<Register/>} />
      <Route path="/ForgotPassword" element={<ForgotPassword/>} />
      <Route path="/ResetPassword/:resetToken" element={<ResetPassword/>} />
      <Route path="/Sesh" element={<Sesh/>} />
      <Route path="/MusicWidget" element={<MusicWidget/>} />
      <Route path="/Profile" element={<Profile/>} />
      <Route path="/Leaderboard" element={<Leaderboard/>} />
      </Routes>

    </Router>  
   
    
    </div>
   );
}

export default App;