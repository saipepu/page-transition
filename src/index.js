import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './global.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
    {/* <Routes>
      <Route element={} path="/testing" />
    </Routes> */}
  </BrowserRouter>
  , document.getElementById('root'))