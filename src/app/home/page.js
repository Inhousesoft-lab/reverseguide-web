"use client";

import { useState, useEffect } from "react";
import useGoogleSheet from "@/hooks/useGooglesheet";
import { GOOGLE_SHEET_ID, GID_LIST } from "@/constants/google-sheet";
import { JobCardSkeleton } from "@/widgets";
import Image from "next/image";

export default function Home() {
  const [rowData, setRowData] = useState([]);
  const { googleSheetRows, isLoading, error } = useGoogleSheet(
    GOOGLE_SHEET_ID,
    GID_LIST.SITE
  );

  useEffect(() => {
    if (googleSheetRows) {
      const formattedRows = googleSheetRows.map((row) => {
        return {
          id: row[0],
          name: row[1],
          image: row[2],
          link: row[3],
        };
      });
      setRowData(formattedRows);
    }
  }, [googleSheetRows]);

  return (
    <div className="bg-white py-12 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">
          관통사 관련 사이트
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading || error
            ? [...Array(3)].map((_, index) => <JobCardSkeleton key={index} />)
            : rowData.map((item) => {
                return (
                  <a key={item.id} href={item.link} target="_blank">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={120}
                      height={40}
                    />
                  </a>
                );
              })}
        </div>
      </div>
    </div>
  );
}
