'use client'

import { Fragment, useState } from "react";

type Props = { descriptions: string[] };

const INITIAL_SHOWN_COUNT = 3 as const;

export function Descriptions({ descriptions }: Props) {
    const [expanded, setExpanded] = useState(false);

    return descriptions?.map((description, index) => {
        const lastInitialIndex = INITIAL_SHOWN_COUNT - 1;

        if (!expanded && index > lastInitialIndex)
            return;

        const isLastInitiallyShown = !expanded && (index === lastInitialIndex);

        return (
            <Fragment key={index}>
                <p className="text-sm lg:text-justify">
                    {description}
                </p>

                {isLastInitiallyShown && <button type="button" className="self-start cursor-pointer text-xs text-(--primary)" onClick={() => setExpanded(true)}>View more</button>}
            </Fragment>
        )
    })
}