import { Route, Routes } from 'react-router'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'

const App = (): JSX.Element => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
