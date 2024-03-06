import React from "react";
import "../Footer/footer.css";
import { FaGithub, FaInstagram, FaLinkedin  } from "react-icons/fa";


function Footer() {
  return (
    <footer className="container-footer">
      <div className="container-footerContact">
        <ul>
          <li>
            <a href="https://github.com/jdgonzalez07">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/solutions_jd7/" rel="noreferrer"  target="_blank">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/juan-gonzalez-b0a3b5256/">
              <FaLinkedin />
            </a>
          </li>
        </ul>
        <p>&copy; 2024 JD Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
