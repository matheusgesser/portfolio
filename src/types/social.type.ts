import { JSX } from "react";

export namespace Social {
    export type Model = {
        name: string,
        url: string,
        icon: (props: any) => JSX.Element,
    }
}