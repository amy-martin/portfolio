import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MarusCrochet } from './components/projects/MarusCrochet';
import { AlfredosIronwork } from './components/projects/AlfredosIronwork';
import { RedditClient } from './components/projects/RedditClient';
import { HomePage } from './components/homePage/HomePage';

const App = () => {
  return (
    <Router>
      <header>

      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/marus-crochet" element={<MarusCrochet />} />
          <Route path="/alfredos-ironwork" element={<AlfredosIronwork />} />
          <Route path="/reddit-client" element={<RedditClient />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
