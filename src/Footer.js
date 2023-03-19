import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';


export default function Footer() {
  return (
    <div className='footer border-top'>
      <div className="container d-flex justify-content-between py-5 foot">
        <h5 className='text-secondary'>YussaMoney © Copyright 2023. Developed by YussaMoney</h5>
        <div>
          <ul class="nav">
            <li class="nav-item">
              <a class="nav-link text-secondary" href="https://www.linkedin.com/in/yussamoney">
                <LinkedInIcon />
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-secondary" href="https://wa.me/+2348078773063">
                <WhatsAppIcon />
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-secondary" href="https://github.com/YussaMoney">
                <GitHubIcon />
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-secondary" href="https://www.twitter.com/YussaMoney">
                <TwitterIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
