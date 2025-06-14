import { Project } from "@/types/project.type";

export const PROJECT_DATA: Project.Model[] = [
    {
        title: "zen-youtube-playlist",
        description: "A minimalist and distraction-free way to enjoy youtube playlists",
        tech: ["Next.js", "TypeScript", "Framer", "PrimeReact", "TailwindCSS"], 
        url: "https://zen-youtube-playlist.vercel.app",
    },
    {
        title: "git-combat",
        description: "Guess, throught a repository battle, which one has more stars",
        tech: ["React", "Typescript", "Github API (Octokit)"],
        url: "https://gitcombat.netlify.app",
    },
    {
        title: "tech-tenzies",
        description: "Minigame where you need to make all dices have same number",
        tech: ["React", "Styled Components"],
        url: "https://techtenzies.netlify.app",
    },
    {
        title: "recycle-ideas",
        description: "Recycle ideas to do at home",
        tech: ["React", "SASS", "React Hook Form", "VLibras (accessibility)"],
        url: "https://reciclaideias.netlify.app",
    },
] as const;