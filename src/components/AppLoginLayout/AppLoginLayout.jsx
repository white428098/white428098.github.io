import { Outlet } from "react-router-dom";

function AppLoginLayout() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center">
      <Outlet />
    </div>
  );
}

export default AppLoginLayout;
