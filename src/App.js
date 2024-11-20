import styles from"./App.module.css"
import './App.css';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <div className={styles.App} >
      < NavBar />
    </div>
  );
}

export default App;
