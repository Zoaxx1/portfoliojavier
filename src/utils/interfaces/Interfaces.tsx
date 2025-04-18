import { ReactElement } from "react"

export interface CardInfo{
    title: string,
    data: Card[]
}

export interface Card{
    place: string,
    dates?: BusinessDays,
    description: CardDescription[]
}

export interface BusinessDays{
    firstDate: Dates,
    secondDate: Dates | 'Current'
}

export interface CardDescription{
    position?: Position,
    text: string
    skills: Skills[],
    points?: string[]
}

export interface Position{
    name: string,
    time: BusinessDays
}

export interface Dates{
    month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
    year: number
}

export interface DatesDisplay{
    date: Dates;
    isCurrent?: boolean;
}

export type Skills = 'ReactNative' | 'CSS' | 'Redis' | 'ExpressJs' | 'NodeJS' | 'Tailwind' | 'Scrum' | 'API' | 'Express' | 'GitHub' | 'Unity' | 'UnrealEngine' | 'C++' | 'React' | 'Typescript' | 'AngularJS' | 'RubyOnRails' | 'Hasura' | 'GraphQL' | 'ReactNative' | 'Verse' | 'UEFN' | 'UnrealEngineForFortnite' | 'Git' | 'Jira' | 'NetCode' | 'C#' | 'Jest' | 'Js' | 'Figma'

export interface ButtonActions{
    action: 'GitHub' | 'LinkedIn' | 'Email' | 'CV' | 'Whatsapp' | 'CopyEmail';
}

export type Actions = 'LinkedIn' | 'GitHub' | 'Whatsapp' | 'Email' | 'CopyEmail' | 'CV';

export interface IconProps{
    className: string;
}

export type ChildrenSVG = ReactElement<{ className?: string }>;

export interface SVGs{
    name: string;
    children: ChildrenSVG
}
