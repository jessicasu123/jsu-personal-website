import './App.css';
import NavBar from './Components/Navbar/Navbar';
import {Switch, Route } from 'react-router-dom';
import Work from './Pages/Work/Work';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import WorkDetail from './Pages/WorkDetail/WorkDetail';
import ProjectDetail from './Pages/ProjectDetail/ProjectDetail';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/work" exact component={Work} />
        <Route path="/work/project/:id" exact component={ProjectDetail} />
        <Route path="/work/industry/:id" exact component={WorkDetail} />
        <Route path="/" exact component={Home} />
        {/* <Route
          path="/resume"
          component={() => {
            window.location.href =
              "https://drive.google.com/file/d/1v4p3aDazqBGM4G2W-bpIpVEu25Tf5NFE/view?usp=sharing";
            return null;
          }}
        /> */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
