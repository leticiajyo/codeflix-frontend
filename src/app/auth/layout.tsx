export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{ backgroundImage: 'url(/background.jpg)' }}
      className='bg-cover bg-center bg-no-repeat text-white opacity-80'
    >
      <div className='flex min-h-screen flex-col items-center justify-center py-2'>
        <div className='flex w-full max-w-md flex-col rounded bg-[#141414] bg-opacity-90 px-4 py-8 shadow-lg'>
          {children}
        </div>
      </div>
    </div>
  );
}
