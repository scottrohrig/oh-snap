import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

function App() {

  const [ categories ] = useState( [
    { name: 'commercial', description: 'Photos of grocery stores, food trucks, and other commercial projects', },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, nature' },
  ] );

  const [ currentCategory, setCurrentCategory ] = useState( categories[ 0 ] );

  return (
    // React.createElement("div", : props {}, : children [
    // React.createElement("h1", {}, "Ginger").
    // React.createElement("p", {}, "breed: Brittany Spaniel")
    // ]) is equivalent to return (<div><h1>Ginger</h1><p>breed:...</p></div>)
    <div>
      <Nav
        categories={ categories }
        setCurrentCategory={ setCurrentCategory }
        currentCategory={ currentCategory }
      />
      <main>
        <ContactForm></ContactForm>
        <Gallery currentCategory={ currentCategory } ></Gallery>
        <About />
      </main>
    </div>
  );
}

export default App;
