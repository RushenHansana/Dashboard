'use client';


import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  Cog8ToothIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

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

export default function NavLinks() {
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
            className={clsx(
              'relative flex h-[48px] items-center justify-center gap-2 rounded-lg p-3 text-sm font-medium transition duration-300 shadow-md',
              'bg-white bg-opacity-20 backdrop-filter backdrop-blur-md md:flex-none md:justify-start md:p-2 md:px-3 bg-sky-500 text-white border border-sky-600 hover:bg-sky-600',
              {
                'bg-sky-600 text-white border border-sky-600 hover:bg-sky-600': isActive,
                'hover:bg-sky-600': !isActive,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}

