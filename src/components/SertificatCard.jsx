/**
 * @copyright 2024 Dewangga Tirta Kencana
 * @license Apache-2.0
 */

/**
 * Node Module
 */
import PropTypes from "prop-types";

const SertificatCard = ({ imgSrc, title, sertificatLink, classes = "" }) => {
  return (
    <div
      className={
        "relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors " +
        classes
      }
    >
      <figure className="w-full h-48 rounded-lg mb-4 overflow-hidden">
        <img
          src={imgSrc}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="title-1 mb-3">{title}</h3>
        </div>

        <div className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0 cursor-pointer">
          <span className="material-symbols-rounded" aria-hidden="true">
            arrow_outward
          </span>
        </div>
      </div>

      <a
        href={sertificatLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0"
      ></a>
    </div>
  );
};

SertificatCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  sertificatLink: PropTypes.string,
  classes: PropTypes.string,
};

export default SertificatCard;
