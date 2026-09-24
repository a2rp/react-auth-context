import {
    Code,
    CodeOff,
    Coffee,
    Email,
    Facebook,
    Favorite,
    GitHub,
    Language,
    LinkedIn,
    YouTube,
} from "@mui/icons-material";
import styles from "../assets/styles/footer.module.scss";

const links = [
    { label: "Portfolio", href: "https://www.ashishranjan.net/", icon: Language },
    { label: "GitHub", href: "https://github.com/a2rp", icon: GitHub },
    { label: "CodePen", href: "https://codepen.io/ash1198", icon: Code },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aashishranjan", icon: LinkedIn },
    { label: "Facebook", href: "https://www.facebook.com/theash.ashish/", icon: Facebook },
    { label: "YouTube", href: "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", icon: YouTube },
    { label: "Email", href: "mailto:ash.ranjan09@gmail.com", icon: Email },
    { label: "Support", href: "https://a2rp-donation-page.netlify.app/", icon: Favorite },
    { label: "Buy Me a Coffee", href: "https://buymeacoffee.com/a2rp", icon: Coffee },
    { label: "Patreon", href: "https://www.patreon.com/a2rp", icon: CodeOff },
];

const Footer = () => (
    <footer className={styles.container}>
        <p>
            Copyright &copy; {new Date().getFullYear()}{" "}
            <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">
                Ashish Ranjan
            </a>
        </p>
        <nav className={styles.links} aria-label="Social and support links">
            {links.map(({ label, href, icon: Icon }) => (
                <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    aria-label={label}
                    title={label}
                >
                    <Icon fontSize="small" aria-hidden="true" />
                </a>
            ))}
        </nav>
    </footer>
);

export default Footer;
