import { LoginFormValues } from "../auth/LoginFormInterface";
import { myAxios } from "./helper";

export const registerUser = async (data:any) => {
  const res = await myAxios.post("/signup", data);
  return res;
};

export const loginUser = async (values:LoginFormValues) => {
  const body = {
    user: {
      email: values.email,
      password: values.password,
    },
  };
  const res = await myAxios.post("/login", body);
  return res;
};
