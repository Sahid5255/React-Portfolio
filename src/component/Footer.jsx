import React from "react";
import Github from "./Assets/github.svg";
import twitter from "./Assets/twitter.svg";
import medium from "./Assets/medium.svg";
import angel from "./Assets/angel list.svg";

const socialIcons = [
  { name: "GitHub", icon: Github },
  { name: "Twitter", icon: twitter },
  { name: "Medium", icon: medium },
  { name: "AngelList", icon: angel },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__icons">
        {socialIcons.map((item) => (
          <img
            key={item.name}
            src={item.icon}
            alt={item.name}
            className="footer__icon"
          />
        ))}
      </div>
    </footer>
  );
}