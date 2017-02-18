import React from 'react';
import classnames from 'classnames';

const Hero = ({ text, children}) => (
  <section className="hero is-light is-bold">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">
          {children}
        </h1>
      </div>
    </div>
  </section>
);

export default Hero;
