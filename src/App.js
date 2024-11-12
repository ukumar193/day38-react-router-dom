import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './components/Login';
import SignIn from './components/SignIn';
import Home from './components/Home';
import Service from './components/Service';
import About from './components/About';
import Profile from './components/Profile';
import Logout from './components/Logout';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signin' element={<SignIn/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/service' element={<Service/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/logout' element={<Logout/>}></Route>
      
      </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
