"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import RecruitmentCard from "@/widgets/RecruitmentCard";
import { recruitment_category } from "@/constants/recruitment";

export default function Recruitment() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();

  const category = searchParams.get("category") || "01";

  useEffect(() => {
    async function fetchPosts() {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/recruitment?category=${category}`);
        if (!response.ok) throw new Error("Failed to fetch posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPosts([]);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, [category]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {recruitment_category[category]}
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
