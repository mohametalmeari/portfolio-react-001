import profile from "../assets/profile.svg";

const About = () => {
  return (
    <main className="about">
      <header className="about__header">
        <div className="about__header-info">
          <img className="about__header-img" src={profile} alt="Profile" />
          <h1 className="about__header-name">Pablo Designero</h1>
          <h2 className="about__header-niche">Designer & Unicorn Trainer</h2>
        </div>
        <p className="about__header-text">
        <b>Bio:</b><br/>
          Father of 3 humans, 5 unicorns & 2 dogs,I design since I can remember
          it. I often get asked where I get my inspiration from: in everyday’s
          lil’ details. And sometimes in leftover food I find in my beard.
        </p>
      </header>
      <div className="about__my-story">
        <p className="about__my-story-intro">
          When I was 5, I got adbucted by a unicorn family. When they returned
          me to earth, I joined a designer school. But, fo’ real, what I learned
          with my kidnaptive family really gave an edge to my creative language.
        </p>
        <p className="about__my-story-highlight">
          Being a human is way too complicated. Time to be a unicorn.
        </p>
        <p className="about__my-story-text">
          Try it and you’ll see. Then your Figma files are just gonna fly in
          color, glitter, interactions and autolayout.
        </p>
        <p className="about__my-story-highlight">
          Also, grow a beard. Check my bio if that is not clear.
        </p>
        <p className="about__my-story-text">
          Available for projects, from Monday to Tuesday, mainy between 14 and
          16. (Unless there is a unicorn race on TV - DUH -in that case, come
          back another day). Projects include, RocknRoll covers, furniture
          refurbishing, Unicorn potty training and more.
        </p>
      </div>
    </main>
  );
};

export default About;
