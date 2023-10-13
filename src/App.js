import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; // Import 'Routes'

import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <Router>
      <div>
        

        {/* Use <Routes> instead of <Route> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;