import React from 'react';
import loadable from '@loadable/component';
import { Routes, Route } from 'react-router-dom';
import Workspace from '@layouts/Workspace';

const SignUp = loadable(() => import('@pages/SignUp'));
const Login = loadable(() => import('@pages/Login'));
const Channel = loadable(() => import('@pages/Channel'));

const App = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route element={<Workspace />}>
        <Route path="/workspace/channel" element={<Channel />} />
      </Route>
    </Routes>
  );
};

export default App;
