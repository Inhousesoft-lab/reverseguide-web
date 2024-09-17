"use client";

import useGoogleSheet from "@/hooks/useGooglesheet";

const GOOGLE_SHEET_ID = "1xwJoUF_HZqnhzwDAWEtXchXjBqjMIQ_m-cPy53rNEZY";
const GOOGLE_GID = 0;

export default function GoogleSheet() {
  const { googleSheetRows, isLoading, error } = useGoogleSheet(
    GOOGLE_SHEET_ID,
    GOOGLE_GID
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {googleSheetRows.map((row, index) => {
        return (
          <div key={index}>
            category: {row[0]}, title: {row[1]}
          </div>
        );
      })}
    </div>
  );
}
