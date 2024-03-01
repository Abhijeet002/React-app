import React from 'react';
import '../css/style.css'
import Hero from '../components/Hero';
import WhatWeOffer from './WhatWeOffer';
import BlogSection from './BlogSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

function App(){
    return <div>
        {/* importing all components */}
        <Hero/>
        <WhatWeOffer/>
        <BlogSection/>
        <ContactSection/>
        <Footer/>
    </div>
};
export default App;

// To run the app follow these commands -
// open the terminal of vs Code or any other code editor and follow these steps,
// install node manually from the node.js website (if you do not have). 
// start npm in the same location where the app.js is.( using = npm start)