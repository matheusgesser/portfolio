import { Journey } from "@/types/journey.type";

export const JOURNEY_DATA: Journey.Model[] = [
    {
        date: {
            start: '2023-10-02T00:00:00Z',
        },
        company: {
            name: 'contato-seguro',
            label: 'Contato Seguro',
            url: 'https://canaldaetica.com.br/sobre-nos/',
        },
        role: 'Junior Frontend Developer',
        descriptions: [
            'Responsible for building and maintaining internal web applications, focusing on performance, usability, and seamless user experience across internal systems'
        ]
    },
] as const;