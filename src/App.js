import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Carosel from './pages/Carosel';
import HomePage from './home/Homepage';
import Footer from './food/Footer';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carosel/>
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
