import React from "react";
import { LoginFormValues } from "../auth/LoginFormInterface";
import { Field, Form, Formik } from "formik";
import { loginValidation } from "../auth/LoginValidation";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/userService";
import { doLogin } from "../auth";
const Signin = () => {
  const navigate = useNavigate();
  const initialValues: LoginFormValues = {
    email: "",
    password: "",
  };
  const handleSubmit = async (values:any) => {
    const res = await loginUser(values);
    if(res?.data.success){
      toast.success("login successfully");
      doLogin(res,() => navigate("/dashboard"));
    }else{
      toast.error(res?.data.error);
    }
  };
  return (
    <>
      <div className="flex flex-col">
        <h2 className="font-semibold self-center" style={{ fontSize: "2rem" }}>
          Login here
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={loginValidation}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <label htmlFor="email">Email</label>
              <Field
                className="w-full py-2 px-4 rounded-xl text-sm sm:text-base border border-gray-400 mb-2"
                id="email"
                name="email"
                type="email"
                placeholder="Enter Email"
              />
              {errors.email && touched.email ? (
                <div className="text-sm text-red-600">{errors.email}</div>
              ) : null}
              <label htmlFor="password">Password</label>
              <Field
                className="w-full py-2 px-4 rounded-xl text-sm sm:text-base border border-gray-400 mb-2"
                id="password"
                name="password"
                type="password"
                placeholder="Enter password"
              />
              {errors.password && touched.password ? (
                <div className="text-sm text-red-600">{errors.password}</div>
              ) : null}
              <div className="text-center">
                <button
                  className="bg-green-600 text-white hover:scale-105 hover:bg-green-500 duration-300 rounded-full px-4 py-2"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <div className="mt-3">
            <p className="text-sm">
              Not an account?{" "}
              <Link className="text-blue-700 font-medium" to="/">
                Create Here
              </Link>
            </p>
          </div>
      </div>
    </>
  );
};

export default Signin;
