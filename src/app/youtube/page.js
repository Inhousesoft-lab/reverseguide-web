"use client";

import { useState, useEffect } from "react";
import useGoogleSheet from "@/hooks/useGooglesheet";
import { GOOGLE_SHEET_ID, GID_LIST } from "@/constants/google-sheet";
import { formatRelativeTime } from "@/utils/dateToString";
import YoutubeCard from "@/widgets/YoutubeCard";
import { extractVideoId } from "@/utils/youtubeConverter";

export default function YoutubeList() {
  const [rowData, setRowData] = useState([]);
  const { googleSheetRows, isLoading, error } = useGoogleSheet(
    GOOGLE_SHEET_ID,
    GID_LIST.YOUTUBE
  );

  useEffect(() => {
    if (googleSheetRows) {
      const formattedVideos = googleSheetRows.map((row) => {
        return {
          id: row[0],
          title: row[1],
          description: row[2],
          url: row[3],
          videoId: extractVideoId(row[3]),
          uploadDate: formatRelativeTime(row[4]),
        };
      });
      setRowData(formattedVideos);
    }
  }, [googleSheetRows]);

  return (
    <div className="bg-white py-12 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          YouTube Videos
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading || error
            ? [...Array(6)].map((_, index) => (
                <SkeletonYouTubeCard key={index} />
              ))
            : rowData.map((item) => {
                return <YoutubeCard key={item.id} item={item} />;
              })}
        </div>
      </div>
    </div>
  );
}

function SkeletonYouTubeCard() {
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
