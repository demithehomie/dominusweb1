import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import NavbarComp from './components/NavbarComponent.js';

function App(){
  return (
    <div className='App'>
      <NavbarComp/>
      <Home/>
    </div>
  );

}

export default App;
