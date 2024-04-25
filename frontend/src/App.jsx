import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from './routes/Signin';
import Signup from './routes/Signup';
import Home from './routes/Home';
import AuthRoute from './AuthRoute';
import H from "./components/H";
import "./App.css"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/home"
          element={
            <AuthRoute redirectTo="/">
              <Home />
            </AuthRoute>
          }
        />
        <Route path="/" element={<H />} /> Default route
      </Routes>
    </Router>
  );
};

export default App;
