"use client";

import { useState, useEffect } from "react";
import useGoogleSheet from "@/hooks/useGooglesheet";
import { GOOGLE_SHEET_ID, GID_LIST } from "@/constants/google-sheet";
import { formatApplicationDeadline } from "@/utils/dateToString";
import JobCard from "@/widgets/JobCard";

export default function JobList() {
  const [rowData, setRowData] = useState([]);
  const { googleSheetRows, isLoading, error } = useGoogleSheet(
    GOOGLE_SHEET_ID,
    GID_LIST.JOB
  );

  useEffect(() => {
    if (googleSheetRows) {
      const formattedRows = googleSheetRows.map((row) => {
        return {
          id: row[0],
          category: row[1],
          companyName: row[2],
          title: row[3],
          tags: [row[4], row[5], row[6]],
          companyLogo: row[7],
          platform: row[8],
          link: row[9],
          applicationDeadline:
            row[10].toLowerCase() === "true"
              ? "상시모집"
              : formatApplicationDeadline(row[12]),
        };
      });
      setRowData(formattedRows);
    }
  }, [googleSheetRows]);

  return (
    <div className="bg-white py-12 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">채용정보</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading || error
            ? [...Array(6)].map((_, index) => <SkeletonJobCard key={index} />)
            : rowData.map((item) => {
                return (
                  <a key={item.id} href={item.link} target="_blank">
                    <JobCard item={item} />
                  </a>
                );
              })}
        </div>
      </div>
    </div>
  );
}

function SkeletonJobCard() {
  return (
    <div className="w-full bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
      <div className="aspect-w-16 aspect-h-9 bg-gray-300"></div>
      <div className="p-4">
        <div className="h-20 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        <div className="h-3 bg-gray-300 rounded w-1/4 mt-4"></div>
      </div>
    </div>
  );
}
