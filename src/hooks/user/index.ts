import { post } from "@/libs/api";
import {
  setAccessToken,
  setRefreshToken,
  setStoredUser,
} from "../user-storage";
import customAlert from "@/components/modal/CustomModalAlert";
interface UseAuth {
  findMemeberById: (id: string) => Promise<any>;
  signup: (
    memberNumber: string,
    loginId: string,
    name: string,
    nickname: string,
    profileImage: string
  ) => Promise<any>;
}

export const useAuth = (): UseAuth => {
  const findMemeberById = async (id: string): Promise<any> => {
    const res = await post("/api/member/login", {
      loginId: id,
    })
      .then((res: any) => {
        console.log("authindex res", res);
        console.log(res.status);
        if (res.status === 200) {
          setAccessToken(res.data.tokens.accessToken);
          setRefreshToken(res.data.tokens.refreshToken);
          setStoredUser(res.data.data);
          customAlert(`${res.data.data.name}님 환영합니다`);
        }
        return res;
      })
      .catch((err) => {
        return err;
      });
    return res;
  };
  const signup = async (
    memberNumber: string,
    loginId: string,
    name: string,
    nickname: string,
    profileImage: string
  ): Promise<any> => {
    const res = await post("/api/member/join", {
      memberNumber,
      loginId,
      name,
      nickname,
      profileImage,
    })
      .then((res: any) => {
        console.log(res);
        if (res.response?.status === 400) {
          customAlert(res.response.data);
        } else {
          setAccessToken(res.data.tokens.accessToken);
          setRefreshToken(res.data.tokens.refreshToken);
          setStoredUser(res.data.data);
          customAlert(`${res.data.data.name}님 환영합니다`);
        }
        return res;
      })
      .catch((err) => {
        return err;
      });
    return res;
  };
  return {
    findMemeberById,
    signup,
  };
};
