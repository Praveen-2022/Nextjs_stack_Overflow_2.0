import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home | Dev Overflow",
  description:
    "A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate withe developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.",
  icons: {
    icon: "/assets/images/site-logo.svg",
  },
};

const questions = [
  {
    _id: "1",
    title: "Cascading Deletes in SQLAlchemy?",
    tags: [
      { _id: "1", name: "python" },
      { _id: "2", name: "sql" },
    ],
    author: {
      _id: "1",
      name: "john doe",
      picture: "url_to_picture",
    },
    upvotes:5 ,
    views: 100,
    answers: [
      {
        /* answer object format based on your actual structure */
      },
    ],
    createdAt: new Date("2023-12-03T12:00:00.00Z"),
  },
  {
    _id: "2",
    title: "What is Jsx?",
    tags: [
      { _id: "1", name: "javascript" },
      { _id: "2", name: "react" },
    ],
    author: {
      _id: "2",
      name: "john doe1",
      picture: "url_to_picture",
    },
    upvotes:7,
    views: 10,
    answers: [
      {
        /* answer object format based on your actual structure */
      },
    ],
    createdAt: new Date("2023-12-04T12:00:00.00Z"),
  },
  {
    _id: "3",
    title: "What is Tailwind CSS",
    tags: [
      { _id: "1", name: "CSS" },
      { _id: "2", name: "Custom_Classs" },
    ],
    author: {
      _id: "3",
      name: "john doe2",
      picture: "url_to_picture",
    },
    upvotes: 2,
    views: 105,
    answers: [
      {
        /* answer object format based on your actual structure */
      },
    ],
    createdAt: new Date("2023-12-05T12:00:00.00Z"),
  },
  {
    _id: "4",
    title: "meaning of render?",
    tags: [
      { _id: "1", name: "Next.js" },
      { _id: "2", name: "ServerSide" },
    ],
    author: {
      _id: "4",
      name: "john doe3",
      picture: "url_to_picture",
    },
    upvotes: 9 ,
    views: 103,
    answers: [
      {
        /* answer object format based on your actual structure */
      },
    ],
    createdAt: new Date("2023-12-07T12:00:00.00Z"),
  },
  {
    _id: "5",
    title: "How to add Radix ui in Next.js",
    tags: [
      { _id: "1", name: "Custom_css" },
      { _id: "2", name: "Custom_Classes" },
    ],
    author: {
      _id: "5",
      name: "john doe4",
      picture: "url_to_picture",
    },
    upvotes: 13,
    views: 1,
    answers: [
      {
        /* answer object format based on your actual structure */
      },
    ],
    createdAt: new Date("2023-12-12T12:00:00.00Z"),
  },
];


export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />

        {/* <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        /> */}
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="Theres no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the
            discussion. Your query could be the next big thing others learn from.
            Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask Question"
          />
        )}
      </div>
    </>
  );
}
