"use client"

import { Formik, Form } from "formik"
import * as Yup from "yup"
import Link from "next/link"
import { FormInput } from "@/components/ui/FormInput"
import { PiDevicesDuotone } from "react-icons/pi";


const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
})

export default function SignIn() {
  const handleSubmit = async (values: any, { setSubmitting }: any) => {
    // Here you would typically send a request to your backend
    console.log(values)
    setSubmitting(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* White container for the form */}
      <div className="max-w-md w-full">
        <div className="bg-white p-8 rounded-lg shadow">
          <Link href="/">
           <div className="flex items-center justify-center">
             <div className='w-10 h-10 rounded-full bg-blue-300 text-blue-800 text-xl text-center font-extrabold flex items-center justify-center'><PiDevicesDuotone /></div>
            <span className="ml-2 text-xl font-bold text-blue-600">teckZone</span>
         </div>
         </Link>
          <h2 className="mt-6 text-center text-xl font-light text-[#272343]">
            Sign in to your account
          </h2>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={SignInSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form className="mt-8 space-y-6">
                <FormInput
                  name="email"
                  type="email"
                  label="Email address"
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
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#029fae] py-2 text-white rounded-lg hover:bg-[#029fae]/90"
                  >
                    Sign In
                  </button>
                </div>
              </Form>
            )}
          </Formik>
          <div className="text-sm text-center mt-4">
            <Link href="/signup" className="font-medium text-[#029fae] hover:text-[#029fae]/90">
              Don't have an account? Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
