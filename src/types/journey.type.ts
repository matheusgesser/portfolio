export namespace Journey {
    type Company = 'contato-seguro';

    export type Model = {
        date: {
            // ISO 8601
            start: string,
            // ISO 8601
            end?: string,
        }
        company: {
            name: Company,
            label: string,
            url: string,
        },
        role: string,
        descriptions?: string[],
    };
}