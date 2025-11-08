import { Journey } from "@/types/journey.type";

export const JOURNEY_DATA: Journey.Model[] = [
    {
        date: {
            start: "2023-10-02T00:00:00Z",
        },
        company: {
            name: "contato-seguro",
            label: "Contato Seguro",
            url: "https://canaldaetica.com.br/sobre-nos/",
        },
        role: "Mid-level Frontend Developer",
        descriptions: [
            "Participation in architecture and design debates and decisions, ensuring the adoption of modern industry technologies and trends to develop scalable, adaptable, and future-proof solutions.",
            "Structuring of the frontend monorepo through scalable architecture that allows multiple applications from a shared core project and reusable packages that reduced development time and ensured total consistency between products. Direct participation in the definition of architectural standards that transformed the ecosystem and enabled accelerated growth and more robust deliveries.",
            "Team interaction through agile methodologies, such as Scrum and Kanban, adapted to the internal context for task and effort management, demand organization, integration, and efficient collaboration between product team squads.",
            "Significant contribution to the creation and maintenance of the components of the company's own design system, with clean, adaptable, and reusable code. Focus on improving usability and user experience. Internal documentation with Storybook.",
            "Automation of manual processes, reducing activities performed by employees and allowing customers to perform these tasks autonomously, freeing other sectors to focus on strategic activities.",
            "Refactoring of complex system modules, from Javascript to Typescript, applying best practices in development and clean code, in addition to the creation of a new responsive visual interface and application of the company's own design system based on the specifications of the design team.",
        ]
    },
] as const;