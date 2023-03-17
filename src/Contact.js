import React from 'react';
import ArrowRightIcon from "@mui/icons-material/ArrowRight";


export default function Contact() {
  return (
    <div className='contact margin-top'>
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
    </div>
  )
}
