import GooeyNav from './GooeyNav'
const items = [
        { label: "Accueil", href: "#home" },
        { label: "A propos", href: "#about" },
        { label: "Projets", href: "#projects" },
        { label: "Contact", href: "#contact" },
        ];

export default function Navbar() {
    return (
        <div style={{ height: '600px', position: 'relative' }} className='flex space-x-6 justify-center p-4'>
            <GooeyNav
                items={items}
                particleCount={9}
                particleDistances={[90, 10]}
                particleR={200}
                initialActiveIndex={0}
                animationTime={600}
                timeVariance={900}
                colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
        </div>
    );
}