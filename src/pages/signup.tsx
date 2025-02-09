"use client"

import { Formik, Form } from "formik"
import * as Yup from "yup"
import Link from "next/link"
import { FormInput } from "@/components/ui/FormInput"
import { PiDevicesDuotone } from "react-icons/pi"

const SignUpSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Confirm password is required"),
})

export default function SignUp() {
  const handleSubmit = async (values: any, { setSubmitting }: any) => {
    // Here you would typically send a request to your backend to create the user account.
    console.log(values)
    setSubmitting(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* White container for the sign-up form */}
      <div className="max-w-md w-full">
        <div className="bg-white p-8 rounded-lg shadow">
          <Link href="/">
           <div className="flex items-center justify-center">
             <div className='w-10 h-10 rounded-full bg-blue-300 text-blue-800 text-xl text-center font-extrabold flex items-center justify-center'><PiDevicesDuotone /></div>
            <span className="ml-2 text-xl font-bold text-blue-600">teckZone</span>
         </div>
         </Link>
          <h2 className="mt-6 text-center text-xl font-light text-[#272343]">
            Create your account
          </h2>
          <Formik
            initialValues={{ fullName: "", email: "", password: "", confirmPassword: "" }}
            validationSchema={SignUpSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form className="mt-8 space-y-6">
                <FormInput
                  name="fullName"
                  type="text"
                  label="Full Name"
                  placeholder="Your full name"
                  error={touched.fullName && errors.fullName ? errors.fullName : undefined}
                />
                <FormInput
                  name="email"
                  type="email"
                  label="Email Address"
                  placeholder="Email address"
                  error={touched.email && errors.email ? errors.email : undefined}
                />
                <FormInput
                  name="password"
                  type="password"
                  label="Password"
                  placeholder="Password"
                  error={touched.password && errors.password ? errors.password : undefined}
                />
                <FormInput
                  name="confirmPassword"
                  type="password"
                  label="Confirm Password"
                  placeholder="Confirm password"
                  error={touched.confirmPassword && errors.confirmPassword ? errors.confirmPassword : undefined}
                />
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#029fae] py-2 text-white rounded-lg hover:bg-[#029fae]/90"
                  >
                    Sign up
                  </button>
                </div>
              </Form>
            )}
          </Formik>
          <div className="text-sm text-center mt-4">
            <Link href="/login" className="font-medium text-[#029fae] hover:text-[#029fae]/90">
              Already have an account? Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
