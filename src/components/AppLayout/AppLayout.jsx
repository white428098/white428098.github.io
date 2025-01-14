import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center">
      <Outlet />
    </div>
  );
}

export default AppLayout;
