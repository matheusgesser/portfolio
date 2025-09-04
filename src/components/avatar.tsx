import Image from 'next/image';

export function Avatar() {
    return (
        <div className='p-[4px] rounded-full bg-gradient-to-tr from-(--primary) to-(--primary-lighter)'>
            <div className='p-[4px] bg-black rounded-full'>
                <Image
                    src="/avatar.png"
                    alt="Portrait of Matheus Gesser wearing a black jacket"
                    width={140}
                    height={140}
                    quality={100}
                    className="rounded-full object-cover select-none"
                />
            </div>
        </div>
    );
}
