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
          <button className="py-3 px-5 btn btn-primary border-0 fs-5">
            View Resume
          </button>
        </div>
      </section>
      <section className="bg-secondary-subtle mt-5">
        <div className="d-flex justify-content-between">
          <img className="w-35" src={laptop} alt="laptop" />
          <div className="py-5 my-auto">
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
      <section className="py-5">
        <div className="container">
          <h5 className="text-secondary text-center">
            <strong>PROJECTS LIST</strong>
          </h5>
          <h1 className="pb-5 text-center">
            I have worked on various projects
          </h1>
          <div class="row row-cols-3 justify-content-between g-4">
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
              href="/"
            >
              <div class="col">
                <div className="d-flex justify-content-between">
                  <DesignServicesIcon className="text-primary fs-1" />
                  <h1 className="heading text-secondary">02</h1>
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
              href="/"
            >
              <div class="col">
                <div className="d-flex justify-content-between">
                  <DesignServicesIcon className="text-primary fs-1" />
                  <h1 className="heading text-secondary">03</h1>
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
              href="/"
            >
              <div class="col">
                <div className="d-flex justify-content-between">
                  <DesignServicesIcon className="text-primary fs-1" />
                  <h1 className="heading text-secondary">04</h1>
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
              href="/"
            >
              <div class="col">
                <div className="d-flex justify-content-between">
                  <DesignServicesIcon className="text-primary fs-1" />
                  <h1 className="heading text-secondary">05</h1>
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
              href="/"
            >
              <div class="col">
                <div className="d-flex justify-content-between">
                  <DesignServicesIcon className="text-primary fs-1" />
                  <h1 className="heading text-secondary">06</h1>
                </div>
                <h1 className="pb-2 title w-50">Linktree</h1>
                <h4 className="text-secondary">
                  A customizable webpage that houses all the important links
                  that you want to share with your audience.
                </h4>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
