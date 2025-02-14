import React from 'react'
import {About,Footer,Skills,Header,Testimonial,Work} from './container'
import {Navbar} from './components';
import './App.scss';
const App = () => {
  return (
    <div className='App'>
     <Navbar/> 
        <Header/>
        <About/>
        <Work/>
        <Skills/>
        <Footer/>
    </div>
  );
}

export default App;