import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import GithubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>
        {" "}
        Copyrightⓒ {year}
        All rights reserved.{" "}
      </p>{" "}
      <div className="Icon">
        <a
          href="https://in.linkedin.com/in/ajinkya-kate"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>{" "}
        <a
          href="https://github.com/AjinkyaKate"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon />
        </a>{" "}
        <a
          href="https://twitter.com/Ajinkya_Kate_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon />
        </a>{" "}
        <a
          href="mailto:ajinkyakate2001@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <EmailIcon />
        </a>{" "}
      </div>{" "}
    </footer>
  );
}

export default Footer;
