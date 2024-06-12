import React from "react";
import { htmlcss_badge, database_badge } from "../assets/images";

function Certifications({ onGoBack }) {
  return (
    <section className="w-full h-full flex flex-col items-center justify-center">
      <h1 className="font-bold text-[45px] sm:text-md lg:text-lg text-black dark:text-white mb-8">
        Certifications
        <span className="text-secondary">.</span>
      </h1>
      <div className="block lg:flex gap-7 justify-center sm:pr-16 lg:px-16 mx-16 mb-16">
        <div className="hover:scale-105 transition-all shadow-lg hover:bg-slate-50 dark:bg-darken hover:dark:bg-darker p-4 py-10 rounded-lg gap-4 flex flex-col items-center w-full lg:w-1/4">
          <img
            src={htmlcss_badge}
            alt="HTML/CSS Certification"
            className="h-48 w-48 md:w-1/3 md:h-1/3 lg:w-52 lg:h-52 object-cover mb-4 rounded-full"
          />
          <p className="dark:text-slate-50 text-slate-800 lg:text-center mb-2 w-full lg:w-3/4">
            This certification demonstrates proficiency in HTML and CSS,
            covering the fundamentals of web development, including structuring
            and styling web pages effectively.
          </p>
          <a
            href="https://www.credly.com/badges/bf0c2cab-b0d5-4225-a0fe-fe45ac80c8df"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            See badge on: credly.com
          </a>
        </div>
        <div className="p-4 py-10 hover:scale-105 shadow-lg hover:bg-slate-50 dark:bg-darken hover:dark:bg-darker transition-all rounded-lg gap-4 flex flex-col items-center w-full lg:w-1/4">
          <img
            src={htmlcss_badge}
            alt="HTML/CSS Certification"
            className="h-48 w-48 md:w-1/3 md:h-1/3 lg:w-52 lg:h-52 object-cover mb-4 rounded-full"
          />
          <p className="dark:text-slate-50 text-slate-800 lg:text-center mb-2 w-full lg:w-3/4">
            This certification verifies skills in database management, including
            database design, SQL, and maintaining relational databases to ensure
            data integrity and security.
          </p>
          <a
            href="https://www.credly.com/badges/bf0c2cab-b0d5-4225-a0fe-fe45ac80c8df"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            See badge on: credly.com
          </a>
        </div>
      </div>
      <button
        type="button"
        className="rounded-lg bg-secondary dark:border-white py-3 px-5 hover:text-secondary hover:border-secondary dark:text-white dark:hover:bg-secondary-darken  transition-colors"
        onClick={onGoBack}
      >
        Go back to Overview
      </button>
    </section>
  );
}

export default Certifications;
