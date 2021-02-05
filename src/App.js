import React from 'react';
import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import Content from './components/Content.jsx'
import Footer from './components/Footer.jsx'
import Clock from './components/Clock'



let App = () => {
  return(
    <div className = 'app-wrapper'>
      <Clock />
      <Header />
      <Nav />
      <Content />
      <Footer />
    </div>
  );
}

export default App;