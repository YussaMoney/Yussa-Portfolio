import React from 'react'

export default function Content() {
  return (
    <div className="container-fluid px-0">
      <div className='content'>
        <section className='bg-secondary-subtle py-5'>
          <div className="container">
            <h5>Hello</h5>
            <h2>I'm <strong>Yusuf Azeez</strong></h2>
            <h4 className='text-footer'>Developer / Programmer / Engineer</h4>
            <button className='py-3 px-5 btn btn-primary border-0 fs-5'>Hire Me</button>
            <button className='py-3 px-5 m-3 btn btn-outline-primary fs-5'>Portfolio</button>
          </div>
          <div>
            <img src="{}" alt="author-img" />
          </div>
        </section>
        <section className='py-5'>
          <div className="container">
            <img src="{}" alt="author-img" />
            <h5 className='text-secondary'>WHO AM I?</h5>
            <h2>I'm <strong>Yusuf Azeez</strong></h2>
            <h2>A Developer / Programmer / Engineer</h2>
            <p>
              Hi there! I'm very passionate about web development.I build professional
              and bespoke websites. I am looking for a web developer position in a
              reputed software company that can help me to achieve my goal.
            </p>
            <button className='py-3 px-5 btn btn-primary border-0 fs-5'>View CV</button>
          </div>
        </section>
        <section className='bg-secondary-subtle py-5'>
          <div className="container">
            <h5 className='text-secondary'>MY RESUME</h5>
            <h2>I Would Love To Make Your Ideas Real</h2>
            <p>
              I can give your business a new creative start right away! Hire me
              for your Awesome Project!
            </p>
            <button className='py-3 px-5 btn btn-primary border-0 fs-5'>View Resume</button>
          </div>
        </section>
        <section className='py-5 text-center'>
          <div className="container">
            <h5 className='text-secondary'>GET IN TOUCH</h5>
            <h2>Let's Start A Project! Hire Me.</h2>
            <button className='py-3 px-5 btn btn-primary  border-0 fs-5'>Hire Me</button>
            <button className='py-3 px-5 m-3 btn btn-outline-primary fs-5'>Get In Touch</button>
          </div>
        </section>
    </div>
    </div>
  )
}
