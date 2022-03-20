import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './pages/home'
import Req from './pages/requests'

function myRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/requests" element={<Req />} />
      </Routes>
    </Router>
    )
}

export default myRoutes