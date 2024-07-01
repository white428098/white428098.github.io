import { domain_iSME as domain } from "../data/DomainData";
import axios from "axios";
export default function APIAuthenticate() {
  async function GetUserInfo() {
    const response = await axios({
      method: "GET",
      url: `${domain}/api/Account/GetUser`,
      withCredentials: true,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    });
    return response;
  }
  async function PostUserLogin(Params) {
    const response = await axios({
      method: "POST",
      url: `${domain}/api/Token/Login`,
      data: Params,
      withCredentials: true,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    });
    return response;
  }
  async function PostUserLogOut() {
    const response = await axios({
      method: "POST",
      url: `${domain}/api/Token/Logout`,
      withCredentials: true,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    });
    return response;
  }
  return {
    GetUserInfo,
    PostUserLogin,
    PostUserLogOut,
  };
}
