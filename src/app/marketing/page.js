"use client";

import { useState, useEffect } from "react";
import useGoogleSheet from "@/hooks/useGooglesheet";
import { GOOGLE_SHEET_ID, GID_LIST } from "@/constants/google-sheet";
import { MarketingCard, MarketingCardSkeleton } from "@/widgets";

export default function MarketingList() {
  const [rowData, setRowData] = useState([]);
  const { googleSheetRows, isLoading, error } = useGoogleSheet(
    GOOGLE_SHEET_ID,
    GID_LIST.MAKETING
  );

  useEffect(() => {
    if (googleSheetRows) {
      const formattedRows = googleSheetRows.map((row) => {
        return {
          id: row[0],
          category: row[1],
          companyName: row[2],
          title: row[3],
          openDate: row[4],
          image01: row[5],
          image02: row[6],
          link: row[7],
        };
      });
      setRowData(formattedRows);
    }
  }, [googleSheetRows]);

  return (
    <div className="sub-page">
      <h1 className="sub-page__title">최신 정보</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading || error
          ? [...Array(6)].map((_, index) => (
              <MarketingCardSkeleton key={index} />
            ))
          : rowData.map((item) => {
              return (
                <a key={item.id} href={item.link} target="_blank">
                  <MarketingCard item={item} />
                </a>
              );
            })}
      </div>
    </div>
  );
}
