export default function Contact() {
    return (
        <section id="contact" className="min-h-screen w-full flex items-center justify-center p-8 bg-transparent text-white">
            <div className="max-w-4xl w-full">
                <h2 className="text-5xl font-bold mb-15 text-center">Contactez Moi</h2>
                <form className="mt-6 space-y-4 max-w-lg mx-auto">
                    <div>
                        <label htmlFor="name" className="block text-lg font-medium mb-2">Nom</label>
                        <input type="text" id="name" name="name" className="w-full p-3 rounded-md bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
                        <input type="email" id="email" name="email" className="w-full p-3 rounded-md bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
                        <textarea id="message" name="message" rows={5} className="w-full p-3 rounded-md bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-medium transition-colors duration-300">Envoyer</button>
                    </div>
                </form>
            </div>
        </section>
    );
}
