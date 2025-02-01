import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
  const links = [
    { name: "Find Job", url: "/find-jobs" },
    { name: "Find Talent", url: "/find-talent" },
    { name: "Post Job", url: "/post-job" },
    { name: "Posted Job", url: "/posted-job" },
    { name: "Job History", url: "/job-history" },
  ]
  const location=useLocation();
  return (
    <div className="flex gap-4 h-full items-center">
    {
        links.map((link, index) =><div className={`${location.pathname.includes(link.url) ? "border-quarter-spanish-white-700 text-quarter-spanish-white-600" : "border-transparent"} text-white cursor-pointer border-t-[3px] flex items-center h-full`}>
            <Link key={index} to={link.url}>{link.name}</Link>
        </div>)

    }
    </div>
  );
};

export default NavLinks;
