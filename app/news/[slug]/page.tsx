import supabase from "../../../utils/supabase";

import ReactMarkdown from "react-markdown";

import { notFound } from "next/navigation";
import Image from "next/image";

export const revalidate = 60;

export default async function NewsDetailPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { data } = await supabase
    .from("posts")
    .select()
    .match({ slug })
    .single();

  if (!data) {
    notFound();
  }

  const body = data.content;

  return (
    <>
      <article className="flex flex-col w-full bg-black h-fit md:flex-row">
        <div className="flex justify-end w-full text-white md:w-1/2 h-fit">
          <div className="max-w-[720px] w-full h-auto min-h-fit md:min-h-screen pt-[100px] pr-[64px] pb-[5rem] pl-[64px]">
            <h1 className="flex font-extrabold uppercase text-[1.5rem] md:text-[2rem] lg:text-[3rem] leading-[1.2] tracking-tight">
              {data.title}
            </h1>
            <p className="flex mt-[20px]">{data.short_description}</p>
          </div>
        </div>
        <div className="flex w-full h-auto min-h-0 md:w-1/2 md:min-h-screen">
          <div className="relative w-full min-h-[300px] max-h-[500px] md:min-h-screen overflow-hidden">
            <Image
              fill={true}
              src={data.main_picture}
              alt="Image of the news"
              style={{ objectFit: "cover" }}
              placeholder="blur"
              blurDataURL={data.blurred_main_picture}
            />
          </div>
        </div>
      </article>
      <div className="prose max-w-none md:prose-lg lg:prose-xl prose-img:mx-auto mt-[50px] px-12 w-full">
        <div>
          <ReactMarkdown>{body}</ReactMarkdown>
        </div>
      </div>
    </>
  );
}
