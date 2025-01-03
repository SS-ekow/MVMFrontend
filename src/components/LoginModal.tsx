import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { PiDevicesDuotone } from "react-icons/pi";

// Validation Schemas
const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(8, "Too Short").required("Password is required"),
});

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Confirm Password is required"),
  role: Yup.string().oneOf(["vendor", "buyer"], "Select a valid role").required("Role is required"),
});

// Login Modal Component
const LoginModal: React.FC<{ switchToSignup: () => void; onClose: () => void }> = ({ switchToSignup, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
        <div className="flex items-center">
                  <div className='w-10 h-10 rounded-full bg-blue-300 text-blue-800 text-xl text-center font-extrabold flex items-center justify-center'><PiDevicesDuotone /></div>
        
                  <span className="ml-2 text-xl font-bold text-blue-600">teckZone</span>
                </div>
        <button className="absolute top-3 right-3 text-gray-500 text-xl" onClick={onClose}>
          ×
        </button>
        <h2 className="text-2xl font-bold text-center mb-2">Login</h2>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            console.log("Login Data:", values);
            onClose();
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && touched.email && <div className="text-red-500 text-sm">{errors.email}</div>}
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700">
                  Password
                </label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.password && touched.password && <div className="text-red-500 text-sm">{errors.password}</div>}
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                Login
              </button>
            </Form>
          )}
        </Formik>
        <p className="text-center text-gray-600 mt-4">
          Don&apos;t have an account?{" "}
          <button className="text-blue-500" onClick={switchToSignup}>
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

// Sign-Up Modal Component
const SignupModal: React.FC<{ switchToLogin: () => void; onClose: () => void }> = ({
  switchToLogin,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-blue-300 text-blue-800 text-xl text-center font-extrabold flex items-center justify-center">
            <PiDevicesDuotone />
          </div>
          <span className="ml-2 text-xl font-bold text-blue-600">teckZone</span>
        </div>
        <button
          className="absolute top-3 right-3 text-gray-500 text-xl"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-2xl font-bold text-center mb-2">Sign Up</h2>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            role: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            console.log("Signup Data:", values);
            onClose();
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="mb-4">
                <label htmlFor="firstName" className="block text-gray-700">
                  First Name
                </label>
                <Field
                  id="firstName"
                  name="firstName"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.firstName && touched.firstName && (
                  <div className="text-red-500 text-sm">{errors.firstName}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="lastName" className="block text-gray-700">
                  Last Name
                </label>
                <Field
                  id="lastName"
                  name="lastName"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.lastName && touched.lastName && (
                  <div className="text-red-500 text-sm">{errors.lastName}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && touched.email && (
                  <div className="text-red-500 text-sm">{errors.email}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700">
                  Password
                </label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.password && touched.password && (
                  <div className="text-red-500 text-sm">{errors.password}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="confirmPassword" className="block text-gray-700">
                  Confirm Password
                </label>
                <Field
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <div className="text-red-500 text-sm">{errors.confirmPassword}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="role" className="block text-gray-700">
                  Role
                </label>
                <Field
                  as="select"
                  id="role"
                  name="role"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Role</option>
                  <option value="vendor">Vendor</option>
                  <option value="buyer">Buyer</option>
                </Field>
                {errors.role && touched.role && (
                  <div className="text-red-500 text-sm">{errors.role}</div>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
              >
                Sign Up
              </button>
            </Form>
          )}
        </Formik>
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <button className="text-blue-500" onClick={switchToLogin}>
            Login
          </button>
        </p>
      </div>
    </div>
  );
};



// Main Component to Manage Modals
const ModalManager: React.FC = () => {
  const [activeModal, setActiveModal] = useState<"login" | "signup" | null>(null);

  const closeModal = () => setActiveModal(null);
  const switchToSignup = () => setActiveModal("signup");
  const switchToLogin = () => setActiveModal("login");

  return (
    <div>
      <a
        onClick={() => setActiveModal("login")}
        className=" px-4 py-2 rounded-lg hover:text-white hover:bg-blue-600 transition-all"
      >
        Login
      </a>
      {activeModal === "login" && <LoginModal switchToSignup={switchToSignup} onClose={closeModal} />}
      {activeModal === "signup" && <SignupModal switchToLogin={switchToLogin} onClose={closeModal} />}
    </div>
  );
};

export default ModalManager;
