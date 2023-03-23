import { Route, Routes } from 'react-router-dom'
import './App.css'
import AuthProvider from './components/Auth/AuthProvider'
import Home from './components/Home'
import Welcome from './components/Login/Welcome'

const App = (): JSX.Element => {
  return (
    <div className='App'>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='welcome' element={<Welcome />} />
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App
