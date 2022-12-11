import { ReactComponent as IconPlayCircle } from "../images/play-circle.svg";

const Button = ({ copy, url, addClass, addClick, addLabel, darkTheme }) => {
  const buttonCSS =
    "btn w-100 p-2 d-flex align-items-center mb-2 justify-content-center";
  let svgCSS = "max-w-20 ms-1";

  if (darkTheme) {
    svgCSS += " fill-white";
  }

  if (url) {
    return (
      <a href={url} className={`${buttonCSS} ${addClass}`}>
        {copy} <IconPlayCircle className={svgCSS} />
      </a>
    );
  } else {
    return (
      <button onClick={addClick} className={`${buttonCSS} ${addClass}`}>
        {copy} <IconPlayCircle className={svgCSS} />
      </button>
    );
  }
};

export default Button;
