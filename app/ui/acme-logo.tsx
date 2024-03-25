import { PhoneIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div className={`${lusitana.className} ml-auto w-auto flex flex-row items-center justify-center bg-gradient-to-r from-blue-500 to-teal-400 p-2 rounded-lg shadow-lg `}>
      <PhoneIcon className="h-12 w-12 rotate-[15deg] text-white" />
      <h1 className="text-white text-2xl font-bold ">Centre</h1>
    </div>

  );
}
