export type AuthFormProps = {
  title: string;
  message: React.ReactNode;
  fields: React.ReactNode;
  buttonText: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const AuthForm: React.FC<AuthFormProps> = ({
  title,
  message,
  fields,
  buttonText,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit} className='space-y-4'>
      <div className='flex flex-col items-center space-y-4'>
        <h1 className='text-3xl font-bold'>{title}</h1>
        <p className='text-sm text-gray-500'>{message}</p>
      </div>
      <div className='mt-8 flex flex-col space-y-4'>{fields}</div>
      <div className='flex flex-col-reverse space-y-2 pt-2 sm:flex-row sm:space-x-2 sm:space-y-0'>
        <button
          className='flex w-full items-center justify-center rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600 sm:px-8'
          type='submit'
        >
          {buttonText}
        </button>
      </div>
    </form>
  );
};
