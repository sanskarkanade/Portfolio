import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'

function App() {

  return (
    <>
      <div>
        {/* <img src='./src/components/img3.webp' className='h-screen w-full '></img> */}
        <Navbar/>
        <Projects/>
      </div>
      
      
    </>
  )
}

export default App
