import './App.css';
import NavBar from './Components/Navbar/Navbar';
import {Switch, Route } from 'react-router-dom';
import Work from './Pages/Work';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/work" component={Work} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
