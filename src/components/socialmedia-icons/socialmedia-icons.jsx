import { Icon } from "@iconify/react/dist/iconify.js";
import "./socialmedia-icons.css";

export default function SocialMediaIcons() {
  const socialMediaItems = [
    { name: "linkedin-box-fill", url: "URL_de_LinkedIn" },
    { name: "github-fill", url: "URL_de_GitHub" },
    { name: "instagram-fill", url: "URL_de_Instagram" },
    { name: "tiktok-fill", url: "URL_de_TikTok" },
  ];

  return (
    <div className="socialmedia-icons">
      {socialMediaItems.map((item, index) => (
        <a key={index} href={item.url}>
          <Icon icon={`ri:${item.name}`} className="icon-socialmedia" />
        </a>
      ))}
    </div>
  );
}
