import Link from "next/link";
import { Title } from "./title";
import { Hero } from "./hero";
import { GithubIcon } from "./icons/github-icon";
import { LinkedInIcon } from "./icons/linkedin-icon";
import { BrazilIcon } from "./icons/brazil-icon";

export function Footer() {
    const iconProps = { className: "opacity-100 hover:opacity-80 transition-opacity" };

  return (
    <footer id="contact" className="bg-white text-zinc-800 py-18 pt-30">
        <div className="px-6 md:px-24 lg:px-60 xl:px-[300px] 2xl:px-[30vw] w-full">
          <div className="flex flex-col-reverse sm:flex-row sm:justify-between gap-8">
            <div className="flex flex-col justify-between gap-2 items-center sm:items-start">
                <Title theme="light" dot={false} className="mb-0!">
                    get in touch
                </Title>

                <span>
                    matheusmvg@hotmail.com
                </span>

                <ul className="flex gap-3 items-center">
                    <li>
                        <Link
                            href="https://github.com/matheusgesser"
                            className="text-white hover:text-deep-purple-400 transition-colors"
                        >
                            <GithubIcon {...iconProps} />
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="https://linkedin.com/in/matheusgesser"
                            className="text-white hover:text-deep-purple-400 transition-colors"
                        >
                            <LinkedInIcon {...iconProps} />
                        </Link>
                    </li>
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
