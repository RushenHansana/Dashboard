import { Metadata } from "next";
import {lusitana} from "@/app/ui/fonts";
import Search from '@/app/ui/search';
import { NewAssessor } from "@/app/ui/assessors/buttons";
import { fetchAssessorsPages } from "@/app/lib/data";
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import AssessorsTable from "@/app/ui/assessors/table";
import { Suspense } from "react";
import Pagination from "@/app/ui/assessors/pagination";


export const metadata: Metadata = {
    title: "Assessors",
};

export default async function Page({
    searchParams,
  }: {
    searchParams?: {
      query?: string;
      page?: string;
    };
  }) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    const totalPages = await fetchAssessorsPages(query);
    return (
        <div className="w-full">
        <div className="flex w-full items-center justify-between">
          <h1 className={`${lusitana.className} text-2xl text-white`}>Assessors</h1>
        </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search Assessors...." />
                {/* add button new assessors */}
                <NewAssessor />
            </div>
            {/* table of assessors in a suspense*/}
            <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
                <AssessorsTable query={query} currentPage={currentPage} />
            </Suspense>
            {/* Pagination */}
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        


            
        </div>
    );
    
}