'use client';

import React, { useState } from 'react';
import { InputField } from '../../components/InputField';
import { AuthForm } from '@/app/components/AuthForm';
import { useRouter } from 'next/navigation';
import { ValidationError } from '@/app/lib/validations/validationError';

export default function LoginForm() {
  const router = useRouter();
  const [errors, setErrors] = useState<ValidationError[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      const response = await fetch('/auth/login/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        router.push('/');
        return;
      }

      const errorPayload = await response.json();
      setErrors(errorPayload);
    } catch (error: any) {
      alert('Unexpected error occurred');
    }
  };

  const topMessage = (
    <>
      New to the app?{' '}
      <a href='/auth/register' className='text-red-500 hover:underline'>
        Register
      </a>
    </>
  );

  const bottomMessage = (
    <>
      Forgot your password?{' '}
      <a href='/auth/reset-password' className='text-red-500 hover:underline'>
        Reset password
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
      topMessage={topMessage}
      fields={fields}
      buttonText={'Login'}
      bottomMessage={bottomMessage}
      onSubmit={handleSubmit}
      errors={errors}
    />
  );
}
