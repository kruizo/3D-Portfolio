import React from "react";
import { htmlcss_badge, database_badge } from "../assets/images";

function Certifications({ onGoBack }) {
  return (
    <section className="w-full h-full flex flex-col items-center justify-center">
      <h1 className="font-bold text-[45px] sm:text-md lg:text-lg text-black dark:text-white mb-8 ">
        Certifications
        <span className="text-secondary">.</span>
      </h1>
      <div className="block lg:flex gap-7 justify-center sm:pr-16 lg:px-16 mx-16 mb-16">
        <div className="hover:scale-105 transition-all shadow-lg hover:bg-slate-10 dark:bg-darken hover:dark:bg-darker p-4 py-10 rounded-lg gap-4 flex flex-col items-center w-full md:w-3/4 lg:w-1/4">
          <img
            src={htmlcss_badge}
            alt="HTML/CSS Certification"
            className="h-48 w-48 md:w-1/3 md:h-1/3 lg:w-52 lg:h-52 object-cover mb-4 rounded-full"
          />
          <p className="dark:text-slate-50 text-slate-800 text-justify mb-2 w-full lg:w-3/4">
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
        <div className="p-4 py-10 hover:scale-105 shadow-lg hover:bg-slate-10 dark:bg-darken hover:dark:bg-darker transition-all rounded-lg gap-4 flex flex-col items-center w-full md:w-3/4 lg:w-1/4">
          <img
            src={htmlcss_badge}
            alt="HTML/CSS Certification"
            className="h-48 w-48 md:w-1/3 md:h-1/3 lg:w-52 lg:h-52 object-cover mb-4 rounded-full"
          />
          <p className="dark:text-slate-50 text-slate-800 text-justify mb-2 w-full lg:w-3/4">
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
        className="rounded-lg flex hover:border-b border-black items-center gap-3  text-black  dark:border-white py-3 px-5  dark:text-white transition-all"
        onClick={onGoBack}
      >
        <svg
          clipRule="evenodd"
          fillRule="evenodd"
          stroke-linejoin="round"
          stroke-miterlimit="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 dark:fill-white"
        >
          <path
            d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z"
            fill-rule="nonzero"
          />
        </svg>
        Go back to Overview
      </button>
    </section>
  );
}

export default Certifications;
