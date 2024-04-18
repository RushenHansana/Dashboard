

import SideNav from '@/app/ui/dashboard/sidenav';
import AdminNavBar from '../ui/topbar';
import PersistentDrawerLeft from '../ui/sidebar';



// export default function Layout({ children }: { children: React.ReactNode }) {
//   return (
// <div className="flex flex-col min-h-screen">
//   {/* AdminNavBar at the top */}
//   <div className="w-full">
//     <AdminNavBar />
//   </div>

//   {/* SideNav and children content side by side */}
//   <div className="flex flex-grow">
//     {/* SideNav to the side */}
//     <div className="w-full md:w-1/4 bg-white bg-opacity-20 backdrop-filter backdrop-blur-md rounded-lg shadow-lg">
//       {/* <SideNav /> */}
//       {/* <PersistentDrawerLeft/> */}
    
//     </div>

//     {/* Main content area */}
//     <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
//       {children}
//     </div>
//   </div>
// </div>

//   );
// }

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64 elative bg-white bg-opacity-20 backdrop-filter backdrop-blur-md rounded-lg shadow-lg">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}