import React from 'react';
import projectimage from '../components/projectimage.jpg';

const About = () => {
  return (
    <div className="About-trivia">

      <div>
        <img src={projectimage} alt="britannica" className="image-pic" />
      </div>
      

      <p>

      Etymology of the word trivia
      First off, what is the singular form of trivia? I mean, you realize that trivia is plural, right?

      Answer: trivium.

      So, technically, when we say a trivia question or a piece of trivia, we could actually refer to these as trivium. We don’t, and people would think you were weird if you did, but you could.

      “Trivium” in Latin, means “triple way” = tri (three) and via (way). In medieval Europe, students learned the “trivium,” which comprised of grammar, logic, and rhetoric. After students learned the trivium, they focused on the quadrivium, which comprised of arithmetic, geometry, music, and astronomy.

      The term trivia, as we think of it today, dates back to 1589, referring to insignificant pieces of information, which were only interesting to a few educated folks.


      <a href='https://www.sporcle.com/blog/2017/06/a-short-history-of-trivia/'><p className="trivia">Read more from about source</p></a>

      </p>
    </div>
  );
};




export default About;