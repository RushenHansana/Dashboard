import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';
import Image from 'next/image';

export default function SideNav() {
  return (
  
      <div >
        <Image
              src='/bgg.png'
              fill
              alt='Login image'
              className='absolute brightness-50 object-cover rounded'
          />

          <div className="flex flex-col justify-between h-screen px-1 md:px-1">
            <div className="pt-4 md:pt-4">
              {/* Top content goes here */}
              <Link className="w-full" href="/">
                <div className="relative w-full grow rounded-md md:block mb-16">
                  <AcmeLogo />
                </div>
              </Link>
              <div className="z-10 flex grow flex-row justify-center space-x-8 md:flex-col md:space-x-0 md:space-y-4">
                <NavLinks />
              </div>
            </div>
            <div className="relative mt-auto pb-4 md:pb-6">
              {/* Logout button */}
              <form
                action={async () => {
                  'use server';
                  await signOut();
                }}
              >
                <button className="flex h-[48px] w-full items-center justify-center gap-2 rounded-md bg-sky-500 p-3 text-sm font-medium hover:bg-sky-500 hover:text-red-600 md:flex-none md:justify-start md:p-2 md:px-3">
                  <PowerIcon className="w-6" />
                  <div className="hidden md:block">Log Out</div>
                </button>
              </form>
            </div>
          </div>

        </div>

 
  );
}
