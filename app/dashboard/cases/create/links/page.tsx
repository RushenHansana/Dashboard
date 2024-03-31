'use client';
import { useState } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import Breadcrumbs from '@/app/ui/cases/breadcrumbs';

export default async function Page() {  
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    
    const [caseId, setCaseId] = useState(''); // Replace '' with the actual value
    const [assessorLink, setAssessorLink] = useState('');
    const [clientLink, setClientLink] = useState('');
    setCaseId(params.get('caseId') || ''); // Replace 'caseId' with the actual value

    const getAssessorLink = async () => {
        const response = await fetch('http://localhost:8080/assessor_link');
        const data = await response.json();
        setAssessorLink(data.assessor_link);
    };

    const getClientLink = async (caseId: string) => {
        const response = await fetch(`https://7d7b-112-134-140-39.ngrok-free.app/client_link/${caseId}`);
        const data = await response.json();
        setClientLink(data.link);
    };

    



    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                { label: 'Cases', href: '/dashboard/cases' },
                {
                    label: 'Create case',
                    href: '/dashboard/cases/create',
                    active: true,
                },
                ]}
            />
            <div className="mt-4">
                <p className="mb-2">Assessor Link:</p>
                <input
                    type="text"
                    value={assessorLink}
                    readOnly
                    className="w-full p-2 border rounded"
                />
                <button
                    onClick={getAssessorLink}
                    className="mt-2 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                >
                    Fetch Assessor Link
                </button>
            </div>

            <div className="mt-4">
                <p className="mb-2">Client Link:</p>
                <input
                    type="text"
                    value={clientLink}
                    readOnly
                    className="w-full p-2 border rounded"
                />
                <button
                    onClick={() => getClientLink(caseId)} // Replace 'caseId' with the actual value
                    className="mt-2 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                >
                    Fetch Client Link
                </button>
            </div>   

        </main>
    );
}