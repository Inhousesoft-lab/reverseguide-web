"use client";

import useGoogleSheet from "@/hooks/useGooglesheet";
import { GOOGLE_SHEET_ID, GID_LIST } from "@/constants/google-sheet";
import { formatRelativeTime } from "@/utils/dateToString";
import YoutubeCard from "@/widgets/YoutubeCard";

function extractVideoId(url) {
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

export default function YoutubeList() {
  const { googleSheetRows, isLoading, error } = useGoogleSheet(
    GOOGLE_SHEET_ID,
    GID_LIST.YOUTUBE
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            YOUTUBE
          </h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {googleSheetRows.map((el) => {
            const item = {
              id: el[0],
              title: el[1],
              description: el[2],
              youtubeUrl: el[3],
              videoId: extractVideoId(el[3]),
              uploadDate: formatRelativeTime(el[4]),
            };
            return <YoutubeCard key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
