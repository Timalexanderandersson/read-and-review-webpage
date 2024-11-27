import styles from"./App.module.css"
import './App.css';
import { NavBar } from './components/NavBar';
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom"
import { Signup } from "./pages/Signup.js"
import "./api/axiosBasic.js"
import { Signin } from "./pages/Signin.js";
import Homepage from "./pages/Homepage.js";


function App() {

  return (
    <div className={styles.App} >
      < NavBar />
      <Routes >
        <Route exact path="/" element={<Homepage/>} />
        <Route exact path="/signin" element={<Signin />}/>
        <Route exact path="/explore-new" element={<h1>explore page</h1>} />
        <Route exact path="/Register" element={<Signup/>}/>
        <Route path="*" element={<h1>Page not found!</h1>}/>
      </Routes >  
      < Footer />
    </div>
  );
}


export default App;
