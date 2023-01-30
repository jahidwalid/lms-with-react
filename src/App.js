import './App.css';

import Hero from './components/Hero/Hero.js';
import Navbar from './components/Navbar/Navbar.js';
import Search from './components/search/search.js';

function App() {
  return (
    <div className="App">
      
    <Hero className="hero-container">
    <Navbar />
    </Hero>
    <Search/>
    
    </div>
  );
}

export default App;
