'use client';

import React, { useState } from 'react';
import { InputField } from '../../components/InputField';
import { AuthForm } from '@/app/components/AuthForm';
import { useRouter } from 'next/navigation';
import { ValidationError } from '@/app/lib/validations/validationError';

export default function RegisterForm() {
  const router = useRouter();
  const [errors, setErrors] = useState<ValidationError[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');

    try {
      const response = await fetch('/auth/register/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, confirmPassword }),
      });

      if (response.ok) {
        router.push('/auth/login');
        return;
      }

      const errorPayload = await response.json();
      setErrors(errorPayload);
    } catch (error: any) {
      alert('Unexpected error occurred');
    }
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
      errors={errors}
    />
  );
}
