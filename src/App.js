import styles from "./App.module.css";
import "./App.css";
import { NavBar } from "./components/NavBar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { Signup } from "./pages/Signup.js";
import "./api/axiosBasic.js";
import { Signin } from "./pages/Signin.js";
import Homepage from "./pages/Homepage.js";
import Createpostpage from "./pages/Createpostpage.js";
import Explorepage from "./pages/Explorepage.js";
import Pageinformation from "./pages/Pageinformation.js";
import Editpostpage from "./pages/Editpostpage.js";
import { Contact } from "./pages/Contactform.js";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/add-review" element={<Createpostpage />} />
        <Route exact path="/explore-new" element={<Explorepage />} />
        <Route exact path="/post/:id" element={<Pageinformation />} />
        <Route exact path="/post/:id/edit" element={<Editpostpage />} />
        <Route exact path="/Register" element={<Signup />} />
        <Route exact path="/Contact" element={<Contact />} />

        <Route path="*" element={<h1>Page not found!</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
