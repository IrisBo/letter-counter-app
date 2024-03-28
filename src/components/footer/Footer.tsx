import React from "react";

interface FooterProps {
  linkFacebook: string;
  linkInsta: string;
  linkLinkedin: string;
}

export function Footer(props: FooterProps) {
  const { linkFacebook, linkInsta, linkLinkedin } = props;
  // currentDate=new Date().toString

  return (
    <div>
      <a className="footer-links-images" href={linkInsta}>
        <img src="\src\assets\insta logo.jpg" 
        width="24px" 
        height="24px" />
      </a>
      <a className="footer-links-images"  href={linkLinkedin}>
        <img src="\src\assets\linkedin-icon.webp"
        width="24px" 
        height="24px" />
      </a>
      <a  className="footer-links-images"  href={linkFacebook}>
        <img
          src="\src\assets\Facebook_icon.svg.webp"
          width="24px"
          height="24px"
        />
      </a>
    </div>
  );
}
