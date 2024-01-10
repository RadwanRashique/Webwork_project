import React from 'react';


const ErrorPage = function () {




  return (
    <div className='flex items-center h-full p-16 dark:bg-grey-900 dark:text-gray-100'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <div className='max-w-md text-center'>
           
          <h1 className='mb-8 font-extrabold text-9xl dark:text-red-600'>
            <span className='sr-only ' >Error</span>
            404!
          </h1>
          <p className='text-2xl font-extrabold md:text-3xl  text-red-500'>Not found</p>
          <p className='text-2xl font-semibold md:text-3xl'>
            Oops! It seems you've taken a wrong turn.
          </p>
        
        
        
        </div>
      </div>
    </div>
  );
};

export default ErrorPage
