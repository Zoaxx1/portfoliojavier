import { Education, TimeDate } from './Interface';

export default function EducationComponent () {
    const educations : Education[] = [
        {
            title: 'Angular Developer',
            time: {
                start: new Date('06/01/2023'),
                end: new Date('09/01/2023')
            },
            place: 'Udemy | Fernando Herrera',
            link: 'https://www.udemy.com/course/angular-fernando-herrera/',
            description: 'Curso Angular: Desde TypeScript hasta desarrollo de aplicaciones completas. Componentes, rutas, autenticación, mapas, APIs, estilos y más. Habilidades para crear y comprender aplicaciones, siguiendo estándares del framework.'
        },
        {
            title: 'Full Stack Developer',
            time: {
                start: new Date('06/01/2020'),
                end: new Date('10/30/2020')
            },
            place: 'Henry',
            link: 'https://www.soyhenry.com/',
            description: 'Formado en habilidades de desarrollo frontend y backend en 2020 como Fullstack Developer. Poseo experiencia en tecnologías como HTML, CSS, JavaScript, React, Node.js, Express y MongoDB. Capacidad demostrada para diseñar, desarrollar y lanzar aplicaciones web completas, con habilidades en resolución de problemas y colaboración en equipos de desarrollo.'
        },
        {
            title: 'Analisis, Desarrollo y Programación de Aplicaciones',
            time: {
                start: new Date('03/01/2019'),
                end: new Date('06/01/2020')
            },
            place: 'Instituto Superior de Estudios Técnicos',
            link: 'https://www.mardelplata.gob.ar/educacion/iset',
        },
        {
            title: 'Web Pages Developer',
            time: {
                start: new Date('09/01/2018'),
                end: new Date('11/01/2023')
            },
            place: 'Escuela de Formación Profesional N°401'
        }
    ]

    const EducationList : React.FC<Education> = ({title, time: {start, end}, place, link, description}) => {
        const TimeList : React.FC<TimeDate> = ({date}) => {
            return (
                <span className='text-info'>
                    {`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}
                </span>
            )
        }

        return (
            <div className='row mb-4'>
                <div className='text-info col-3'>
                    <div>
                        <span>{title}</span>
                        <br />
                        <span>{place}</span>
                        <div>
                            <TimeList date={start}/>
                            <TimeList date={end}/>
                        </div>
                    </div>
                </div>
                <div className='col text-info border-start ps-3'>
                    {description && <span>{description}</span>}
                    {(description && link) && <br />}
                    {link && <span>{link}</span>}
                    {(!description && !link) && <span>..................................................</span>}
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className='mb-2'>
                <span className='text-info fs-2'>Educación</span>
                <hr className='border border-info' style={{marginTop: '-6px'}}/>
            </div>
            { educations.map((ed) => <EducationList {...ed}/>) }
        </div>
    )
}