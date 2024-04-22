import { UpdateInvoice, DeleteInvoice, ViewCase } from '@/app/ui/cases/buttons';
import InvoiceStatus from '@/app/ui/cases/status';
import { fetchFilteredAssessors } from '@/app/lib/data';
import { formatDateToLocal } from '@/app/lib/utils';
import { parseISO, format } from 'date-fns';

// export function Date({ dateString }:any) {
//   const date = parseISO(dateString);
//   return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
// }

export default async function AssessorsTable({ query, currentPage }:any) {
  const assessors = await fetchFilteredAssessors(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {assessors?.map((assessorItem:any) => (
              <div
                key={assessorItem.id}
                className="mb-2 w-full rounded-md bg-white p-4 shadow"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{assessorItem.id}</p>
                    </div>
                    <p className="text-sm text-gray-500">{assessorItem.name}</p>
                  </div>
                  {/* <p className="text-sm text-gray-500">
                    <Date dateString={assessorItem.created_at} />
                  </p> */}
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">{assessorItem.phone}</p>
                    <p>{assessorItem.email}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg bg-gray-100 text-left text-sm font-medium">
              <tr>
                <th scope="col" className="px-4 py-3 sm:pl-6">
                  ID
                </th>
                <th scope="col" className="px-3 py-3">
                  Name
                </th>
                <th scope="col" className="px-3 py-3">
                  Email
                </th>
                <th scope="col" className="px-3 py-3">
                  Contact Number
                </th>
                {/* <th scope="col" className="px-3 py-3">
                  Registered Date
                </th> */}
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {assessors?.map((assessorItem:any) => (
                <tr
                  key={assessorItem.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none hover:bg-gray-50 [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{assessorItem.id}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {assessorItem.name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {assessorItem.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {assessorItem.phone}
                  </td>
                  {/* <td className="whitespace-nowrap px-3 py-3">
                    <Date dateString={assessorItem.created_at} />
                  </td> */}
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      {/* <ViewCase id={assessorItem.id} />
                      <UpdateInvoice id={assessorItem.id} />
                      <DeleteInvoice id={assessorItem.id} /> */}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}