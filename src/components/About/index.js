import React from "react";

// React components must always return a single parent JSX element. However, this element may have many children elements.
const About = () => {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img
        src='/assets/cover/cover-image.jpg'
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      />
    </section>
  );
};

export default About;
