"use client";

import useGoogleSheet from "@/hooks/useGooglesheet";
import { GOOGLE_SHEET_ID, GID_LIST } from "@/constants/google-sheet";
import MarketingCard from "@/widgets/MarketingCard";

export default function MarketingList() {
  const { googleSheetRows, isLoading, error } = useGoogleSheet(
    GOOGLE_SHEET_ID,
    GID_LIST.MAKETING
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            관련정보
          </h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {googleSheetRows.map((el) => {
            const item = {
              id: el[0],
              category: el[1],
              companyName: el[2],
              title: el[3],
              openDate: el[4],
              image01: el[5],
              image02: el[6],
              link: el[7],
            };
            return (
              <a key={item.id} href={item.link} target="_blank">
                <MarketingCard item={item} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
