import { NextResponse } from "next/server";
import recruitmentList from "@/__mocks__/recruitment_list.json";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  const filteredPosts = recruitmentList.filter(
    (post) => post.category === category
  );

  return NextResponse.json(filteredPosts);
}
