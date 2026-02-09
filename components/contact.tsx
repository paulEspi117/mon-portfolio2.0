export default function Contact() {
    return (
        <section id="contact" className="min-h-screen w-full flex items-center p-8 justify-center bg-transparent text-white">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="justify-center items-center flex flex-col">
                    <p className="font-semibold text-brand-secondary md:text-md text-1xl text-blue-300 ">Contactez moi</p>
                    <p className="mt-3 text-display-sm font-semibold text-primary md:text-display-md text-4xl">Entrer en contact</p>
                </div>
                
                <div className="mt-12 md:mt-16">
                    <ul className="grid w-full grid-cols-1 justify-items-center gap-x-8 gap-y-10 sm:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
                        <li className="flex max-w-sm flex-col items-center text-center">
                            <div></div>
                            <h3 className="mt-4 text-lg font-semibold text-primary md:mt-5">Email</h3>
                        </li>
                        <li className="flex max-w-sm flex-col items-center text-center">
                            <div></div>
                            <h3 className="mt-4 text-lg font-semibold text-primary md:mt-5">Téléphone</h3>
                        </li>
                        <li className="flex max-w-sm flex-col items-center text-center">
                            <div></div>
                            <h3 className="mt-4 text-lg font-semibold text-primary md:mt-5">LinkedIn</h3>
                        </li>
                    </ul>
                </div>
            </div>
            
        </section>
    );
}
