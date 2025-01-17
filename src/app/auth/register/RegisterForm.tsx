'use client';

import React from 'react';
import { InputField } from '../../components/InputField';
import { AuthForm } from '@/app/components/AuthForm';

export default function RegisterForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    alert('submit register');
    e.preventDefault();
  };

  const message = (
    <>
      Already have an account?{' '}
      <a href='/auth/login' className='text-red-500 hover:underline'>
        Login
      </a>
    </>
  );

  const fields = (
    <>
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
    </>
  );

  return (
    <AuthForm
      title='Register'
      topMessage={message}
      fields={fields}
      buttonText={'Register'}
      onSubmit={handleSubmit}
    />
  );
}
