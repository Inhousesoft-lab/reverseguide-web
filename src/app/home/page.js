"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import useGoogleSheet from "@/hooks/useGooglesheet";
import { GOOGLE_SHEET_ID, GID_LIST } from "@/constants/google-sheet";
import { formatApplicationDeadline } from "@/utils/dateToString";
import {
  JobCard,
  JobCardSkeleton,
  CampaignCard,
  CampaignCardSkeleton,
  SiteLogo,
  SiteLogoSeleton,
} from "@/widgets";

function ContentSection({
  title,
  isLoading,
  loadingCardCount,
  data,
  CardComponent,
  SkeletonComponent,
  moreLink,
}) {
  return (
    <section>
      <div className="flex justify-between items-center mb-8">
        <h1 className="main-page__title">{title}</h1>
        <Link href={moreLink} className="main-page__more-button">
          더보기 &gt;
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading
          ? [...Array(loadingCardCount)].map((_, index) => (
              <SkeletonComponent key={index} />
            ))
          : data.map((item) => (
              <a key={item.id} href={item.link} target="_blank">
                <CardComponent item={item} />
              </a>
            ))}
      </div>
    </section>
  );
}

function LogoSection({
  title,
  isLoading,
  loadingCardCount,
  data,
  CardComponent,
  SkeletonComponent,
}) {
  return (
    <section>
      <h1 className="main-page__title">{title}</h1>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-6 mt-4">
        {isLoading
          ? [...Array(loadingCardCount)].map((_, index) => (
              <SkeletonComponent key={index} />
            ))
          : data.map((item) => (
              <a key={item.id} href={item.link} target="_blank">
                <CardComponent item={item} />
              </a>
            ))}
      </div>
    </section>
  );
}

export default function Home() {
  const [jobData, setJobData] = useState([]);
  const [campaignData, setCampaignData] = useState([]);
  const [siteData, setSiteData] = useState([]);

  const {
    googleSheetRows: jobRows,
    isLoading: isLoadingJob,
    error: jobError,
  } = useGoogleSheet(GOOGLE_SHEET_ID, GID_LIST.JOB);

  const {
    googleSheetRows: campaignRows,
    isLoading: isLoadingCampaign,
    error: campaignError,
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
    if (campaignRows) {
      const formattedRows = campaignRows
        .filter((row) => row[8] === "Y")
        .slice(0, 3)
        .map((row) => ({
          id: row[0],
          category: row[1],
          companyName: row[2],
          title: row[3],
          openDate: row[4],
          image01: row[5],
          image02: row[6],
          link: row[7],
          useYn: row[8],
        }));
      setCampaignData(formattedRows);
    }
  }, [campaignRows]);

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
    <div className="main-page">
      <ContentSection
        title="채용 정보"
        isLoading={isLoadingJob || jobError}
        loadingCardCount={6}
        data={jobData}
        CardComponent={JobCard}
        SkeletonComponent={JobCardSkeleton}
        moreLink="/job"
      />
      <div className="mt-16">
        <ContentSection
          title="최신 정보"
          isLoading={isLoadingCampaign || campaignError}
          loadingCardCount={3}
          data={campaignData}
          CardComponent={CampaignCard}
          SkeletonComponent={CampaignCardSkeleton}
          moreLink="/campaign"
        />
      </div>
      <div className="mt-16">
        <LogoSection
          title="관통사 관련 사이트"
          isLoading={isLoadingSite || siteError}
          loadingCardCount={10}
          data={siteData}
          CardComponent={SiteLogo}
          SkeletonComponent={SiteLogoSeleton}
        />
      </div>
    </div>
  );
}
