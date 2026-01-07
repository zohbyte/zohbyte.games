import React from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";

export default function Footer() {
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className="footer-text">
          Based on{" "}
          <a
            href="https://github.com/saadpasta/developerFolio"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            developerFolio
          </a>
          {" • "}Modified by{" "}
          <a
            href="https://github.com/zohbyte"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            zohbyte
          </a>
        </p>
      </div>
    </Fade>
  );
}
