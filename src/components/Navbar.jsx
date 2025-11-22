import { navIcons, navLinks } from "../constants"
import { useEffect, useState } from "react"

const Navbar = () => {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(new Date());
        }, 1000)

        return () => clearInterval(interval);
    }, []);

    const formatted = new Intl.DateTimeFormat("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true
    }).format(now);

  return (
    <nav>
        <div>
            <img 
                src="/images/logo.svg"
                alt="Logo"
            />
            <p className="font-bold">Dušan's Portfolio</p>
        
            <ul>
                {navLinks.map((link) => (
                    <li key={link.id}>
                        {link.name}
                    </li>
                ))}
            </ul>
        </div>

        <div>
            <ul>
                {navIcons.map((icon) => (
                    <li key={icon.id}>
                        <img 
                            src={icon.img}
                            alt={`icon-${icon.id}` ?? "Icon"}
                            className="icon-hover"
                        />
                    </li>
                ))}
            </ul>

            <time dateTime={now.toISOString()}>
                {formatted}
            </time>

        </div>
    </nav>
  )
}

export default Navbar