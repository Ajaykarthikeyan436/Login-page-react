import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Success from './success.jsx'
import Fail from './Fail.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App></App>}></Route>
    <Route path='/success' element={<Success></Success>}></Route>
    <Route path='/fail' element={<Fail></Fail>}></Route>
  </Routes>
  </BrowserRouter>
)
