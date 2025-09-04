import Link from "next/link";
import { Title } from "./title";
import { ArrowTopRightIcon } from './icons'
import { PROJECT_DATA } from "@/data/project.data";

export function Projects() {
  return (
    <section id="projects">
        <Title>
            worth highlights
        </Title>

        <div className="grid lg:grid-cols-2 gap-6">
          {PROJECT_DATA.map((project, index) => (
            <Link
              key={index}
              href={project.url}
              className="group flex flex-col gap-2 bg-zinc-800/30 hover:bg-zinc-800/50 px-6 py-4 rounded-xl transition-all duration-200 cursor-pointer"
            >
                <div className="flex items-center justify-between">
                    <h4 className="text-xl font-semibold text-zinc-300 group-hover:text-white transition-colors pr-8">
                        {project.title}
                    </h4>

                    <span className="hidden sm:block text-zinc-600 group-hover:text-zinc-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                        <ArrowTopRightIcon />
                    </span>
                </div>

                <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
                    {project.description}
                </p>

                <p className="font-(family-name:--font-raleway)">
                    {project.tech.join(', ')}
                </p>
            </Link>
          ))}
        </div>
      </section>
  )
}
