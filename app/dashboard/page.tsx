import CardWrapper from '../ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { fetchCardData } from '@/app/lib/data';
import { Suspense } from 'react';
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardSkeleton } from '../ui/skeletons';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Call Center Dashboard',
};

export default async function Page() {
  const { numberOfInvoices, numberOfCustomers, totalPaidInvoices, totalPendingInvoices } = await fetchCardData();

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="py-8">
        <h1 className={`${lusitana.className} mb-4 text-2xl font-bold text-gray-800`}>Dashboard</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Suspense fallback={<CardSkeleton />}>
            <CardWrapper/>
          </Suspense>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
          <Suspense fallback={<RevenueChartSkeleton />}>
            <div className="md:col-span-3 lg:col-span-5">
              <RevenueChart />
            </div>
          </Suspense>
          <Suspense fallback={<LatestInvoicesSkeleton />}>
            <div className="md:col-span-1 lg:col-span-3">
              <LatestInvoices />
            </div>
          </Suspense>
        </div>
      </div>
    </main>
  );
}