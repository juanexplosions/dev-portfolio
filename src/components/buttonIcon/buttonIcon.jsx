import { Icon } from "@iconify/react/dist/iconify.js";
import "./buttonIcon.css";

export default function ButtonIcon({ icon, text, url}) {
  return (
    <>
      <a href={url} target="_blank">
        <button className="button">
          <Icon icon={icon} className="icon-bttn" />
          <p className="icon-txt">{text}</p>
        </button>
      </a>
    </>
  );
}
