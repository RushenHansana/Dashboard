'use client';

import { CustomerField } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createInvoice } from '@/app/lib/actions';
import { useFormState } from 'react-dom'; 
import { init } from 'next/dist/compiled/webpack/webpack';
import { getNumbers } from '@/app/lib/data';

export default async function Form({ customers }: { customers: CustomerField[] }) {
  const initialState = { message: null , errors: {}}
  const [state, dispatch] = useFormState( createInvoice , initialState);

  const response = await getNumbers();

  return (
    <form action={dispatch} className="mx-auto max-w-lg rounded-lg bg-white p-6 shadow-md">
      <div className="mb-6">
        <h2 className="mb-4 text-2xl font-bold text-gray-800">Create New Case</h2>
        <div className="grid gap-6">
          <div>
            <label htmlFor="client_id" className="mb-2 block text-sm font-medium text-gray-700">
              Client Policy Number
            </label>
            <input
              id="client_id"
              name="client_id"
              type="string"
              placeholder="Enter Client Policy Number"
              className="peer block w-full rounded-md border border-gray-300 py-2 px-4 text-sm text-gray-800 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              aria-describedby="client_id-error"
            />
            {/* <div id="client_id-error" aria-live="polite" aria-atomic="true" className="mt-2 text-sm text-red-500">
              {state.errors?.client_id &&
                state.errors.client_id.map((error: string) => (
                  <p key={error} className="flex items-center gap-2">
                    <ExclamationCircleIcon className="h-4 w-4" /> {error}
                  </p>
                ))}
            </div> */}
          </div>

          <div>
            <label htmlFor="client_name" className="mb-2 block text-sm font-medium text-gray-700">
              Client Name
            </label>
            <input
              id="client_name"
              name="client_name"
              type="string"
              placeholder="Enter Client Name"
              className="peer block w-full rounded-md border border-gray-300 py-2 px-4 text-sm text-gray-800 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              aria-describedby="client_name-error"
            />
            {/* <div id="client_name-error" aria-live="polite" aria-atomic="true" className="mt-2 text-sm text-red-500">
              {state.errors?.client_name &&
                state.errors.client_name.map((error: string) => (
                  <p key={error} className="flex items-center gap-2">
                    <ExclamationCircleIcon className="h-4 w-4" /> {error}
                  </p>
                ))}
            </div> */}
          </div>

          <div>
            <label htmlFor="client_phone" className="mb-2 block text-sm font-medium text-gray-700">
              Client WhatsApp Number
            </label>
            <input
              id="client_phone"
              name="client_phone"
              type="string"
              placeholder="Enter Client WhatsApp Number"
              className="peer block w-full rounded-md border border-gray-300 py-2 px-4 text-sm text-gray-800 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              aria-describedby="client_phone-error"
            />
            {/* <div id="client_phone-error" aria-live="polite" aria-atomic="true" className="mt-2 text-sm text-red-500">
              {state.errors?.client_phone &&
                state.errors.client_phone.map((error: string) => (
                  <p key={error} className="flex items-center gap-2">
                    <ExclamationCircleIcon className="h-4 w-4" /> {error}
                  </p>
                ))}
            </div> */}
          </div>

          <div>
            <label htmlFor="title" className="mb-2 block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              id="title"
              name="title"
              type="string"
              placeholder="Enter Title"
              className="peer block w-full rounded-md border border-gray-300 py-2 px-4 text-sm text-gray-800 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              aria-describedby="title-error"
            />
            {/* <div id="title-error" aria-live="polite" aria-atomic="true" className="mt-2 text-sm text-red-500">
              {state.errors?.title &&
                state.errors.title.map((error: string) => (
                  <p key={error} className="flex items-center gap-2">
                    <ExclamationCircleIcon className="h-4 w-4" /> {error}
                  </p>
                ))}
            </div> */}
          </div>

          <div>
            <label htmlFor="description" className="mb-2 block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Enter Description"
              className="peer block w-full rounded-md border border-gray-300 py-2 px-4 text-sm text-gray-800 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              aria-describedby="description-error"
              rows={4}
            />
            {/* <div id="description-error" aria-live="polite" aria-atomic="true" className="mt-2 text-sm text-red-500">
              {state.errors?.description &&
                state.errors.description.map((error: string) => (
                  <p key={error} className="flex items-center gap-2">
                    <ExclamationCircleIcon className="h-4 w-4" /> {error}
                  </p>
                ))}
            </div> */}
          </div>

          <div>
            <label htmlFor="number" className="mb-2 block text-sm font-medium text-gray-700">
              Choose Assessor Number
            </label>
            <select
              id="number"
              name="number"
              className="peer block w-full cursor-pointer rounded-md border border-gray-300 py-2 px-4 text-sm text-gray-800 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              defaultValue=""
              aria-describedby="number-error"
            >
              <option value="" disabled>
                Select a number
              </option>
              {response.map((item: any) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            
          </div>
          <div id="customer-error" aria-live="polite" aria-atomic="true">
          {state.errors?.customerId &&
            state.errors.customerId.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
          </div>
        </div> 


      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/cases"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel

        </Link>
        <Button type="submit">Create Case</Button>
      </div>
    </form>
  );
}
