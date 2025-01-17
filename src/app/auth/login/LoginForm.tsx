'use client';

import React from 'react';
import { InputField } from '../../components/InputField';
import { AuthForm } from '@/app/components/AuthForm';

export default function LoginForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    alert('submit login');
    e.preventDefault();
  };

  const message = (
    <>
      New to the app?{' '}
      <a href='/auth/register' className='text-red-500 hover:underline'>
        Register
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
    </>
  );

  return (
    <AuthForm
      title='Login'
      message={message}
      fields={fields}
      buttonText={'Login'}
      onSubmit={handleSubmit}
    />
  );
}
