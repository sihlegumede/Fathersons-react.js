import React from 'react';
import './App.css';

// import {Article, Brand, Feature, Navbar} from './components';
import {Blog, Footer, Header} from './containers';

const App = () => {
  return (
    <div className="App">
        <Header />
        <Blog />
        <Footer />
    </div>
  )
}

export default App