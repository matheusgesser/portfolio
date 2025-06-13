import { GithubIcon, LinkedInIcon } from "@/components/icons";
import { Social } from "@/types/social.type";

export const SOCIAL_DATA: Social.Model[] = [
    {
        name: 'GitHub',
        url: 'https://github.com/matheusgesser',
        icon: GithubIcon,
    },
    {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/matheusgesser',
        icon: LinkedInIcon,
    },
] as const;