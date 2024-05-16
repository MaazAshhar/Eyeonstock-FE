import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './components/Loader';
import "./App.css"

const Signup = lazy(()=>import("./pages/Signup"));
const SigninAndSignupTemplate = lazy(()=>import("./components/SigninAndSignupTemplate"));
const Signin = lazy(()=>import("./pages/Signin"));
const PrivateRoute = lazy(()=>import("./pages/private/PrivateRoute"));
const Dashboard = lazy(()=>import("./pages/private/Dashboard"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
      <Routes>
        <Route path='/' element={<SigninAndSignupTemplate><Signup/></SigninAndSignupTemplate>} />
        <Route path='/login' element={<SigninAndSignupTemplate><Signin/></SigninAndSignupTemplate>} />
        <Route path='/' element={<PrivateRoute />} >
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
      </Suspense>
    </Router>
  )
}

export default App