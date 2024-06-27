import { useEffect, useState } from "react";

const PAGE_ANCHORS = [
    { name: "Características", href: "#features" },
    { name: "Planes", href: "#planes" },
];

export default function Header() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            setOpen(false);
        };
    }, []);

    return (
        <header className="w-full mx-auto py-4 px-4 absolute z-30">
            <section className="flex justify-between items-center mx-auto max-w-7xl">
                <a className="flex items-center gap-2" href="/">
                    <img
                        src="/favicon.svg"
                        alt="Vanity Logo"
                        className="w-16 aspect-[2]"
                    />
                    <h1 className="font-medium hidden lg:inline">Vanity VPN</h1>
                </a>

                <div
                    className={`flex gap-3 ${open ? "bg-black fixed w-screen h-screen top-0 left-0 flex-col items-start py-24 px-10" : ""} lg:bg-none `}
                >
                    {PAGE_ANCHORS.map((anchor, index) => (
                        <a
                            key={index}
                            href={anchor.href}
                            rel="noopener noreferrer"
                            className={`text-xl hover:text-blue-500 transition-colors lg:inline ${open ? "text-xl" : "hidden"}`}
                        >
                            {anchor.name}
                        </a>
                    ))}
                    <a
                        href="#"
                        rel="noopener noreferrer"
                        className={`py-2 px-5 rounded-lg bg-[--primary-color] ${open ? "inline" : "hidden"} lg:hidden`}
                    >
                        Contáctanos
                    </a>
                </div>

                <a
                    href="/contacto"
                    rel="noopener noreferrer"
                    className="py-2 px-5 rounded-lg bg-[--primary-color] hidden lg:inline"
                >
                    Contáctanos
                </a>
                <img
                    src={
                        open ? "/icons/close-icon.svg" : "/icons/menu-icon.svg"
                    }
                    alt="close icon"
                    className="z-30 inline lg:hidden aspect-square"
                    onClick={() => setOpen(!open)}
                />
            </section>
        </header>
    );
}
