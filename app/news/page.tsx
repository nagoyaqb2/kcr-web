"use client";

import { useState, useEffect } from "react";
import supabase from "../../utils/supabase";

import Link from "next/link";
import LoadingSkeleton from "./LoadingSkeleton";

export default function NewsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await supabase.from("posts").select();
      setPosts(data);
      setIsLoading(false);
    };

    fetchPosts();
  }, []);

  function convertToLocaleDate(date: string) {
    const d = new Date(date);
    return d.toLocaleDateString();
  }

  return isLoading ? (
    <LoadingSkeleton />
  ) : (
    <section className="w-full mt-[100px] flex flex-col">
      {posts?.map((post: any) => (
        <Link
          href={`/news/${post.slug}`}
          key={post.id}
          className="w-full p-4 mb-6 rounded-lg shadow h-fit "
        >
          <p>{convertToLocaleDate(post.created_at)}</p>
          <h2>{post.title}</h2>
        </Link>
      ))}
    </section>
  );
}
