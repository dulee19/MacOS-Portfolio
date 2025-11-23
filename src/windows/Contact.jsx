import { WindowControls } from "../components";
import WindowWrapper from "../hoc/WindowWrapper";
import { socials } from "../constants";
import { Mail, PhoneIcon } from "lucide-react";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>

      <div className="p-5 space-y-5">
        <div className="flex gap-3 items-center">
          <img
            src="/images/dusan.avif"
            alt="Dušan"
            className="w-20 rounded-full"
          />
          <a href="mailto:adusan53@gmail.com">
            <Mail />
            <span>adusan53@gmail.com</span>
          </a>
          <a href="tel:0621085057">
            <PhoneIcon />
            <span>0621085057</span>
          </a>
        </div>
        <h3>Let's Connect</h3>
        <p>Got an idea? A bug to squash? Or just wanna talk tech? I'm in!</p>

        <ul>
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
              >
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
