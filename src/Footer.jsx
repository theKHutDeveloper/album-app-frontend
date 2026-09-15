import './App.css'

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <p className="tagline">&copy; {currentYear} Needle Drop. All rights reserved.</p>
        </footer>
    );
}