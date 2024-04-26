import { Icon } from "@iconify/react/dist/iconify.js";
import "./button.css";

export default function ButtonIcon({icon, text}) {
  return (
    <>
      <button className="button">
        <Icon icon={icon} className="icon-bttn" />
        <p className="icon-txt">{text}</p>
      </button>
    </>
  );
}
