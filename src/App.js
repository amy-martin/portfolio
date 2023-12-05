import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MarusCrochet } from './components/projects/MarusCrochet';
import { AlfredosIronwork } from './components/projects/AlfredosIronwork';
import { RedditClient } from './components/projects/RedditClient';
import { HomePage } from './components/homePage/HomePage';
import { ContactNav } from './components/navbar/ContactNav';
import { AboutMe } from './components/homePage/AboutMe';
import { Projects } from './components/projects/Projects';
import { Sidebar } from './components/navbar/Sidebar';
import { Nav } from './components/navbar/Nav';

const App = () => {
  return (
    <Router>
      <header>
          <Nav />
      </header>
      <main>
        <Sidebar />
        <Routes>
          <Route path="/portfolio" element={<HomePage />}/>
          <Route path="/portfolio/about-me" element ={<AboutMe />} />
          <Route path="/portfolio/projects"element={<Projects/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
