import React from 'react';
import loadable from '@loadable/component';
import { Routes, Route } from 'react-router-dom';
import Workspace from '@layouts/Workspace';
import ProtectedRouter from '@components/Router/ProtectedRouter';
import PublicRouter from '@components/Router/PublicRouter';

const SignUp = loadable(() => import('@pages/SignUp'));
const Login = loadable(() => import('@pages/Login'));
const Channel = loadable(() => import('@pages/Channel'));

const App = () => {
  return (
    <Routes>
      <Route element={<ProtectedRouter />}>
        <Route path="/workspace" element={<Workspace />}>
          <Route path=":workspace">
            <Route index element={<div>채널이 없습니다. 채널을 추가해주세요.</div>} />
            <Route path="channel/:channel" element={<Channel />} />
          </Route>
          <Route index element={<div>워크스페이스가 없습니다. 워크 스페이스를 추가해주세요.</div>} />
        </Route>
      </Route>
      <Route element={<PublicRouter />}>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route element={<ProtectedRouter />}>
        <Route element={<Workspace />}>
          <Route path="/workspace/channel" element={<Channel />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
