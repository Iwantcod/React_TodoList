import React, { useState } from 'react';
import './Home.css';
import Clock from './Clock';
import LoginForm from './LoginForm';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  return (
    <div className='Home'>
      <Clock />
      <LoginForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      
    </div>
  )
}

export default Home;
