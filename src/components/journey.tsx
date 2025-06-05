import { JOURNEY_DATA } from "@/data/journey.data"
import { decomposeDate, getShortMonth } from "@/lib/date.helper";
import type { Journey } from "@/types/journey.type";
import { Title } from "./title";

const parseExperienceDate = (date: Journey.Model['date']) => {
    const startDate = decomposeDate(date.start);
    const endDate = date.end ? decomposeDate(date.end) : null;

    return { startDate, endDate };
}

const formatExperienceInterval = (
    startDate: ReturnType<typeof decomposeDate>,
    endDate: ReturnType<typeof decomposeDate> | null,
) => {
    const formatMonthAndYear = (date: ReturnType<typeof decomposeDate>) =>
        `${getShortMonth(date.month)}/${date.year}`;

    const start = formatMonthAndYear(startDate);
    const end = endDate !== null
        ? formatMonthAndYear(endDate)
        : 'Now';

    return `${start} - ${end}`;
}

export function Journey() {
    return (
        <section className="mb-16">
            <Title>
                my journey
            </Title>

            <div className="flex flex-row items-stretch py-8">
                <div className="ml-12 relative flex-shrink-0 w-[1px] bg-zinc-700 py-4 translate-y-8">
                    <div className="absolute bottom-[-3px] -right-[1px] w-1 h-1 bg-zinc-700 rounded-full">
                        <span className="absolute right-1.5 -top-[8px] text-deep-purple-400 font-medium text-sm mr-2 w-8 text-right">
                            2022
                        </span>
                    </div>
                </div>

                <div className="flex-grow space-y-12">
                    {JOURNEY_DATA.toReversed().map((experience, index) => {
                        const { startDate, endDate } = parseExperienceDate(experience.date);

                        const bulletBackground = endDate !== null ? 'bg-white' : 'bg-(--primary)';

                        return (
                            <div className="relative" key={index}>
                                <div className="absolute left-[-44.5px] top-6 flex items-center">
                                    <span className="text-deep-purple-400 font-medium text-sm mr-2 w-8 text-right">
                                        {startDate.year}
                                    </span>

                                    <div className={`${bulletBackground} w-2 h-2 rounded-full flex items-center justify-center overflow-hidden`} />
                                </div>

                                <div className="flex flex-col gap-2 bg-zinc-800/30 p-6 rounded-xl shadow-sm shadow-deep-purple-500/5 ml-6">
                                    <h3 className="text-xl font-semibold text-zinc-300">
                                        {experience.role}
                                    </h3>

                                    <p className="flex flex-col md:flex-row md:gap-2">
                                        <a href={experience.company.url} target="_blank" rel="noopener noreferrer">
                                            {experience.company.label}
                                        </a>
                                        
                                        <span className="hidden md:block" aria-hidden>•</span>
                                        
                                        <span>
                                            {formatExperienceInterval(startDate, endDate)}
                                        </span>
                                    </p>

                                    {experience.descriptions?.map((description, index) => (
                                        <p className="text-sm lg:text-justify" key={index}>
                                           {description}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
