import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <>
      <header>
        <p>Header</p>
      </header>
      <Outlet />
      <footer>
        <p>Footer</p>
      </footer>
    </>
  );
}

export default MainLayout;
