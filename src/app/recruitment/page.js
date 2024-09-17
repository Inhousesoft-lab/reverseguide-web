"use client";
import { useState, useEffect } from "react";
import RecruitmentCard from "@/widgets/RecruitmentCard";

export default function Recruitment() {
  const [posts, setPosts] = useState([]);

  async function fetchData() {
    const response = await fetch("/api/recruitment");
    const result = await response.json();
    setPosts(result);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            채용정보
          </h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <RecruitmentCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
