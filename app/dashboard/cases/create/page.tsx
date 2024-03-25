import Form from '@/app/ui/cases/create-form';
import Breadcrumbs from '@/app/ui/cases/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
 
export default async function Page() {
  const customers = await fetchCustomers();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Cases', href: '/dashboard/cases' },
          {
            label: 'Create Case',
            href: '/dashboard/cases/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}