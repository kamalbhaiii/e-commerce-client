import React from "react";
import HeartAnimated from "../../assets/animated/heart";

const Footer = () => {
  return (
    <footer className="h-full bg-base-300 -text-base-300 flex justify-between items-center px-1 sm:px-2 md:px-4">
      <div className="flex tracking-wide items-center">
        Created & Designed with <HeartAnimated className="mx-2" /> by
        <a
          className="ml-2"
          target="_blank"
          rel="noreferrer"
          href="http://linkedin.com/in/kamalsharma05"
        >
          {import.meta.env.VITE_APP_OWNER}
        </a>
      </div>
      <div className="flex">
        <a
          href={import.meta.env.VITE_APP_SOURCE_CODE_LINK}
          target="_blank"
          rel="noreferrer"
          className="text-primary hover:underline"
        >
          Source Code
        </a>
      </div>
    </footer>
  );
};

export default Footer;
