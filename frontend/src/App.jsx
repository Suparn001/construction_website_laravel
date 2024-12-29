import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/frontend/Home';
import About from './components/frontend/About';
import './assets/css/style.scss';
import Service from './components/frontend/Service';
import Project from './components/frontend/Project';
import Blog from './components/frontend/Blog';
import ContactUs from './components/frontend/ContactUs';
import Login from './components/backend/login';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/service' element={<Service />}></Route>
          <Route path='/project' element={<Project />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/contact-us' element={<ContactUs />}></Route>
          <Route path='/login' element={<Login />}></Route>

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
