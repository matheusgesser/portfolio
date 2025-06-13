import Image from 'next/image';

export function Avatar() {
    return (
        <div className='p-[4px] rounded-full bg-gradient-to-tr from-(--primary) to-(--primary-lighter)'>
            <div className='p-1 bg-black rounded-full'>
                <Image
                    src="/avatar.png"
                    alt="A digital anime-style illustration of a young man with short, dark, styled hair and a fade haircut. He wears a black T-shirt and a thin silver chain necklace. His expression is neutral, and he faces forward against a solid beige background."
                    width={140}
                    height={140}
                    quality={100}
                    className="rounded-full object-cover select-none"
                />
            </div>
        </div>
    );
}
