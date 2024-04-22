import { ViewCase } from '@/app/ui/cases/buttons';
import InvoiceStatus from '@/app/ui/cases/status';
import { fetchFilteredInvoices } from '@/app/lib/data';

export default async function InvoicesTable({ query, currentPage }:any) {
  const cases = await fetchFilteredInvoices(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-white shadow-md p-2 md:pt-0">
          <div className="md:hidden">
            {cases?.map((caseItem:any) => (
              <div
                key={caseItem.id}
                className="mb-2 w-full rounded-md bg-gray-50 p-4 shadow"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p className="font-semibold">{caseItem.client_name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{caseItem.title}</p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-lg font-medium">{caseItem.title}</p>
                    <p className="text-gray-500">Case ID: {caseItem.id}</p>
                  </div>
                  <div className="flex gap-2">
                    <ViewCase id={caseItem.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg bg-gray-100 text-left text-sm font-medium">
              <tr>
                <th scope="col" className="px-4 py-3 sm:pl-6">
                  Client Name
                </th>
                <th scope="col" className="px-3 py-3">
                  Policy Number
                </th>
                <th scope="col" className="px-3 py-3">
                  Title
                </th>
                <th scope="col" className="px-3 py-3">
                  Contact Number
                </th>
                <th scope="col" className="px-3 py-3">
                  Assessor ID
                </th>
                <th scope="col" className="px-3 py-3">
                  Status
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {cases?.map((caseItem:any) => (
                <tr
                  key={caseItem.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none hover:bg-gray-50 [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p className="font-semibold">{caseItem.client_name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {caseItem.client_id}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {caseItem.title}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {caseItem.client_whatsappnumber}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {caseItem.assessor_id}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <InvoiceStatus status={caseItem.status} />
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <ViewCase id={caseItem.id} />
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
