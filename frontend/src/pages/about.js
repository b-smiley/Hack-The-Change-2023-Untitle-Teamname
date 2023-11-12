import "./about.css"
import React from 'react';

const About = () => {
  return (
    <div className = "about">
      <div className = "sidebar-left"></div>
      <h1>About Us</h1>
      <img src="The_fellas.jpg" alt="Founding Farmers" width = "400" height = "300"/>
      <div className = 'body'>
        <p>We are a team of developers passionate about creating innovative solutions to real-world problems.
          we seek to bridge the gap between the average Albertan and its farmers.  Our idea is simple, cut out the
          middle man and let the people speak directly from the farmers.  In this day and age, technology has allowed
          people to be more connected than ever, yet somehow our connection with the hard working farmers right here 
          at home has been left behind.  That's where Fresh Farm comes in.  Here, farmers can directly sell their fresh
          goods directly to the consumer.  Not only that, but consumers can return feedback about their buying preferences
          so that farmers can learn and adapt to the changing market.  By directly connecting the producer to the consumers
          we seek to reduce waste and create a more sustainable environment where produce is locally produced and tailored 
          specifcally to the local demand.
        </p>
      </div>
      <div className = 'sidebar-right'></div>

    </div>
  );
};

export default About;
