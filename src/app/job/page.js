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
      const today = new Date();

      const formattedRows = googleSheetRows
        .map((row) => {
          return {
            id: row[0],
            category: row[1],
            companyName: row[2],
            title: row[3],
            tags: [row[4], row[5], row[6]],
            companyLogo: row[7],
            platform: row[8],
            link: row[9],
            openDate: row[10].toLowerCase() === "true",
            endDate: row[12] ? new Date(row[12]) : null,
            applicationDeadline:
              row[10].toLowerCase() === "true"
                ? "상시모집"
                : formatApplicationDeadline(row[12]),
          };
        })
        .filter((row) => {
          if (row.openDate) {
            return true; // Always include if openDate is true
          } else {
            const sevenDaysLater = new Date(
              row.endDate.getTime() + 7 * 24 * 60 * 60 * 1000
            );
            return sevenDaysLater >= today; // Include if endDate is within the last 7 days
          }
        });
      setRowData(formattedRows);
    }
  }, [googleSheetRows]);

  return (
    <div className="sub-page">
      <h1 className="sub-page__title">채용 정보</h1>
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
  );
}
