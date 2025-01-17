'use client';

import React from 'react';
import { InputField } from '../../components/InputField';
import { AuthForm } from '@/app/components/AuthForm';

export default function ResetPasswordForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    alert('submit reset password');
    e.preventDefault();
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
    />
  );
}
