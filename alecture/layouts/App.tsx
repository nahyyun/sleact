import React from 'react';
import loadable from '@loadable/component';
import { Routes, Route } from 'react-router-dom';

const SignUp = loadable(() => import('@pages/SignUp'));
const Login = loadable(() => import('@pages/Login'));

const App = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
