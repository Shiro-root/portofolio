/**
 * @copyright 2024 Dewangga Tirta Kencana
 * @license Apache-2.0
 */

/**
 * Component
 */
import SertificatCard from "./SertificatCard";

const sertificat = [
  {
    imgSrc: "./images/sertificat-1.png",
    title: "Mulai Pemograman dengan Python",
    sertificatLink:
      "https://drive.google.com/file/d/12nTVjd9oNGZKdkSDqJ1cepPSGxcs5RMp/view?usp=sharing",
  },
  {
    imgSrc: "./images/sertificat-2.png",
    title: "Dasar Pemograman Web",
    sertificatLink:
      "https://drive.google.com/file/d/1P1elZ8n1CRCJ2ZwcvZ9Y7oMM6TgXe_9G/view?usp=sharing",
  },
  {
    imgSrc: "./images/sertificat-3.png",
    title: "Dasar Ai",
    sertificatLink:
      "https://drive.google.com/file/d/1LhTm7LhUveTfF4_Z-Zs35YcyqPFigI0Y/view?usp=sharing",
  },
  {
    imgSrc: "./images/sertificat-4.png",
    title: "Dasar Pemograman Javascript",
    sertificatLink:
      "https://drive.google.com/file/d/11QmqHmYEvhqzeoX9txLsKISDTX1vVlix/view?usp=sharing",
  },
  {
    imgSrc: "./images/sertificat-5.png",
    title: "Dasar SQL",
    sertificatLink:
      "https://drive.google.com/file/d/1VcwLt6qXTPNcyCVQfvY4W3LIBKXIMMfb/view?usp=sharing",
  },
  {
    imgSrc: "./images/sertificat-6.png",
    title: "Dasar Visualisasi Data",
    sertificatLink:
      "https://drive.google.com/file/d/1Ypovrzv9GEEpLA7xZwCVXF2kz-azgkQt/view?usp=sharing",
  },
  {
    imgSrc: "./images/sertificat-7.png",
    title: "Dasar Front-End web ",
    sertificatLink:
      "https://drive.google.com/file/d/1tutTytJbGvFjGQu-2kCaRlqPQhtpGQSb/view?usp=sharing",
  },
];

const Sertificat = () => {
  return (
    <section id="sertificat" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My Certificate</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))]">
          {sertificat.map(({ imgSrc, title, sertificatLink }, key) => (
            <SertificatCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              sertificatLink={sertificatLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sertificat;
