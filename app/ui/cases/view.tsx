import { getClientLink } from "@/app/lib/data";
import { caseInfo } from "@/app/lib/data";
import { Done } from "./buttons";
import { ClipboardIcon, ArrowLeftIcon, ShareIcon } from '@heroicons/react/24/outline';

export default async function ViewSk({ id }: any) {
  const assessorLinkBase = process.env.ASSESSOR_LINK|| '';
  const assessorLink = `${assessorLinkBase}/main/${id}`;
  const res = await getClientLink(id);
  const clientLink = res['link_for_client'];
  const caseData = await caseInfo(id);

  return (
    <div className="max-w-5xl mx-auto my-8 p-8 bg-white rounded-lg shadow-lg">
      <div className="bg-gray-100 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Case Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{caseData.title}</h1>
            <p className="text-lg font-bold text-gray-600 mb-4">Status : {caseData.description}</p>
          </div>
          <ul className="list-disc pl-5 mt-2 text-gray-700">
            <li><strong>Case ID:</strong> {caseData.id}</li>
            <li><strong>Policy Number:</strong> {caseData.client_id}</li>
            <li><strong>Client Phone:</strong> {caseData.status}</li>
            <li><strong>Assessor Phone:</strong> {caseData.assessor_id}</li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow transition duration-300 ease-in-out hover:shadow-xl">
            <h3 className="mb-2 text-lg font-semibold text-gray-700">Assessor Link</h3>
            <div className="flex items-center justify-between">
              <a
                href={assessorLink}
                className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
              >
                {assessorLink}
              </a>
              <a
                href={`https://wa.me/${caseData.assessor_id}?text=${encodeURIComponent(assessorLink)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition duration-300 ease-in-out"
              >
                <ShareIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow transition duration-300 ease-in-out hover:shadow-xl">
            <h3 className="mb-2 text-lg font-semibold text-gray-700">Client Link</h3>
            <div className="flex items-center justify-between">
              <a
                href={clientLink}
                className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
              >
                {clientLink}
              </a>
              <a
                href={`https://wa.me/${caseData.status}?text=${encodeURIComponent(clientLink)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition duration-300 ease-in-out"
              >
                <ShareIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <Done />
      </div>
    </div>
  );
}