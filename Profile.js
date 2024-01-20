import React from "react"; 
import InputForm from "./InputForm";


const Profile = (props) => {
  const onClickBtn = () => {
    localStorage.removeItem('nickname');
    props.setIsLoggedIn(false);
  }

  return (
    <>
      <p>
        <h1>
          {props.nickname}'s Todo List
        </h1>
        <button onClick={onClickBtn}>LogOut</button>
      </p>
      <InputForm />
    </>
  )
}


export default Profile;