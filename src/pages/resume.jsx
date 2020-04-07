import React from "react";
import Helmet from "react-helmet";
import Nav from "../components/Nav";
import SocialmediaNav from "../components/SocialMediaNav";

const Resume = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sherzod Nimatullo | Resume</title>
      </Helmet>
      <Nav />
      <div className="intro">
        <h2>Resume</h2>
        <p>My resume</p>
      </div>
      <div className="resumeContent">
        <iframe
          src="https://drive.google.com/file/d/1A9pWHYKUqq8OBflK99AIxJahZ96jUa-_/preview"
          width="1000px"
          height="1100px"
        ></iframe>
      </div>
      <SocialmediaNav />
    </>
  );
};

export default Resume;
