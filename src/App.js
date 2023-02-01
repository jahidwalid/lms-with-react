import './App.css';

import Hero from './components/Hero/Hero.js';
import Navbar from './components/Navbar/Navbar.js';
import Search from './components/search/search.js';
import Courseslider from './components/courseslider/Courseslider.js';
import CourseItem from './components/CourseItem/CourseItem.js';

function App() {
  return (
    <div className="App">
      
    <Hero className="hero-container">
    <Navbar />
    </Hero>
    <Search/>
    <Courseslider/>
    <CourseItem/>
    
    </div>
  );
}

export default App;
