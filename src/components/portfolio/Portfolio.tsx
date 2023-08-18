import "./portfolio.css";
import IMG1 from "../../assets/color_picker.png";
import IMG2 from "../../assets/health_meal.png";
import IMG3 from "../../assets/nature_tours.png";
import IMG4 from "../../assets/reuseable_components.png";
import IMG5 from "../../assets/portfolio_Pizza.png";
import IMG6 from "../../assets/world_tour.jpg";

type DataObj = {
  id: number;
  image: string;
  title: string;
  git: string;
  demo: string;
};

const data: DataObj[] = [
  {
    id: 1,
    image: IMG1,
    title: "React color picker with drag and drop",
    git: "https://github.com/0Parus0/react-color-picker",
    demo: "https://parus-color-picker.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "A healthy meal delivered to your door, every single day",
    git: "https://github.com/0Parus0/Omnifood-project",
    demo: "https://omnifood-never-cook.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title:
      "A landing page for a company which arranges the tours for adventurous people",
    git: "https://github.com/0Parus0/natours",
    demo: "https://parus-natours.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Highly customizable, reuseable react components for the team",
    git: "https://github.com/0Parus0/reuseable-react-components",
    demo: "https://parus-reuseable-react-components.netlify.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Out of the oven, straight to you best pizza",
    git: "https://github.com/0Parus0/fast-track-pizza",
    demo: "https://fast-track-pizza.netlify.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Tour the World and we will track your steps",
    git: "https://github.com/0Parus0/worldwise",
    demo: "https://parus-worldwise.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(
          ({ id, image, title, git, demo }: DataObj): React.ReactNode => {
            return (
              <article className="portfolio__item" key={id}>
                <div className="portfolio__item-image">
                  <img src={image} alt="portfolio image" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={git} className="btn btn-primary" target="_blank">
                    Github
                  </a>
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Live Demo
                  </a>
                </div>
              </article>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Portfolio;
