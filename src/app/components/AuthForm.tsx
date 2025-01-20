import { capitalizeFirstLetter } from '../lib/utils/stringHelpers';
import { ValidationError } from '../lib/validations/validationError';

export type AuthFormProps = {
  title: string;
  topMessage: React.ReactNode;
  fields: React.ReactNode;
  buttonText: string;
  bottomMessage?: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  errors: ValidationError[];
};

export const AuthForm: React.FC<AuthFormProps> = ({
  title,
  topMessage,
  fields,
  buttonText,
  bottomMessage,
  onSubmit,
  errors = [],
}) => {
  return (
    <form onSubmit={onSubmit} className='flex flex-col space-y-4'>
      <div className='flex flex-col items-center space-y-4'>
        <h1 className='text-3xl font-bold'>{title}</h1>
        <p className='text-sm text-gray-500'>{topMessage}</p>
      </div>
      {errors.length > 0 && (
        <div className='flex flex-col space-y-2 rounded-lg border border-solid border-red-500 p-2'>
          {errors.map((error, i) => (
            <p className='text-sm text-red-500' key={i}>
              {capitalizeFirstLetter(error.field)}: {error.message}
            </p>
          ))}
        </div>
      )}
      <div className='flex flex-col space-y-4'>{fields}</div>
      <div className='flex flex-col-reverse space-y-2 pt-2 sm:flex-row sm:space-x-2 sm:space-y-0'>
        <button
          className='flex w-full items-center justify-center rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600 sm:px-8'
          type='submit'
        >
          {buttonText}
        </button>
      </div>
      <div className='flex flex-col items-start'>
        <p className='mt-4 text-sm text-gray-500'>{bottomMessage}</p>
      </div>
    </form>
  );
};
