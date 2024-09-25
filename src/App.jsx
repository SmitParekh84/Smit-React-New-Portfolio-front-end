import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import './assets/css/styles.css'; // Your custom styles
import './assets/css/swiper-bundle.min.css'; // Swiper styles

const App = () => {
    return (
        <div className="App">
            <Header />
            
            <main className="main">
            <Home />
            </main>
        </div>
    );
};

export default App;
