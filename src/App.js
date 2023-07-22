// import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import ContactSec from './components/ContactSec'
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="App">
     <Navigation/>
     <ContactSec/>
     <ContactForm/>
    </div>
  );
}

export default App;
