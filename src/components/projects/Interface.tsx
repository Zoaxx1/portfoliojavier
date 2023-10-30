import { Technology } from '../../features/types/TypeTechnology';

type Status = 'done' | 'in progress' | 'finalizado' | 'en progreso'

export interface Project {
    title: string;
    status: Status;
    technologies: Technology[]
    description: string;
    link: string
}
