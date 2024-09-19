"use client";

import { useState, useEffect } from "react";
import useGoogleSheet from "@/hooks/useGooglesheet";
import { GOOGLE_SHEET_ID, GID_LIST } from "@/constants/google-sheet";
import { formatApplicationDeadline } from "@/utils/dateToString";
import { JobCard, JobCardSkeleton } from "@/widgets";

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
            ? [...Array(6)].map((_, index) => <JobCardSkeleton key={index} />)
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
