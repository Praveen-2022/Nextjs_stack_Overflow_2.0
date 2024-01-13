import React from "react";
import Link from "next/link";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import NoResult from "@/components/shared/NoResult";
import { getAllTags } from "@/lib/actions/tag.actions";
import { SearchParamsProps } from "@/types";
import Filter from "@/components/shared/Filter";
import { TagFilters } from "@/constants/filters";
import Pagination from "@/components/shared/Pagination";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tags | Dev Guru's Hub",
  description:
    "A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate withe developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.",
  icons: {
    icon: "/assets/images/site-logo.svg",
  },
};

const Tags = async ({ searchParams }: SearchParamsProps) => {
  //  added search functionality into Tags page
  const result = await getAllTags({
    searchQuery: searchParams.q,
    filter: searchParams.filter,
    page: searchParams.page ? +searchParams.page : 1,
  });

  return (
    <>
      <h1 className="h1-bold text-dark100_light900">All Tags</h1>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route="/tags"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for tags"
          otherClasses="flex-1"
        />

        <Filter
          filters={TagFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
        />
      </div>

      <section className="mt-12 flex flex-wrap gap-4">
        {result.tags.length > 0 ? (
          result.tags.map((tag) => (
            <Link
              href={`/tags/${tag._id}`}
              key={tag._id}
              className="shadow-light100_darknone"
            >
              <article className="background-light900_dark200 light-border flex items-center w-full flex-col rounded-2xl border px-8 py-10 sm:w-[260px]">
                <div className="background-light800_dark400 w-fit rounded px-5 py-1.5 ">
                  <p className="paragraph-semibold text-dark300_light900 capitalize">
                    {tag.name}
                  </p>
                </div>

                <p className="small-medium text-dark400_light500 mt-3.5">
                  <span className="body-semibold primary-text-gradient mr-2.5">
                    {tag.questions.length}+{" "}
                  </span>{" "}
                  Questions
                </p>
              </article>
            </Link>
          ))
        ) : (
          <NoResult
            title="No Tags Found"
            description="It looks like there are no tags found."
            link="/ask-question"
            linkTitle="Ask a question"
          />
        )}
      </section>
      {/* todo: pagination reminder */}
      <div className="mt-10">
        <Pagination
          pageNumber={searchParams?.page ? +searchParams.page : 1}
          isNext={result.isNext}
        />
      </div>
    </>
  );
};

export default Tags;
