export default function Projects() {
    return (
        <section id="projects" className="min-h-screen w-full flex items-center justify-center p-8 bg-transparent text-white">
            <div className="max-w-4xl w-full">
                <h2 className="text-4xl font-bold mb-6">Mes Projets</h2>
                <p className="text-lg leading-relaxed">
                    Voici quelques-uns des projets sur lesquels j'ai travaillé récemment. Chaque projet reflète mon engagement envers la qualité, l'innovation et la collaboration.
                </p>
                
                <ul className="mt-6 space-y-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <li className="bg-slate-800 p-4 rounded-lg">
                        <h3 className="text-2xl font-semibold">Projet 1: Application de Gestion de Tâches</h3>
                        <p className="mt-2">Une application web permettant aux utilisateurs de gérer leurs tâches quotidiennes avec des fonctionnalités de création, modification et suppression de tâches.</p>
                    </li>
                    <li className="bg-slate-800 p-4 rounded-lg">
                        <h3 className="text-2xl font-semibold">Projet 2: Portfolio Personnel</h3>
                        <p className="mt-2">Un site web personnel présentant mes compétences, expériences et projets, conçu avec une interface utilisateur moderne et réactive.</p>
                    </li>
                    <li className="bg-slate-800 p-4 rounded-lg">
                        <h3 className="text-2xl font-semibold">Projet 3: Blog Technique</h3>
                        <p className="mt-2">Un blog où je partage des articles techniques sur le développement web, les meilleures pratiques et les nouvelles technologies.</p>
                    </li>
                </ul>
                
            </div>
        </section>
    );
}