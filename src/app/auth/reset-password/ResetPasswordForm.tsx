'use client';

import React, { useState } from 'react';
import { InputField } from '../../components/InputField';
import { AuthForm } from '@/app/components/AuthForm';
import { useRouter } from 'next/navigation';
import { ValidationError } from '@/app/lib/validations/validationError';

export default function ResetPasswordForm() {
  const router = useRouter();
  const [errors, setErrors] = useState<ValidationError[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');

    try {
      const response = await fetch('/auth/reset-password/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
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

  const message = <>Enter your email to reset your password</>;

  const fields = (
    <>
      <InputField
        id='email'
        type='email'
        label='Email'
        placeholder='Enter your email'
      />
    </>
  );

  return (
    <AuthForm
      title='Reset Password'
      topMessage={message}
      fields={fields}
      buttonText={'Reset Password'}
      onSubmit={handleSubmit}
      errors={errors}
    />
  );
}
