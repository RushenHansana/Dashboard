import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
import Image from 'next/image';
 
export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <Image
              src='/login.png'
              fill
              alt='Login image'
              className='absolute brightness-50 object-cover '
          />
        <div className="relative bg-white bg-opacity-20 backdrop-filter backdrop-blur-md rounded-lg shadow-lg">
          <LoginForm />
        </div>
        
      </div>
    </main>
  );
}