import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
// import { useAuthenticationState } from "../../contexts/AuthenticationContext";
function HomePage() {
  // const { isLogin, handleSetLogout } = useAuthenticationState();
  const navigate = useNavigate();
  function handleLogOutAndNavigate() {
    // handleSetLogout();
    navigate("/login");
  }
  return (
    <div className="flex flex-col gap-3">
      <div className="text-center">HomePage</div>
      {/* {isLogin ? ( */}
      <button onClick={() => handleLogOutAndNavigate()}>LOGOUT</button>
      {/* ) : (
        <button onClick={() => navigate("/login")}>LOGIN</button>
      )} */}
      <Button>Welcome</Button>
      <button onClick={() => navigate("/hello_world")}>TEST</button>
    </div>
  );
}

export default HomePage;
