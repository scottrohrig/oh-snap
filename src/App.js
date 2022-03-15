import './App.css';
import About from './components/About';
import Nav from './components/Nav';

function App() {
  return (
    // React.createElement("div", : props {}, : children [
    // React.createElement("h1", {}, "Ginger").
    // React.createElement("p", {}, "breed: Brittany Spaniel")
    // ]) is equivalent to return (<div><h1>Ginger</h1><p>breed:...</p></div>)
    <div>
      <Nav />
      <main>
        <About />
      </main>
    </div>
  );
}

export default App;
