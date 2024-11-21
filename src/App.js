import styles from"./App.module.css"
import './App.css';
import { NavBar } from './components/NavBar';
import Footer from "./components/Footer";
import {Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className={styles.App} >
      < NavBar />
      <Routes >
        <Route exact path="/" element={<h1>Home</h1>}/>
        <Route exact path="/signin" element={<h1>Sign in</h1>}/>
        <Route exact path="/explore-new" element={<h1>explore new</h1>}/>
        <Route exact path="/Register" element={<h1>register</h1>}/>
        <Route path="*" element={<h1>Page not found!</h1>}/>
      </Routes >  
      < Footer />
    
    </div>
  );
}


export default App;
