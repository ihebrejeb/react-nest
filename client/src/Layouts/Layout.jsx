import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <main className="flex flex-col p-16 items-center min-h-screen bg-[#6e4998] text-white">
      <Outlet />
    </main>
  );
}

export default Layout;
