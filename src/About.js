import React from "react";
import authorImg from "./images/me4 (2).jpg";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function About() {
  return (
    <div className="about">
      <section className="text-center mb-3 bg-secondary-subtle">
        <div className="container py-5">
          <h1 className="heading">About Me</h1>
          <div className="d-flex justify-content-center">
            <a className="nav-link active text-primary fs-5" href="/">
              Home
            </a>
            <ArrowRightIcon className="text-secondary fs-2"/>
            <p className="text-secondary fs-5"> About Me</p>
          </div>
        </div>
      </section>
      <section className="py-5 bg-">
        <div className="container d-flex profile">
          <div className="authorImg">
            <img src={authorImg} className="w-100" alt="author-img" />
          </div>
          <div className="who">
            <h5 className="text-secondary">
              <strong>HELLO, I AM A WEB DEVELOPER</strong>
            </h5>
            <h5 className="text-secondary pb-5 lh-base border-bottom">
              Hi there! I'm a Knowledgeable Front End Developer adept at
              creating successful websites that meet customer needs.
              Specializing in collaborating with customers to gather
              requirements, produce plans and improve designs for usability and
              functionality. Technically proficient and analytical problem
              solver with calm and focused demeanor.
            </h5>

            <button className="py-3 px-5 btn btn-primary border-0 fs-5">
              View CV
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
