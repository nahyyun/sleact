import { Modal } from '@components/common/Modal';
import React from 'react';
import { Outlet } from 'react-router-dom';
import useAuth from '@hooks/useAuth';
import useModal from '@hooks/useModal';
import Button from '@components/common/Button';
import useRouter from '@hooks/useRouter';

const PublicRouter = () => {
  const {
    isLogin,
    user: { userInfo },
  } = useAuth();
  const { isOpen, closeModal } = useModal(true);
  const { routeTo } = useRouter();

  const routeToWorkspace = () => {
    closeModal();
    routeTo(`/workspace/${userInfo?.Workspaces[0].name}`);
  };

  if (!isLogin) return <Outlet />;

  return (
    <Modal isOpen={isOpen} onCloseModal={closeModal}>
      <Modal.Dialog>이미 로그인한 상태입니다.</Modal.Dialog>
      <Button onClick={routeToWorkspace}>확인</Button>
    </Modal>
  );
};

export default PublicRouter;
