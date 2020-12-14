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
        <Route path="/work/project/:id" exact>
          <ProjectDetail />
        </Route>
        <Route path="/work/industry/:id" exact>
            <WorkDetail />
        </Route>
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
