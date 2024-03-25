import Breadcrumbs from "@/app/ui/assessors/breadcrumbs";
import Form from "@/app/ui/assessors/create-assessor";
import { fetchCustomers } from "@/app/lib/data";


export default async function Page() {
    const customers = await fetchCustomers();
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Assessors', href: '/dashboard/assessors'},
                    { label: 'New Assessor', 
                    href: '/dashboard/assessors/create',
                    active: true,
                    },
                ]}
            />
            {/* Form for new assesors */}
            <Form customers={customers} />
        </main>
    );
}