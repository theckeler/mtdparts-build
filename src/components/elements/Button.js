import { ReactComponent as IconPlayCircle } from "../images/play-circle.svg";

const Button = ({ copy, url, addClass, addClick }) => {
  const buttonCSS =
    "btn w-100 p-2 d-flex align-items-center mb-2 justify-content-center";

  if (url) {
    return (
      <a href={url} className={`${buttonCSS} ${addClass}`}>
        {copy} <IconPlayCircle className="max-w-20 ms-1" />
      </a>
    );
  } else {
    return (
      <button onClick={addClick} className={`${buttonCSS} ${addClass}`}>
        {copy} <IconPlayCircle className="max-w-20 ms-1" />
      </button>
    );
  }
};

export default Button;
