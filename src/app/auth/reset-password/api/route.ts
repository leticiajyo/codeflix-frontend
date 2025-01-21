import { RegisterValidation } from '@/app/lib/validations/registerValidation';
import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';
import ResetPassword from '../page';
import { ResetPasswordValidation } from '@/app/lib/validations/resetPasswordValidation';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = ResetPasswordValidation.parse(body);

    console.log(email);

    // Do something with email

    return new NextResponse('Success response');
  } catch (e: any) {
    if (e instanceof ZodError) {
      const error = e as ZodError;

      const responsePayload = error.issues.map((e) => {
        return { field: e.path[0], message: e.message };
      });

      return new NextResponse(JSON.stringify(responsePayload), { status: 400 });
    }

    return new NextResponse('Unexpected error occurred', { status: 500 });
  }
}
