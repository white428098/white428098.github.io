import { useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
// import { useAuthenticationState } from "../../contexts/AuthenticationContext";
// import APIAuthenticate from "../../services/APIAuthenticate";

function AccountLogin() {
  // const { GetUserInfo, PostUserLogin } = APIAuthenticate();
  const navigate = useNavigate();
  // const { handleSetAuthentication, handleSetUserInfo } =
  // useAuthenticationState();
  // const { register, handleSubmit, reset, setValue } = useForm();
  // async function handleLoginSubmit(data) {
  //   const { UserAccount, UserPassword } = data;
  //   try {
  //     const response = await PostUserLogin({ UserAccount, UserPassword });
  //     if (!response.status === 200) return toast.error("帳號密碼驗證錯誤");
  //     const userinfoResponse = await GetUserInfo();
  //     if (!userinfoResponse.status === 200)
  //       return toast.error("Cookie驗證錯誤");
  //     const userInfo = userinfoResponse.data;
  //     handleSetUserInfo(userInfo);
  //     handleSetAuthentication(true);
  //     reset();
  //     console.log(response);
  //     toast("WELCOME");
  //     navigate("/");
  //   } catch (error) {
  //     console.log(error);
  //     if (
  //       error.response.request.responseURL ===
  //       "https://isme-back-end.azurewebsites.net/api/Token/Login"
  //     )
  //       toast.error("帳號密碼驗證錯誤");
  //     if (
  //       error.response.request.responseURL ===
  //       "https://isme-back-end.azurewebsites.net/api/User/GetUserInfo"
  //     )
  //       toast.error("Cookie驗證錯誤");
  //     handleSetAuthentication(false);
  //     handleSetUserInfo(null);
  //   }
  // }
  // function handleLoginSubmitError(errors) {
  //   console.log(errors);
  //   let message = `請確認下列欄位\n`;
  //   for (const error in errors) {
  //     message += `${errors[error]["message"]}\n`;
  //   }
  //   toast.error(message);
  // }
  return (
    <form
      className="flex flex-col gap-3 justify-center items-center"
      // onSubmit={handleSubmit(handleLoginSubmit, handleLoginSubmitError)}
    >
      WELCOME
      <input
        type="text"
        placeholder="帳號"
        // {...register("UserAccount", {
        //   required: "請輸入帳號",
        // })}
        // onChange={(e) => {
        //   setValue("UserAccount", e.target.value);
        // }}
      />
      <input
        type="password"
        placeholder="密碼"
        // {...register("UserPassword", {
        //   required: "請輸入密碼",
        // })}
        // onChange={(e) => {
        //   setValue("UserPassword", e.target.value);
        // }}
      />
      <button>LOGIN</button>
      <button type="button" onClick={() => navigate("/")}>
        HOME
      </button>
    </form>
  );
}

export default AccountLogin;
