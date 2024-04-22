import { getClientLink } from "@/app/lib/data";
import { caseInfo } from "@/app/lib/data";
import { Done } from "./buttons";
import { ClipboardIcon, ArrowLeftIcon, ShareIcon } from '@heroicons/react/24/outline';

// This function should be moved outside of the component and handled with getServerSideProps or getStaticProps
async function fetchData(id :any) {
  const assessorLink = `http://localhost:8080/main/${id}`;
  const res = await getClientLink(id);
  const clientLink = res['link_for_client'];
  const caseData = await caseInfo(id);

  return { assessorLink, clientLink, caseData };
}

export default async function ViewSk({ id }:any) {

const { assessorLink, clientLink, caseData } = await fetchData(id);

  return (
        <div className="container mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
            <div className="mb-4 p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold text-xl rounded-lg shadow-md">
                <h2 className="text-3xl">Case Summary</h2>
            </div>

            <div className="mb-6">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">{caseData.title}</h1>
                <p className="text-lg text-gray-600">{caseData.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-100 p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-700">Case Details</h3>
                <ul className="list-disc pl-5 mt-2">
                    <li><strong>ID:</strong> {caseData.id}</li>
                    <li><strong>Client ID:</strong> {caseData.client_id}</li>
                    <li><strong>Status:</strong> {caseData.status}</li>
                    <li><strong>Assessor ID:</strong> {caseData.assessor_id}</li>
                </ul>
                </div>
            </div>


            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                    <h2 className="mb-2 text-lg font-medium text-gray-700">Assessor Link</h2>
                    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow transition duration-300 ease-in-out hover:shadow-lg">
                    <a href={assessorLink} className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out">{assessorLink}</a>
                    <a
                        href={`https://api.whatsapp.com/send?text=${encodeURIComponent(assessorLink)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition duration-300 ease-in-out"
                        >
                        <ShareIcon className="h-5 w-5" />
                    </a>
                    </div>
                </div>

                <div className="flex-1">
                    <h2 className="mb-2 text-lg font-medium text-gray-700">Client Link</h2>
                    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow transition duration-300 ease-in-out hover:shadow-lg">
                    <a href={clientLink} className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out">{clientLink}</a>
                    <a
                        href={`https://wa.me/94769497680?text=${encodeURIComponent('Your message here')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition duration-300 ease-in-out"
                        >
                        <ShareIcon className="h-5 w-5" />
                    </a>
                    </div>
                </div>
                </div>


      <div className="mt-6">
        <Done />
      </div>
    </div>
  );
}
