import React, { Fragment } from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { SectionWrapper } from "../hoc";
import { detailNewsList, footerIcons } from "../constants";
import { Link } from "react-router-dom";
import Blogs from "./Blogs";
import Highlight from "./Highlight";
import Shared from "./Shared";
import { styles } from "../js";

const DetailNewsItem = ({ index, subHeading, body, align, img }) => (
  <>
    {subHeading && (
      <h5 className={`${styles.heroSubText} font-bold text-sky-500`}>
        {subHeading}
      </h5>
    )}
    {body && (
      <p
        className={`${align} ${
          align === "text-right" ? "leading-[250%]" : "leading-[200%]"
        }`}
      >
        {body}
      </p>
    )}
    {img.url && (
      <figure className="aspect-video select-none overflow-hidden rounded-2xl object-cover object-center p-4 shadow-card-xs">
        <img
          className="mx-auto h-full w-full rounded-lg object-cover object-top"
          src={img.url}
          alt=""
        />
      </figure>
    )}
  </>
);

const DetailNews = ({ title, level, date, contents, author, index }) => {
  return (
    <div className="overflow-hidden rounded-xl">
      <div className="mt-24 p-4">
        <article className="flex flex-col gap-16 sm:p-4 lg:pl-12">
          <section className="flex flex-col items-start lg:flex-row">
            <div className="lg:basis-3/12 xl:basis-2/12">
              <Link
                to="/news"
                className="inline-flex w-fit items-center justify-center gap-2 rounded-full border-2 border-sky-500 bg-sky-500 py-2 pl-3 pr-4 text-sm font-bold text-white hover:border-sky-400 hover:bg-sky-400"
              >
                <HiArrowNarrowLeft className="mr-2" />
                All Posts
              </Link>
            </div>
            <div className="lg:basis-7/12 xl:basis-8/12">
              <p className="w-full max-w-2xl text-sm text-slate-500 max-lg:mt-6">
                Published {date} in <br className="sm:hidden" />{" "}
                <Link className="underline">Al-Izzah News</Link>
              </p>
              <h2 className="mb-12 mt-8 text-2xl/normal font-bold text-sky-500 sm:text-3xl/normal lg:text-4xl/normal 2xl:text-5xl/normal">
                {title}
              </h2>
              <fieldset className="flex items-center gap-2">
                <figure className="h-12 w-12 overflow-hidden rounded-full">
                  <img src="/favicon.png" className="h-full w-full" />
                </figure>
                <div>
                  <p className="font-light">
                    By <span className="font-medium">{author}</span>
                  </p>
                  <p className="font-bold">{level}</p>
                </div>
              </fieldset>
            </div>
          </section>
          <section className="flex flex-col items-start lg:flex-row">
            <div className="flex flex-col gap-4 lg:basis-3/12 xl:basis-2/12">
              <span className="text-xs uppercase text-slate-400">
                Our Social Media
              </span>
              <ul className="flex gap-1">
                {footerIcons.map((icon, index) => (
                  <li className="cursor-pointer" key={index}>
                    <a
                      href={`${icon.url}`}
                      className="flex rounded-[9px] p-1 transition duration-300 hover:bg-slate-200"
                      target="_blank"
                    >
                      <div className="rounded-[7px] bg-slate-200 p-px">
                        <img
                          src={`${icon.icon}`}
                          alt=""
                          height="24"
                          width="24"
                        />
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
              <hr className="my-6 max-w-[64px] lg:hidden" />
            </div>
            <div className="lg:basis-7/12 xl:basis-8/12">
              <blockquote className="flex flex-col gap-8 text-base sm:text-lg lg:text-xl 2xl:text-2xl">
                {contents.map(
                  (content, index) =>
                    content.body && (
                      <DetailNewsItem {...content} index={index} key={index} />
                    )
                )}
              </blockquote>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
};

export default DetailNews;
