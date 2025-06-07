import { Project } from "@/types/project.type";

export const PROJECT_DATA: Project.Model[] = [
    {
        title: "zen-youtube-playlist",
        description: "A minimalist and distraction-free way to enjoy youtube playlists",
        tech: ["Next.js", "TypeScript", "Framer", "PrimeReact", "TailwindCSS"], 
        url: "#",
    },
    {
        title: "git-combat",
        description: "Guess, throught a repository battle, which one has more stars",
        tech: ["React", "Typescript", "Github API (Octokit)"],
        url: "#",
    },
    {
        title: "tech-tenzies",
        description: "Minigame where you need to make all dices have same number",
        tech: ["React", "Styled Components"],
        url: "#",
    },
    {
        title: "recycle-ideas",
        description: "Recycle ideas to do at home",
        tech: ["React", "SASS", "React Hook Form", "VLibras (accessibility)"],
        url: "#",
    },
] as const;