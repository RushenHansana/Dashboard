import { Metadata } from "next";
import {lusitana} from "@/app/ui/fonts";
import Search from "@/app/ui/search";
import { NewAssessor } from "@/app/ui/assessors/buttons";

export const metadata: Metadata = {
    title: "Assessors",
};

export default async function Page() {

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2x1`}>Assessors</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search Assessors...." />
                {/* add button new assessors */}
                <NewAssessor />
            </div>
            {/* table of assessors in a suspense*/}
            {/* Pagination */}
        


            
        </div>
    );
    
}