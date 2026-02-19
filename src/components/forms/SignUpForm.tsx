"use client";

import { useState } from "react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

import { signUp } from "@/lib/actions/auth-actions";

import SocialLoginButton from "@/components/SocialLoginButton";

interface FormData {
  name: string;
  email: string;
  password: string;
}

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [signUpError, setSignUpError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setSignUpError("");

    const { name, email, password } = data;
    try {
      const result = await signUp(email, password, name);
      if (!result.user) {
        setSignUpError("An error occurred during sign up. Please try again.");
      }
    } catch (error) {
      setSignUpError(
        `Authentication failed: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className='flex flex-col items-center space-x-4 lg:flex-row mt-4'>
        <SocialLoginButton provider='Google' onClick={() => {}} />
        <SocialLoginButton provider='Apple' onClick={() => {}} />
      </div>
      <div className='flex items-center'>
        <div className='w-full h-0.5 bg-gray-300' />
        <div className='text-center px-5 text-gray-700'>or</div>
        <div className='w-full h-0.5 bg-gray-300' />
      </div>
      <form className='space-y-4' onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <label
            htmlFor='name'
            className='block mb-1.5 text-sm font-medium text-gray-900'
          >
            Full Name
          </label>
          <input
            id='name'
            type='text'
            className={`bg-gray-50 border ${
              errors.name
                ? "border-red-500"
                : "border-gray-300 focus:ring-gray-400 focus:border-gray-600"
            } outline-none text-gray-900 rounded-lg  block w-full p-2`}
            {...register("name", {
              required: "Full Name is required",
              minLength: 2,
            })}
          />
          {errors.name && (
            <span className='text-red-500 text-xs mt-1'>
              {errors.name.message}
            </span>
          )}
        </div>
        <div>
          <label
            htmlFor='email'
            className='block mb-1.5 text-sm font-medium text-gray-900'
          >
            Email
          </label>
          <input
            id='email'
            type='email'
            className={`bg-gray-50 border ${
              errors.email
                ? "border-red-500"
                : "border-gray-300 focus:ring-gray-400 focus:border-gray-600"
            } outline-none text-gray-900 rounded-lg  block w-full p-2`}
            {...register("email", {
              required: "Email Address is required",
              minLength: 5,
            })}
          />
          {errors.email && (
            <span className='text-red-500 text-xs mt-1'>
              {errors.email.message}
            </span>
          )}
        </div>
        <div>
          <label
            htmlFor='password'
            className='block mb-1.5 text-sm font-medium text-gray-900'
          >
            Password
          </label>
          <input
            type='password'
            className={`bg-gray-50 border ${
              errors.email
                ? "border-red-500"
                : "border-gray-300 focus:ring-gray-400 focus:border-gray-600"
            } outline-none text-gray-900 rounded-lg focus:ring-orange-400 focus:border-orange-400 block w-full p-2`}
            {...register("password", {
              required: "Password is required",
            })}
          />
          {errors.password && (
            <span className='text-red-500 text-xs mt-1'>
              {errors.password.message}
            </span>
          )}
        </div>

        <button
          type='submit'
          disabled={isLoading}
          className={`w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
            isLoading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300"
          }`}
        >
          {isLoading ? "Creating account..." : "Create your account"}
        </button>
        <p className='text-sm font-light text-gray-500'>
          Already have an account?
          <Link
            href='/sign-in'
            className='ml-1 font-medium text-orange-500 hover:underline'
          >
            Sign in
          </Link>
        </p>
      </form>
    </>
  );
};

export default SignUpForm;
