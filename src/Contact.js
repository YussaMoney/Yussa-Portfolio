import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import authorPic from "./images/author-pic.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Contact() {
  return (
    <div className="contact margin-top">
      <section className="text-center mb-3 bg-secondary-subtle">
        <div className="container py-5">
          <h1 className="heading">Contact Me</h1>
          <div className="d-flex justify-content-center">
            <a
              className="text-decoration-none active text-primary fs-5"
              href="/"
            >
              Home
            </a>
            <ArrowRightIcon className="text-secondary fs-2" />
            <p className="text-secondary fs-5"> Contact</p>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container d-flex profile">
          <div className="hello">
            <h3 className="text-secondary bolder py-2">
              Please get in touch if you think our work could be mutually
              beneficial!
            </h3>
            <h3 className="text-secondary bolder py-2">
              <LocationOnIcon className="fs-1" />{" "}
              <span className="px-3">
                No.7 Boluwaduro Road 2 Ido Local Government, Ibadan
              </span>
            </h3>
            <h3 className="text-secondary bolder py-2">
              <CallIcon className="fs-1" />{" "}
              <span className="px-3">+234-807-877-3063</span>
            </h3>
            <h3 className="text-secondary bolder py-2">
              <EmailIcon className="fs-1" />{" "}
              <span className="px-3">
                <a
                  className="text-decoration-none"
                  href="mailto:highshow74@gmail.com"
                >
                  highshow74@gmail.com
                </a>
              </span>
            </h3>
            <ul class="nav justify-content-center">
              <li class="nav-item">
                <a
                  class="nav-link text-secondary"
                  href="https://www.linkedin.com/in/yussamoney"
                >
                  <LinkedInIcon className="fs-1" />
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link text-secondary"
                  href="https://wa.me/+2348078773063"
                >
                  <WhatsAppIcon className="fs-1" />
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link text-secondary"
                  href="https://github.com/YussaMoney"
                >
                  <GitHubIcon className="fs-1" />
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link text-secondary"
                  href="https://www.twitter.com/YussaMoney"
                >
                  <TwitterIcon className="fs-1" />
                </a>
              </li>
            </ul>
          </div>
          <div className="authorImg">
            <img src={authorPic} className="w-100" alt="author-img" />
          </div>
        </div>
      </section>
    </div>
  );
}
