import { LoginValidation } from '@/app/lib/validations/loginValidation';
import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = LoginValidation.parse(body);

    console.log(email);
    console.log(password);

    // Do something with email and password

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
