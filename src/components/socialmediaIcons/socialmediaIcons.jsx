import { Icon } from "@iconify/react/dist/iconify.js";
import "./socialmediaIcons.css";

export default function SocialMediaIcons() {
  const socialMediaItems = [
    { name: "linkedin-box-fill", url: "https://www.linkedin.com/in/juan-felipe-peralta/", label: "LinkedIn"},
    { name: "github-fill", url: "https://github.com/juanexplosions", label: "GitHub" },
    { name: "instagram-fill", url: "https://www.instagram.com/juanexplosions/", label: "Instagram" },
    { name: "tiktok-fill", url: "https://www.tiktok.com/@juanexplosions", label: "TikTok"},
  ];

  return (
    <div className="socialmedia-icons">
      {socialMediaItems.map((item, index) => (
        <a key={index} href={item.url} target="_blank" aria-label={item.label}>
          <Icon icon={`ri:${item.name}`} className="icon-socialmedia" />
        </a>
      ))}
    </div>
  );
}
