/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import authorPic from '../images/author-pic.jpg';
import authorImg from '../images/me4 (2).jpg';

export default function Content() {
  return (
    <div className="container-fluid px-0">
      <div className="margin-top">
        <section className="bg-secondary-subtle py-5">
          <div className="container d-flex profile">
            <div className="hello">
              <h5 className="text-secondary bolder">
                <strong>HELLO</strong>
              </h5>
              <h1 className="py-3">
                I'm
                {' '}
                <strong>Yusuf Azeez</strong>
              </h1>
              <h4 className="text-footer pb-3 text-secondary">
                Developer / Programmer / Engineer
              </h4>
              <a href="/contact" className="py-3 px-5 btn btn-primary border-0 fs-5">
                Hire Me
              </a>
              <a href="/" className="py-3 px-5 m-3 btn btn-outline-primary fs-5">
                Portfolio
              </a>
            </div>
            <div className="authorImg">
              <img src={authorPic} className="w-100" alt="author-img" />
            </div>
          </div>
        </section>
        <section className="py-5">
          <div className="container d-flex profile">
            <div className="authorImg">
              <img src={authorImg} className="w-100" alt="author-img" />
            </div>
            <div className="who">
              <h5 className="text-secondary img-footer">
                <strong>WHO AM I?</strong>
              </h5>
              <h2 className="pt-3">
                I'm
                {' '}
                <strong>Yusuf Azeez</strong>
              </h2>
              <h2 className="pb-3">A Developer / Programmer / Engineer</h2>
              <h5 className="text-secondary pb-5 lh-base">
                Hi there! I'm a Knowledgeable Front End Developer adept at
                creating successful websites that meet customer needs.
                Specializing in collaborating with customers to gather
                requirements, produce plans and improve designs for usability and
                functionality. Technically proficient and analytical problem
                solver with calm and focused demeanor.
              </h5>
              <a href="https://docs.google.com/document/d/e/2PACX-1vQr5vCE5jOeTF5d8OuVB6_-YEQSnSEYnilKAfUSM7aCkK9ekSTnwgwJreK3eJNO7A/pub" className="py-3 px-5 btn btn-primary border-0 fs-5">
                View CV
              </a>
            </div>
          </div>
        </section>
        <section className="bg-secondary-subtle py-5">
          <div className="container resume">
            <h5 className="text-secondary pb-3">
              <strong>MY RESUME</strong>
            </h5>
            <h2 className="pb-3 fw-bolder">
              I Would Love To Make Your Ideas Real
            </h2>
            <h5 className="text-secondary pb-5 lh-base">
              I'm very passionate about web development.
              {' '}
              <br />
              I can give your business a new creative start right away!
              {' '}
              <br />
              {' '}
              Hire me for your Awesome Project!
            </h5>
            <a href="https://docs.google.com/document/d/e/2PACX-1vQr5vCE5jOeTF5d8OuVB6_-YEQSnSEYnilKAfUSM7aCkK9ekSTnwgwJreK3eJNO7A/pub" className="py-3 px-5 btn btn-primary border-0 fs-5">
              View Resume
            </a>
          </div>
        </section>
        <section className="py-5 text-center">
          <div className="container inTouch">
            <h5 className="text-secondary">
              <strong>GET IN TOUCH</strong>
            </h5>
            <h2 className=" fw-bolder pb-4">Let's Start A Project! Hire Me.</h2>
            <a href="/contact" className="py-3 px-5 btn btn-primary  border-0 fs-5">
              Hire Me
            </a>
            <a href="/contact" className="py-3 px-5 m-3 btn btn-outline-primary fs-5 inTouchBtn">
              Get In Touch
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
