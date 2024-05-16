import React from "react";
import { SignUpFormValues } from "../auth/SignupFormInterface";
import { ToastContainer, toast } from "react-toastify";
import { Field, Form, Formik } from "formik";
import { signupValidation } from "../auth/SignupValidation";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/userService";
const Signup = () => {
  const navigate = useNavigate();
  const initialValues: SignUpFormValues = {
    name: "",
    email: "",
    password: "",
    phone: "",
  };
  const handleSubmit = async (values:any) => {
    const body = {
      user: {
        ...values,
      },
    };
    try {
      const res = await registerUser(body);
      console.log("response is",res);
      if (res.data?.success) {
        console.log("created");
        toast.success("registered successfully");
        navigate("/login");
      }else{
        console.log(res);
      }
    } catch (error) {
      if(error?.response.status === 400){
        toast.error("error.response.data.message");
      }
      toast.error("something went wrong, please try again!!");
    }
  };
  return (
    <>
      <div className="flex flex-col">
        <h2 className="font-semibold self-center" style={{ fontSize: "2rem" }}>
          Register here
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={signupValidation}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <label htmlFor="name">Name</label>
              <Field
                className="w-full py-2 px-4 rounded-xl text-sm sm:text-base border border-gray-400 mb-2"
                id="name"
                name="name"
                type="text"
                placeholder="Enter Name"
              />
              {errors.name && touched.name ? (
                <div className="text-sm text-red-600">{errors.name}</div>
              ) : null}
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
              <label htmlFor="phone">Phone</label>
              <Field
                className="w-full py-2 px-4 rounded-xl text-sm sm:text-base border border-gray-400 mb-2"
                id="phone"
                name="phone"
                type="text"
                placeholder="Enter Phone number"
              />
              {errors.phone && touched.phone ? (
                <div className="text-sm text-red-600">{errors.phone}</div>
              ) : null}
              <div className="text-center">
                <button
                  className="bg-green-600 text-white hover:scale-105 hover:bg-green-500 duration-300 rounded-full px-4 py-2"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <div className="mt-3">
          <p className="text-sm">
            Already an account{" "}
            <Link className="text-blue-700 font-medium" to="/login">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
