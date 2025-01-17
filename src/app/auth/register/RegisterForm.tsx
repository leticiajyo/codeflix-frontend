'use client';

import React from 'react';
import { InputField } from '../../components/InputField';

export default function RegisterForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    alert('submit register');
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <div className='flex flex-col items-center space-y-4'>
        <h1 className='text-3xl font-bold'>Register</h1>
        <p className='text-sm text-gray-500'>
          Already have an account?{' '}
          <a href='/auth/login' className='text-red-500 hover:underline'>
            Login
          </a>
        </p>
      </div>
      <div className='mt-8 flex flex-col space-y-4'>
        <InputField
          id='email'
          type='email'
          label='Email'
          placeholder='Enter your email'
        />
        <InputField
          id='password'
          type='password'
          label='Password'
          placeholder='Enter your password'
        />
        <InputField
          id='confirmPassword'
          type='password'
          label='Confirm Password'
          placeholder='Confirm your password'
        />
      </div>
      <div className='flex flex-col-reverse space-y-2 pt-2 sm:flex-row sm:space-x-2 sm:space-y-0'>
        <button
          className='flex w-full items-center justify-center rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600 sm:px-8'
          type='submit'
        >
          Register
        </button>
      </div>
    </form>
  );
}
