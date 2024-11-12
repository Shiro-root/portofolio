/**
 * @copyright 2024 Dewangga Tirta Kencana
 * @license Apache-2.0
 */

/**
 * Component
 */
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "./images/project-1.jpg",
    title: "Web Portofolio v2",
    tags: ["Html", "Css", "Javascript"],
    projectLink: "https://shiro-root.github.io/portofoliodewangga/",
  },
  {
    imgSrc: "./images/project-2.jpg",
    title: "Bookshelf App",
    tags: ["Tailwind", "Local Storage", "Javascript", "html"],
    projectLink: "https://shiro-root.github.io/tugasbook/",
  },
  {
    imgSrc: "./images/project-3.jpg",
    title: "Website Portofolio v1 ",
    tags: ["Html, Css, Javascript"],
    projectLink: "https://shiro-root.github.io/mywebsite/",
  },
  {
    imgSrc: "./images/project-4.jpg",
    title: "Fighting Game  ",
    tags: ["Html canvas, Css, Javascript"],
    projectLink: "https://fighting-game-dewangga.netlify.app/",
  },
  {
    imgSrc: "./images/project-5.png",
    title: "Seahorse CyberPunk  ",
    tags: ["Html canvas, Css, Javascript"],
    projectLink: "https://shiro-root.github.io/javascript-seahorse/",
  },
  {
    imgSrc: "./images/project-6.png",
    title: "Portofolio V3  ",
    tags: ["Html, Css "],
    projectLink: "https://shiro-root.github.io/portofoliosimplee/",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
