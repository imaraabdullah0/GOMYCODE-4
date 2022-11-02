import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar1 from './components/Navbar1';
// import Signin from './components/Signin';
import Slider from './components/Slider';


function App() {
  return (
<>
<Navbar1 />
<Slider />
{/* <Signin /> */}
</>
  );
}

export default App;
