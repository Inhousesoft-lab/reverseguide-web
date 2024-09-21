"use client";

import { useState, useEffect } from "react";
import useGoogleSheet from "@/hooks/useGooglesheet";
import { GOOGLE_SHEET_ID, GID_LIST } from "@/constants/google-sheet";
import { NewsCard, NewsCardSkeleton } from "@/widgets";

export default function NewsList() {
  const [rowData, setRowData] = useState([]);
  const { googleSheetRows, isLoading, error } = useGoogleSheet(
    GOOGLE_SHEET_ID,
    GID_LIST.NEWS
  );

  useEffect(() => {
    if (googleSheetRows) {
      const formattedRows = googleSheetRows.map((row) => {
        return {
          id: row[0],
          companyName: row[1],
          title: row[2],
          viewDate: row[3],
          image01: row[4],
          image02: row[5],
          link: row[6],
        };
      });
      setRowData(formattedRows);
    }
  }, [googleSheetRows]);

  return (
    <div className="sub-page">
      <h1 className="sub-page__title">News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading || error
          ? [...Array(6)].map((_, index) => <NewsCardSkeleton key={index} />)
          : rowData.map((item) => {
              return <NewsCard key={item.id} item={item} />;
            })}
      </div>
    </div>
  );
}

function SkeletonNewsCard() {
  return (
    <div className="w-full bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
      <div className="aspect-w-16 aspect-h-9 bg-gray-300"></div>
      <div className="p-4">
        <div className="h-20 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
        <div className="h-3 bg-gray-300 rounded w-1/4 mt-4"></div>
      </div>
    </div>
  );
}
