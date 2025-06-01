import { HTMLAttributes } from "react";

type Props = {
    /** @default 'dark' */
    theme?: 'dark' | 'light',
    /** @default true */
    dot?: boolean,
    className?: string,
    children: string,
} & Omit<HTMLAttributes<HTMLHeadingElement>, 'children'>;

export function Title({ theme = 'dark', dot = true, className, children }: Props) {
    const title = children.toLowerCase();

    const color = theme === 'dark' ? 'text-zinc-200' : 'text-black';

    return (
        <h2 className={`${color} text-2xl md:text-3xl font-bold mb-6 tracking-tight font-(family-name:--font-raleway) ${className}`}>
            {title}{dot && <span className="text-4xl text-[#009b3a] leading-[45px] font-(family-name:--font-metrophobic)">.</span>}
        </h2>
    )
}
