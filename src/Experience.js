import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import laptop from "./images/laptop.jpg";
import desktop from "./images/desktop.jpg";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

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
          <a
            href="https://docs.google.com/document/d/e/2PACX-1vQr5vCE5jOeTF5d8OuVB6_-YEQSnSEYnilKAfUSM7aCkK9ekSTnwgwJreK3eJNO7A/pub"
            className="py-3 px-5 btn btn-primary border-0 fs-5"
          >
            View Resume
          </a>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <h5 className="text-secondary text-center">
            <strong>PROJECTS LIST</strong>
          </h5>
          <h1 className="pb-5 text-center">
            I have worked on various projects
          </h1>
          <div class="project-list row row-cols-3 justify-content-between g-4">
            <a
              className="w-30 text-decoration-none bg-secondary-subtle border rounded p-4 hover"
              href="https://linktree-c0xa9h5ne-yussamoney.vercel.app"
            >
              <div class="col">
                <div className="d-flex justify-content-between">
                  <DesignServicesIcon className="text-primary fs-1" />
                  <h1 className="heading text-secondary">01</h1>
                </div>
                <h1 className="pb-2 title w-50">Linktree</h1>
                <h4 className="text-secondary">
                  A customizable webpage that houses all the important links
                  that you want to share with your audience.
                </h4>
              </div>
            </a>
            <a
              className="w-30 text-decoration-none bg-secondary-subtle border rounded p-4 hover"
              href="https://yussamoney.github.io/Library"
            >
              <div class="col">
                <div className="d-flex justify-content-between">
                  <DesignServicesIcon className="text-primary fs-1" />
                  <h1 className="heading text-secondary">02</h1>
                </div>
                <h1 className="pb-2 title w-50">Library</h1>
                <h4 className="text-secondary">
                  A webpage / app where someone can add or store new book(s) and
                  can also remove or delete book(s).
                </h4>
              </div>
            </a>
            <a
              className="w-30 text-decoration-none bg-secondary-subtle border rounded p-4 hover"
              href="https://yussamoney.github.io/Weather-App/"
            >
              <div class="col">
                <div className="d-flex justify-content-between">
                  <DesignServicesIcon className="text-primary fs-1" />
                  <h1 className="heading text-secondary">03</h1>
                </div>
                <h1 className="pb-2 title w-75">Weather App</h1>
                <h4 className="text-secondary">
                  An app for forecasting current weather of your choice location
                  with random beautiful image of the input location.
                </h4>
              </div>
            </a>
            <a
              className="w-30 text-decoration-none bg-secondary-subtle border rounded p-4 hover"
              href="https://yussamoney.github.io/Simple_HTML_Calculator"
            >
              <div class="col">
                <div className="d-flex justify-content-between">
                  <DesignServicesIcon className="text-primary fs-1" />
                  <h1 className="heading text-secondary">04</h1>
                </div>
                <h1 className="pb-2 title">Simple HTML Calculator</h1>
                <h4 className="text-secondary">
                  A form-made app with only the four basic arithmetic operators
                  (addition, subtraction, multiplication, and division).
                </h4>
              </div>
            </a>
            <a
              className="w-30 text-decoration-none bg-secondary-subtle border rounded p-4 hover"
              href="https://yussamoney.github.io/Tic_Tac_Toe-Game/"
            >
              <div class="col">
                <div className="d-flex justify-content-between">
                  <DesignServicesIcon className="text-primary fs-1" />
                  <h1 className="heading text-secondary">05</h1>
                </div>
                <h1 className="pb-2 title w-75">Tic Tac Toe</h1>
                <h4 className="text-secondary">
                  An app / game engaged by two players(X and O) where winning is
                  by 3 matched row or column and/or diagonal.
                </h4>
              </div>
            </a>
            <a
              className="w-30 text-decoration-none bg-secondary-subtle border rounded p-4 hover"
              href="https://yussamoney.github.io/My_Portfolio/"
            >
              <div class="col">
                <div className="d-flex justify-content-between">
                  <DesignServicesIcon className="text-primary fs-1" />
                  <h1 className="heading text-secondary">06</h1>
                </div>
                <h1 className="pb-2 title w-50">Portfolio</h1>
                <h4 className="text-secondary">
                  A customizable webpage that showcase one's talents or creative
                  works to potential employers or clients.
                </h4>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="bg-secondary-subtle mt-5">
        <div className="d-flex justify-content-between">
          <img className="w-35" src={laptop} alt="laptop" />
          <div className="py-5 my-auto talk">
            <h1 className="text-center">Let's Talk</h1>
            <a class="whatsapp-link" href="https://wa.me/+2348078773063">
              <button className="py-3 px-5 mt-1 btn btn-primary border-0 fs-5">
                <WhatsAppIcon className="fs-1" /> +
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
