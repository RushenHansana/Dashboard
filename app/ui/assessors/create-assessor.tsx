'use client';

import { CustomerField } from '@/app/lib/definitions';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { newAssessor } from '@/app/lib/actions';
import { useFormState } from 'react-dom';

export default function Form({ customers }: { customers: CustomerField[] }) {
 const initialState = { message: null, errors: {} };
 const [state, dispatch] = useFormState(newAssessor, initialState);

 return (
   <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
     <h2 className="text-2xl font-semibold mb-6">New Assessor</h2>
     <form action={dispatch} className="space-y-4">
       {/* ID */}
       <div>
         <label htmlFor="id" className="block text-gray-700 font-medium mb-1">
           Assessor ID
         </label>
         <div className="relative">
           <input
             id="id"
             name="id"
             type="string"
             step="0.01"
             placeholder="Enter the assessor ID"
             className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
           />
         </div>
         {state.errors?.amount && (
           <p className="text-sm text-red-500 mt-1">{state.errors.amount[0]}</p>
         )}
       </div>

       {/* Name */}
       <div>
         <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
           Name
         </label>
         <div className="relative">
           <input
             id="name"
             name="name"
             type="string"
             step="0.01"
             placeholder="Enter the assessor name"
             className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
           />
         </div>
         {state.errors?.amount && (
           <p className="text-sm text-red-500 mt-1">{state.errors.amount[0]}</p>
         )}
       </div>

       {/* Email */}
       <div>
         <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
           Email
         </label>
         <div className="relative">
           <input
             id="email"
             name="email"
             type="email"
             step="0.01"
             placeholder="Enter the assessor's email"
             className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
           />
         </div>
         {state.errors?.amount && (
           <p className="text-sm text-red-500 mt-1">{state.errors.amount[0]}</p>
         )}
       </div>

       {/* Phone */}
       <div>
         <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">
           Contact Number
         </label>
         <div className="relative">
           <input
             id="phone"
             name="phone"
             type="tel"
             step="0.01"
             placeholder="Enter the assessor's contact number"
             className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
           />
         </div>
         {state.errors?.amount && (
           <p className="text-sm text-red-500 mt-1">{state.errors.amount[0]}</p>
         )}
       </div>

       <div className="flex justify-end gap-4">
         <Link
           href="/dashboard/assessors"
           className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
         >
           Cancel
         </Link>
         <Button
           type="submit"
           className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors"
         >
           New Assessor
         </Button>
       </div>
     </form>
   </div>
 );
}