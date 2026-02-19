import SignUpForm from "@/components/forms/SignUpForm";

const SignUpPage = () => {
 
  return (
    <div className='flex-1 flex items-center justify-center h-full'>
      <div className=' bg-white flex-1 rounded-lg shadow md:mt-0 sm:max-w-lg xl:p-0'>
        <div className='p-6 space-y-4 sm:p-8'>
          <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl'>
            Create account
          </h1>
          {/* {signUpError && (
            <div className='bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm'>
              {signUpError}
            </div>
          )} */}
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
