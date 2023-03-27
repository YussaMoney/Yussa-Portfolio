import React from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import desktop from '../images/desktop.jpg';
import laptop from '../images/laptop.jpg';
import authorImg from '../images/me4 (2).jpg';

export default function About() {
  return (
    <div className="margin-top">
      <section className="text-center mb-3 bg-secondary-subtle">
        <div className="container py-5">
          <h1 className="heading">About Me</h1>
          <div className="d-flex justify-content-center">
            <a
              className="text-decoration-none active text-primary fs-5"
              href="/"
            >
              Home
            </a>
            <ArrowRightIcon className="text-secondary fs-2" />
            <p className="text-secondary fs-5"> About Me</p>
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
              <strong>HELLO, I AM A WEB DEVELOPER</strong>
            </h5>
            <h5 className="text-secondary py-4 lh-base">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Hi there! I'm a Knowledgeable Front End Developer adept at
              creating successful websites that meet customer needs.
              Specializing in collaborating with customers to gather
              requirements, produce plans and improve designs for usability and
              functionality. Technically proficient and analytical problem
              solver with calm and focused demeanor.
            </h5>

            <a href="https://docs.google.com/document/d/e/2PACX-1vQr5vCE5jOeTF5d8OuVB6_-YEQSnSEYnilKAfUSM7aCkK9ekSTnwgwJreK3eJNO7A/pub" className="py-3 px-5 mt-1 btn btn-primary border-0 fs-5">
              View CV
            </a>
          </div>
        </div>
      </section>
      <section className="bg-secondary-subtle py-5">
        <h1 className="text-center pb-4">
          Inspired and Motivated by the Desire to achieve Success
        </h1>
        <div className="container d-flex profile">
          <div className="info">
            <h5 className="text-secondary">
              <strong>Name:</strong>
              {' '}
              Yusuf Azeez
            </h5>
            <h5 className="text-secondary">
              <strong>From:</strong>
              {' '}
              Ibadan, Oyo
            </h5>
            <h5 className="text-secondary">
              <strong>Age:</strong>
              {' '}
              23
            </h5>
            <h5 className="text-secondary">
              <strong>Email:</strong>
              {' '}
              <span className="text-secondary">
                <a
                  className="text-decoration-none"
                  href="mailto:highshow74@gmail.com"
                >
                  highshow74@gmail.com
                </a>
              </span>
            </h5>
            <ul className="nav">
              <li className="nav-item">
                <a
                  className="nav-link text-secondary"
                  href="https://www.linkedin.com/in/yussamoney"
                >
                  <LinkedInIcon />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-secondary"
                  href="https://wa.me/+2348078773063"
                >
                  <WhatsAppIcon />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-secondary"
                  href="https://github.com/YussaMoney"
                >
                  <GitHubIcon />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-secondary"
                  href="https://www.twitter.com/YussaMoney"
                >
                  <TwitterIcon />
                </a>
              </li>
            </ul>
          </div>
          <div className="skills">
            <h1 className="px-5 my-skill">MY SKILLS</h1>
            <div className="text-secondary d-grid w-75">
              <div className="row">
                <h5 className="col">
                  <strong>HTML:</strong>
                </h5>
                <h5 className="col-2">EXPERT</h5>
              </div>
              <div className="row">
                <h5 className="col">
                  <strong>CSS3:</strong>
                </h5>
                <h5 className="col-2">EXPERT</h5>
              </div>
              <div className="row">
                <h5 className="col">
                  <strong>BOOTSTRAP:</strong>
                </h5>
                <h5 className="col-2">EXPERT</h5>
              </div>
              <div className="row">
                <h5 className="col">
                  <strong>JAVASCRIPT:</strong>
                </h5>
                <h5 className="col-2">INTERMEDIATE</h5>
              </div>
              <div className="row">
                <h5 className="col">
                  <strong>REACTJS:</strong>
                </h5>
                <h5 className="col-2">INTERMEDIATE</h5>
              </div>
              <div className="row">
                <h5 className="col">
                  <strong>GIT/GITHUB:</strong>
                </h5>
                <h5 className="col-2">EXPERT</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="education">
        <div className="py-5 container">
          <h5 className="text-secondary pb-3 text-center">
            <strong>EDUCATION</strong>
          </h5>
          <h1 className="text-center pb-5">My Education</h1>
          <div className="d-flex justify-content-between eduList">
            <div className="p-5 mb-3 bg-secondary-subtle border rounded who hover">
              <SchoolIcon className="text-primary fs-1 mb-3" />
              <h2 className="pb-2">Self Taught</h2>
              <h5 className="text-secondary fw-bolder">
                <a
                  className="text-decoration-none"
                  href="https://www.theodinproject.com"
                >
                  The Odin Project
                </a>
                {' '}
                and Youtube
              </h5>
              <h5 className="text-secondary lh-lg fw-bolder">
                2021 - Present
                {' '}
                <br />
                Still and Always Learning
              </h5>
            </div>
            <div className="py-4 px-5 mb-3 bg-secondary-subtle border rounded who hover">
              <PeopleIcon className="text-primary fs-1 mb-3" />
              <h2 className="pb-2">Also Taught</h2>
              <h5 className="text-secondary fw-bolder">
                By
                <a
                  className="text-decoration-none"
                  href="https://taofeekolalere.me/"
                >
                  {' '}
                  Taofeek Olalere
                </a>
              </h5>
              <h2 className="pt-3">Mentor</h2>
              <h5 className="text-secondary fw-bolder pb-2">
                By
                <a
                  className="text-decoration-none"
                  href="https://github.com/teekaytech"
                >
                  {' '}
                  Taofeek Olalere
                </a>
              </h5>
              <h5 className="text-secondary fw-bolder">
                And
                <a
                  className="text-decoration-none"
                  href="https://ng.linkedin.com/in/haleemah-modupeola-azeez"
                >
                  {' '}
                  Haleemah Azeez
                </a>
              </h5>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-secondary-subtle mt-5">
        <div className="d-flex justify-content-between">
          <img className="w-35" src={laptop} alt="laptop" />
          <div className="py-5 my-auto talk">
            {/*  eslint-disable-next-line react/no-unescaped-entities */}
            <h1 className="text-center">Let's Talk</h1>
            <a className="whatsapp-link" href="https://wa.me/+2348078773063">
              <button type="button" className="py-3 px-5 mt-1 btn btn-primary border-0 fs-5">
                <WhatsAppIcon className="fs-1" />
                {' '}
                +
                <span className="fs-5">2348078773063</span>
              </button>
            </a>
          </div>
          <img className="w-35" src={desktop} alt="desktop" />
        </div>
      </section>
    </div>
  );
}
