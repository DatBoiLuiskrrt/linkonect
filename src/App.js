import './App.css';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import { Provider } from "react-redux";
// Import createStore
import { createStore } from "redux";

// Assign to a store variable
function reducer() {
	return {
		title: "Hello there!"
	}
}

const store = createStore(reducer);

function App() {
  return (
    <div>
      <NavBar/>
      <HeroSection/>
    </div>
  );
}

export default App;
