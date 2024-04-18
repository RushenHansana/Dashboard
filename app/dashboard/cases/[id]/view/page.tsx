import { getClientLink } from "@/app/lib/data";
import { Suspense } from "react";
import { DocumentDuplicateIcon, ArrowLeftIcon, ShareIcon } from '@heroicons/react/24/outline';
import Breadcrumbs from '@/app/ui/cases/breadcrumbs';
import ViewSk from "@/app/ui/cases/view";


export default async function Page({ params }:any) {
  const id = params.id;



  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Cases', href: '/dashboard/cases' },
          {
            label: 'View Case',
            href: `/dashboard/cases/${id}/view`,
            active: true,
          },
        ]}
      />
      <ViewSk id={id} />

    </main>
  );
}
