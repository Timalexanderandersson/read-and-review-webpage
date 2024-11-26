import styles from"./App.module.css"
import './App.css';
import { NavBar } from './components/NavBar';
import Footer from "./components/Footer";
import {Route, Routes, useNavigate } from "react-router-dom"
import { Signup } from "./pages/Signup.js"
import "./api/axiosBasic.js"
import { Signin } from "./pages/Signin.js";
import { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";

export const CurrentUserInfo = createContext();
export const SetCurrentUserInfo = createContext();

function App() {
const [nowUser, setnowUser] = useState(null);

const collectInfo = async () => {
  try{
    const { data } = await axios.get('/dj-rest-auth/user/')
    setnowUser(data.user)
  }catch(err) {
    console.log(err)
  }
}

useEffect(() => {
  collectInfo();
},[]);


  return (
    <CurrentUserInfo.Provider value={nowUser}>
      <SetCurrentUserInfo.Provider value={setnowUser}>
    <div className={styles.App} >
      < NavBar />
      <Routes >
        <Route exact path="/" element={<h1>Home</h1>}/>
        <Route exact path="/signin" element={<Signin />}/>
        <Route exact path="/explore-new" element={<h1>explore page</h1>} />
        <Route exact path="/Register" element={<Signup/>}/>
        <Route path="*" element={<h1>Page not found!</h1>}/>
      </Routes >  
      < Footer />
    </div>
    </SetCurrentUserInfo.Provider>
    </CurrentUserInfo.Provider>
  );
}


export default App;
