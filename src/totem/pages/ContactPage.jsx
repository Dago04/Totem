import { MapEmbed } from "../components";
import { ContactForm } from "../components/ContactForm";
export const ContactPage = () => {
    return (
        <main className="min-h-[78vh] container mx-auto">
            <section className="flex flex-col px-3 justify-center items-start lg:flex-row lg:px-20 lg:py-40 lg:gap-8">
                {/* <article className="w-full py-8 lg:max-w-[700px]">
                    <h1 className="text-center text-3xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                        ¿Buscas la camisa perfecta? <br />
                        <span className="underline underline-offset-3 decoration-8 decoration-red-400">
                            ¡Contáctanos!
                        </span>
                    </h1>
                </article> */}
                <ContactForm />

                <article className="w-full mb-12 lg:max-w-[600px]">
                    <MapEmbed />
                </article>
            </section>
        </main>
    );
};
