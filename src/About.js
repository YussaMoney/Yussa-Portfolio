import React from "react";
import authorImg from './images/me4 (2).jpg';

export default function About() {
  return (
    <div className="about-me bg-secondary-subtle">
      <section className="container text-center">
        <h1>About Me</h1>
        <p>
          <a href="/">Home</a> <span className="text-secondary">About Me</span>
        </p>
      </section>
      <section className="py-5">
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
