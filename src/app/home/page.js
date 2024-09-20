"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import useGoogleSheet from "@/hooks/useGooglesheet";
import { GOOGLE_SHEET_ID, GID_LIST } from "@/constants/google-sheet";
import { formatApplicationDeadline } from "@/utils/dateToString";
import {
  JobCard,
  JobCardSkeleton,
  MarketingCard,
  MarketingCardSkeleton,
} from "@/widgets";

export default function Home() {
  const [jobData, setJobData] = useState([]);
  const [marketingData, setMarketingData] = useState([]);
  const [siteData, setSiteData] = useState([]);

  const {
    googleSheetRows: jobRows,
    isLoading: isLoadingJob,
    error: jobError,
  } = useGoogleSheet(GOOGLE_SHEET_ID, GID_LIST.JOB);

  const {
    googleSheetRows: marketingRows,
    isLoading: isLoadingMarketing,
    error: marketingError,
  } = useGoogleSheet(GOOGLE_SHEET_ID, GID_LIST.MAKETING);

  const {
    googleSheetRows: siteRows,
    isLoading: isLoadingSite,
    error: siteError,
  } = useGoogleSheet(GOOGLE_SHEET_ID, GID_LIST.SITE);

  useEffect(() => {
    if (jobRows) {
      const formattedRows = jobRows.slice(0, 6).map((row) => ({
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
      }));
      setJobData(formattedRows);
    }
  }, [jobRows]);

  useEffect(() => {
    if (marketingRows) {
      const formattedRows = marketingRows.slice(0, 3).map((row) => ({
        id: row[0],
        category: row[1],
        companyName: row[2],
        title: row[3],
        openDate: row[4],
        image01: row[5],
        image02: row[6],
        link: row[7],
      }));
      setMarketingData(formattedRows);
    }
  }, [marketingRows]);

  useEffect(() => {
    if (siteRows) {
      const formattedRows = siteRows.map((row) => {
        return {
          id: row[0],
          name: row[1],
          image: row[2],
          link: row[3],
        };
      });
      setSiteData(formattedRows);
    }
  }, [siteRows]);

  return (
    <div className="bg-white py-12 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">채용 정보</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoadingJob || jobError
            ? [...Array(6)].map((_, index) => <JobCardSkeleton key={index} />)
            : jobData.map((item) => {
                return (
                  <a key={item.id} href={item.link} target="_blank">
                    <JobCard item={item} />
                  </a>
                );
              })}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">최신 정보</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoadingMarketing || marketingError
            ? [...Array(3)].map((_, index) => (
                <MarketingCardSkeleton key={index} />
              ))
            : marketingData.map((item) => {
                return (
                  <a key={item.id} href={item.link} target="_blank">
                    <MarketingCard item={item} />
                  </a>
                );
              })}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">
          관통사 관련 사이트
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoadingSite || siteError
            ? [...Array(3)].map((_, index) => <JobCardSkeleton key={index} />)
            : siteData.map((item) => {
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
