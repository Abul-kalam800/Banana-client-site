import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-11/12 mx-auto footer sm:footer-horizontal text-white p-10">
      <nav>
        <h6 className="footer-title">Contact info</h6>
        <p>This site is powerby Abul kalam</p>
        <p>Mobail: +0012348424</p>
        <p>Rangpur,Kurigram Bangladesh</p>
      </nav>
      <nav>
        <h6 className="footer-title">Trams & condition</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Privacy</a>
        <a className="link link-hover">Jobs</a>
        
      </nav>
      <nav>
        <h6 className="footer-title">Social Links</h6>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.facebook.com/bd.abulkalam800" target="_blank">
          <FaFacebook size={34}></FaFacebook>
          
          </a>
          <a href="https://github.com/Abul-kalam800" target="_blank">
         <FaGithub size={34}></FaGithub>
          </a>
          <a href="https://www.linkedin.com/in/mohammad-abul-kalam-226779303/" target="_blank">
         <FaLinkedin size={34}></FaLinkedin>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
