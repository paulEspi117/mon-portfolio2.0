export default function Navbar() {
    return (
        <nav>
            <ul className="flex space-x-6 justify-center p-4 bg-slate-950/50 backdrop-blur-md  ">
                <li>
                    <a href="#home" onClick={(e) => {e.preventDefault(); document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });}}className="text-white hover:text-blue-400">Accueil</a>
                </li>
                <li>
                    <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }); }} className="text-white hover:text-blue-400">À propos</a>
                </li>
                <li>
                    <a href="#projects" className="text-white hover:text-blue-400">Projets</a>
                </li>
                <li>
                    <a href="#contact" className="text-white hover:text-blue-400">Contact</a>
                </li>
            </ul>
        </nav>
    );
}