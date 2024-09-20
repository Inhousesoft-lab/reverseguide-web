import { NextResponse } from "next/server";
import blogList from "@/__mocks__/blog_list.json";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  const filteredRows = blogList.filter((post) => post.category === category);

  return NextResponse.json(filteredRows);
}
