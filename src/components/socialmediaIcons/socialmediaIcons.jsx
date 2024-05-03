import { Icon } from "@iconify/react/dist/iconify.js";
import "./socialmediaIcons.css";

export default function SocialMediaIcons() {
  const socialMediaItems = [
    { name: "linkedin-box-fill", url: "https://www.linkedin.com/in/juan-felipe-peralta/" },
    { name: "github-fill", url: "https://github.com/juanexplosions" },
    { name: "instagram-fill", url: "https://www.instagram.com/juanexplosions/" },
    { name: "tiktok-fill", url: "https://www.tiktok.com/@juanexplosions" },
  ];

  return (
    <div className="socialmedia-icons">
      {socialMediaItems.map((item, index) => (
        <a key={index} href={item.url} target="_blank">
          <Icon icon={`ri:${item.name}`} className="icon-socialmedia" />
        </a>
      ))}
    </div>
  );
}
