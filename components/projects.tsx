import SpotlightCard from './SpotlightCard';
export default function Projects() {
    return (
        <section id="projects" className="min-h-screen w-full flex items-center justify-center p-8 bg-transparent text-white">
            <div className="max-w-4xl w-full">
                <h2 className="text-5xl font-bold mb-15 text-center">Mes Projets</h2>
                               
                <ul className="mt-6 space-y-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <li className="">
                        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(100, 40, 300, 0.5)">
                        <h1 className='font-bold'>Création de mon site portfolio</h1>
                        <br />
                        <h2>Création de mon site portfolio à l'aide de nextJS, TailWindCSS et React Bits</h2>
                        </SpotlightCard>
                    </li>
                    <li className="">
                        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(100, 40, 300, 0.5)">
                        <h1 className='font-bold'>Création de mon site portfolio</h1>
                        <br />
                        <h2>Création de mon site portfolio à l'aide de nextJS, TailWindCSS et React Bits</h2>
                        </SpotlightCard>
                    </li>
                    <li className="">
                        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(100, 40, 300, 0.5)">
                        <h1 className='font-bold'>Création de mon site portfolio</h1>
                        <br />
                        <h2>Création de mon site portfolio à l'aide de nextJS, TailWindCSS et React Bits</h2>
                        </SpotlightCard>
                    </li>
                    <li className="">
                        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(100, 40, 300, 0.5)">
                        <h1 className='font-bold'>Création de mon site portfolio</h1>
                        <br />
                        <h2>Création de mon site portfolio à l'aide de nextJS, TailWindCSS et React Bits</h2>
                        </SpotlightCard>
                    </li>
                </ul>
                
            </div>
        </section>
    );
}