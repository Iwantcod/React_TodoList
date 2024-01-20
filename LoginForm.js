import React, { useEffect, useState } from 'react';
import Profile from './Profile';


const LoginForm = (props) => {
  const [nickName, setNickName] = useState('');

  const setIsLoggedIn = props.setIsLoggedIn;

  
  useEffect(() => {
    if (localStorage.getItem('nickname') !== null) {
    
    setNickName(localStorage.getItem('nickname'));
    setIsLoggedIn(true);
  }}, []);

  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('nickname', nickName);
    setIsLoggedIn(true);
  }
  let content;

  if (props.isLoggedIn) {
    content = <Profile nickname={nickName} setIsLoggedIn={setIsLoggedIn}/>;
  } else {
    content = 
    <>
      <h1>What your Name?</h1>
      <form onSubmit={onSubmit}>
        <input value={nickName} onChange={onChangeNickName} required autoFocus/>
      </form>
    </>;
  }
  return (
    <div>
      {content}
    </div>
  );
}


export default LoginForm;