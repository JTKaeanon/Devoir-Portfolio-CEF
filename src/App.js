import Navbar from "./components/Navbar/Navbar";
import Main from './components/Main/Main';
import FooterNav from "./components/FooterNav/FooterNav";
import './assets/css/App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content-wrap">
        <Main />
      </div>
      <FooterNav />
    </div>
  );
}

export default App;
