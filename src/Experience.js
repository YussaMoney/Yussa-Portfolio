import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export default function Experience() {
  return (
    <div className="experience margin-top">
      <section className="text-center mb-3 bg-secondary-subtle">
        <div className="container py-5">
          <h1 className="heading">Experience</h1>
          <div className="d-flex justify-content-center">
            <a
              className="text-decoration-none active text-primary fs-5"
              href="/"
            >
              Home
            </a>
            <ArrowRightIcon className="text-secondary fs-2" />
            <p className="text-secondary fs-5"> Experience</p>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container text-center">
          <h5 className="text-secondary">
            <strong>MY WORK EXPERIENCE</strong>
          </h5>
          <h1 className="pb-5">
            Kindly check out my resume below for my work experience
          </h1>
          <button className="py-3 px-5 btn btn-primary border-0 fs-5">
            View Resume
          </button>
        </div>
      </section>
    </div>
  );
}
