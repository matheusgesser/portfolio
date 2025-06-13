import Link from "next/link";
import { Title } from "./title";
import { Hero } from "./hero";
import { BrazilIcon } from "./icons";
import { SOCIAL_DATA } from "@/data/social.data";

export function Footer() {
    const iconProps = { className: "text-black opacity-100 hover:opacity-80 transition-opacity" };

    return (
        <footer id="contact" className="bg-white text-zinc-800 py-18 pt-30">
            <div className="px-6 md:px-24 lg:px-60 xl:px-[300px] 2xl:px-[30vw] w-full">
            <div className="flex flex-col-reverse sm:flex-row sm:justify-between gap-8">
                <div className="flex flex-col justify-between gap-2 items-center sm:items-start">
                    <Title theme="light" dot={false} className="mb-0!">
                        get in touch
                    </Title>

                    <span className="tracking-tight select-all">
                        matheusmvg@hotmail.com
                    </span>

                    <ul className="flex gap-3 items-center">
                        {SOCIAL_DATA.map(({ name, url, icon: Icon }) => (
                            <li key={name}>
                                <Link
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Visit matheusgesser's ${name} (opens in a new tab)`}
                                >
                                    <Icon {...iconProps} />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col gap-2 items-center justify-between sm:items-end">
                    <Hero theme="light" textAlign="end" hideAvatar size="sm" />

                    <div className="flex items-center gap-1">
                        <span className="mt-auto">
                            Santa Catarina, Brazil
                        </span>

                        <BrazilIcon />
                    </div>

                    <span className="text-deep-purple-400">
                        © {new Date().getFullYear()}
                    </span>
                </div>
            </div>
            </div>
        </footer>
    )
}
