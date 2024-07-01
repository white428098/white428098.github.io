// /* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable react-refresh/only-export-components */
// import { createContext, useContext, useEffect, useState } from "react";
// import { toast } from "react-hot-toast";
// import APIAuthenticate from "../services/APIAuthenticate";

// const AuthenticationContext = createContext();
// function AuthenticationProvider({ children }) {
//   const { GetUserInfo, PostUserLogOut } = APIAuthenticate();
//   const [isLogin, setIsLogin] = useState(false);
//   const [userInfo, setUserInfo] = useState();
//   function handleSetAuthentication(value) {
//     setIsLogin(value);
//   }
//   async function handleSetLogout() {
//     try {
//       const response = await PostUserLogOut();
//       console.log(response);
//       toast("LOGOUT SUCCESSFULLY");
//       handleSetUserInfo(false);
//       handleSetUserInfo(null);
//       setIsLogin(false);
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   async function handleGetUserInfo() {
//     try {
//       const response = await GetUserInfo();
//       if (!response.status === 200) {
//         handleSetAuthentication(false);
//         handleSetUserInfo(null);
//         return;
//       }
//       handleSetAuthentication(true);
//       const userInfo = response.data;
//       handleSetUserInfo(userInfo);
//     } catch (error) {
//       console.log(error);
//       handleSetAuthentication(false);
//       handleSetUserInfo(null);
//     }
//   }
//   function handleSetUserInfo(value) {
//     setUserInfo(value);
//   }
//   const value = {
//     isLogin,
//     userInfo,
//     UserType: userInfo?.UserType,
//     handleSetAuthentication,
//     handleSetLogout,
//     handleSetUserInfo,
//   };
//   useEffect(() => {
//     if (isLogin) handleGetUserInfo();
//   }, [isLogin]);
//   return (
//     <AuthenticationContext.Provider value={value}>
//       {children}
//     </AuthenticationContext.Provider>
//   );
// }

// function useAuthenticationState() {
//   const context = useContext(AuthenticationContext);
//   return context;
// }

// export { useAuthenticationState, AuthenticationProvider };
