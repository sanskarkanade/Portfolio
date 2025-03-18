import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

import { BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {

  return (
    <>
      <div>
        {/* <img src='./src/components/img3.webp' className='h-screen w-full '></img> */}
        {/* <Navbar/> */}
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/skill" element={<Skills/>}/>
          <Route path="/project" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
        
      </div>
      
      
    </>
  )
}

export default App
