"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { LoaderCircle } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";

import SocialLoginButton from "@/components/SocialLoginButton";
import { signIn } from "@/lib/actions/auth-actions";

interface FormData {
  email: string;
  password: string;
}
const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const router = useRouter();

  const [loginError, setLoginError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setLoginError("");
    setIsLoading(true);

    const { email, password } = data;
<<<<<<< HEAD

    try {
      const { error } = await authClient.signIn.email({
        email,
        password,
        callbackURL: "/",
      });

      if (error) {
        setLoginError(error.message ?? "An error occured during login.");
        return;
      }
    } catch (error) {
      setLoginError("An unexpected error occurred. Please try again.");
      console.error(error);
=======
    try {
      await signIn(email, password);
      router.push("/");
    } catch (err) {
      console.error("Login error", err);
      setLoginError(
        err instanceof Error ? err.message : "An unexpected error occurred.",
      );
>>>>>>> ee7b7c1a99439a7941dffa53c57161fecb046085
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className='flex-1 flex items-center justify-center h-full'>
      <div className=' bg-white flex-1 rounded-lg shadow md:mt-0 sm:max-w-lg xl:p-0'>
        <div className='p-6 space-y-4 sm:p-8'>
          <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl'>
            Welcome back
          </h1>
          {loginError && (
            <div className='bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm'>
              {loginError}
            </div>
          )}
          <div className='flex flex-col items-center space-x-4 lg:flex-row mt-4'>
            <SocialLoginButton provider='Google' onClick={() => {}} />
<<<<<<< HEAD
            <SocialLoginButton provider='Apple' onClick={() => {}} />
=======
            <SocialLoginButton provider='Github' onClick={() => {}} />
>>>>>>> ee7b7c1a99439a7941dffa53c57161fecb046085
          </div>
          <div className='flex items-center'>
            <div className='w-full h-0.5 bg-gray-300' />
            <div className='text-center px-5 text-gray-700'>or</div>
            <div className='w-full h-0.5 bg-gray-300' />
          </div>
          <form
            className='space-y-4'
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
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
                  errors.password
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
            <div className='flex items-center justify-between'>
              <div className='flex items-start'>
                <div className='flex items-center h-5'>
                  <input
                    id='remember'
                    aria-describedby='remember'
                    type='checkbox'
                    className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-orange-200 '
                  />
                </div>
                <div className='ml-3 text-sm'>
                  <label htmlFor='remember' className='text-gray-500'>
                    Remember me
                  </label>
                </div>
              </div>
              <a
                href='#'
                className='text-sm font-medium text-orange-500 hover:underline'
              >
                Forgot password?
              </a>
            </div>

            <button
              type='submit'
              disabled={isLoading}
<<<<<<< HEAD
              className={`w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
                isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300"
              }`}
            >
              {isLoading ? "Signing in..." : "Sign in to your account"}
=======
              className={`w-full flex justify-center text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-orange-500  ${
                isLoading
                  ? "cursor-not-allowed"
                  : " focus:ring-4 focus:outline-none focus:ring-orange-300 hover:bg-orange-600"
              }`}
            >
              {isLoading ? (
                <span className='flex items-center'>
                  <LoaderCircle className='animate-spin h-4 w-4 mr-2' /> Signing
                  in...
                </span>
              ) : (
                "Sign in to your account"
              )}
>>>>>>> ee7b7c1a99439a7941dffa53c57161fecb046085
            </button>
            <p className='text-sm font-light text-gray-500'>
              Don&apos;t have an account yet?
              <Link
                href='/sign-up'
                className='ml-1 font-medium text-orange-500 hover:underline'
              >
                Sign up here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
