import { UpdateInvoice, DeleteInvoice,ViewCase } from '@/app/ui/cases/buttons';
import InvoiceStatus from '@/app/ui/cases/status';
import { fetchFilteredAssessors } from '@/app/lib/data';
import { formatDateToLocal } from '@/app/lib/utils';
import { parseISO, format } from 'date-fns';


export function Date({ dateString }: any) {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
  }
  


export default async function AssessorsTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const asessors = await fetchFilteredAssessors(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {asessors?.map((aseItem: any) => (
              <div
                key={aseItem.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      {/* <Image
                        src={invoice.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      /> */}
                      <p>{aseItem.id}</p>
                    </div>
                    <p className="text-sm text-gray-500">{aseItem.name}</p>
                  </div>
                  {/* <InvoiceStatus status={caseItem.status} /> */}
                  <p className="text-sm text-gray-500">{aseItem.created_at}</p>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {aseItem.phone}
                    </p>
                    <p>{aseItem.id}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    {/* <ViewCase id={aseItem.id} />
                    <UpdateInvoice id={aseItem.id} />
                    <DeleteInvoice id={aseItem.id} /> */}
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  ID
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Contact Number
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Registered Date
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {asessors?.map((aseItem:any) => (
                <tr
                  key={aseItem.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      {/* <Image
                        src={invoice.image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      /> */}
                      <p>{aseItem.id}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {aseItem.name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {aseItem.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {aseItem.phone}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {/* <InvoiceStatus status={caseItem.status} /> */}
                    <Date dateString={aseItem.created_at} />
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      {/* <ViewCase id={caseItem.id} />
                      <UpdateInvoice id={caseItem.id} />
                      <DeleteInvoice id={caseItem.id} /> */}
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