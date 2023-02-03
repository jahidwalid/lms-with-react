import './App.css';
import Footer from './components/Footer/Footer';

import Hero from './components/Hero/Hero.js';
import Navbar from './components/Navbar/Navbar.js';
import Search from './components/search/search.js';
// import Courseslider from './components/courseslider/Courseslider.js';
// import Newcourse from './components/Newcourse/Newcourse.js';
// import CourseItem from './components/CourseItem/CourseItem';
import Titlecourse from './components/Title/Titlecourse.js';

function App() {
  return (
    <div className="App">
      
    <Hero className="hero-container">
    <Navbar />
    </Hero>
    <Search/>
    {/* <Courseslider/>
    <Newcourse/> */}

    <Titlecourse title='HIGHEST SELLING COURSES'/>
    <Titlecourse title="INSTRUCTOR'S COURSE FEED"/>
    
    <Footer/>
    
    </div>
  );
}

export default App;
