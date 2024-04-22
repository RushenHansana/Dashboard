'use client';


// import {
//   UserGroupIcon,
//   HomeIcon,
//   DocumentDuplicateIcon,
//   Cog8ToothIcon
// } from '@heroicons/react/24/outline';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Cases',
    href: '/dashboard/cases',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Assessors', href: '/dashboard/assessors', icon: UserGroupIcon },
  { name: 'Settings', href: '/dashboard/settings', icon: Cog8ToothIcon },
];

// export default function NavLinks() {
//   const pathname = usePathname();
//   return (
//     <>
//       {links.map((link) => {
//         const LinkIcon = link.icon;
//         const isActive = pathname === link.href;
//         return (
//           <Link
//             key={link.name}
//             href={link.href}
//             className= {'relative flex h-[48px] items-center  gap-2 p-3 text-sm font-medium transition duration-300 shadow-md '
      
// }
//           >
//             <LinkIcon className="w-6" />
//             <p className="hidden md:block">{link.name}</p>
//           </Link>
//         );
//       })}
//     </>
//   );
// }

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  Cog8ToothIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// ... (links array is the same)

export default function NavLinks({ closeDrawer }:any) { // Accept closeDrawer prop
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx( // Use clsx for streamlined conditional classes
              'relative flex h-[48px] items-center gap-2 p-3 text-sm font-medium transition duration-300 shadow-md',
              isActive && 'bg-gray-700 text-white'
            )}
            onClick={closeDrawer} // Call closeDrawer after clicking a link
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
