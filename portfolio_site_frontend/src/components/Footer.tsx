import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/jalilgs" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/jalilgs/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="https://www.facebook.com/jalilgs" target="_blank" rel="noreferrer"><FacebookIcon/></a>
      </div>
      <p>A portfolio designed & built by <a href="https://github.com/jalilgs" target="_blank" rel="noreferrer">Gouas Abdeldjalil</a> with 💜</p>
    </footer>
  );
}

export default Footer;
