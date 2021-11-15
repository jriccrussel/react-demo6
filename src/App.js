import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Cursor from './component/Cursor'
import Home from './component/Home'

function App() {
  return (
    <>
      <Cursor />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </>
  )
}

export default App
