import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from './routes';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
function App() {

  useEffect(() => {
    Aos.init()
  })

  return (
    <div>
      <Navigation />
    </div>
  );
}

export default App;
