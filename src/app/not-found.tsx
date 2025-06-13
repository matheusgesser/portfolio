import Link from "next/link";

export default function NotFound() {
    return (
        <section className="flex-1 grid place-items-center">
            <div className="flex flex-col items-center gap-8 mb-40">
                <div className="flex flex-col items-center gap-2 font-(family-name:--font-geist)">
                    <span className="text-(--primary)">
                        404
                    </span>

                    <h2 className="tracking-tighter text-4xl text-white">
                        Page not found
                    </h2>
                </div>

                <Link href="/" className="bg-(--primary) hover:bg-(--primary-lighter) text-black! font-bold py-2 px-4 rounded-lg">
                    Go back
                </Link>
            </div>
        </section>
    )
}