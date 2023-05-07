import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <header>it is a layout</header>
      <Outlet />
    </>
  );
};
