import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header/Header'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<><Header /></>}></Route>
        <Route></Route>
      </Routes>
      
    
      
    </>
  )
}

export default App
