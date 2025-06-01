import { Avatar } from "./avatar";

type Props = {
    /** @default 'dark' */
    theme?: 'dark' | 'light',
    /** @default 'start' */
    textAlign?: 'start' | 'end',
    /** @default false */
    hideAvatar?: boolean,
    /** @default 'md' */
    size?: 'md' | 'sm',
};

export function Hero({ theme = 'dark', textAlign = 'start', hideAvatar = false, size = 'md' }: Props) {
    const nameTextSize = size === 'md' ? 'text-4xl md:text-6xl' : 'text-xl md:text-2xl';
    const roleTextSize = size === 'md' ? 'text-xl md:text-2xl' : 'text-md md:text-lg';

    const color = theme === 'dark' ? 'text-white' : 'text-black';

    return (
        <div className={`flex flex-col items-center sm:items-${textAlign}`}>
            {!hideAvatar && <Avatar />}

            <h1 className={`${nameTextSize} ${color} font-bold tracking-tighter font-(family-name:--font-geist)`}>
                matheus gesser
            </h1>

            <p className={`${roleTextSize} text-zinc-500 tracking-tight font-(family-name:--font-raleway)`}>
                Frontend Developer
            </p>
        </div>
    )
}
