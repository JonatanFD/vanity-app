import Marquee from "react-fast-marquee";

const BRANDS = [
    {
        src: "/brands/rolex.svg",
        size: { w: 100, h: 53 },
    },
    {
        src: "/brands/wired.svg",
        size: { w: 98, h: 21 },
    },
    {
        src: "/brands/tedx.svg",
        size: { w: 78, h: 23 },
    },
    {
        src: "/brands/huffpost.svg",
        size: { w: 116, h: 14 },
    },
    {
        src: "/brands/forbes.svg",
        size: { w: 81, h: 22 },
    },
    {
        src: "/brands/buzzfeed.svg",
        size: { w: 96, h: 18 },
    },
    {
        src: "/brands/business-insider.svg",
        size: { w: 93, h: 30 },
    },
];

export default function Brands() {
    return (
        <section className="text-center">
            <h2 className="text-3xl font-bold mb-4 ">
                Empresas que confían en nosotros
            </h2>
            <div className="border-b-[1px] border-b-[--primary-color] w-2/5 max-w-[500px] mx-auto mb-10"></div>

            <section className="h-[200px] w-full relative overflow-hidden">
                <Marquee
                    autoFill
                    gradientWidth={50}
                    gradientColor="black"
                    speed={25}
                    gradient
                    pauseOnClick
                >
                    {BRANDS.map((item, index) => (
                        <img
                            src={item.src}
                            alt=""
                            key={index}
                            width={item.size.w}
                            height={item.size.h}
                            className="mx-8"
                        />
                    ))}
                </Marquee>
            </section>
        </section>
    );
}
