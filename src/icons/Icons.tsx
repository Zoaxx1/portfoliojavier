import { ReactElement, useState } from "react";

interface IconProps{
    className: string;
}

interface SVGs{
    name: string;
    children: ReactElement<{ className?: string }>
}

export default function SVG ({name, children} : SVGs) : ReactElement{
    const [isHovered, setIsHovered] = useState(false);

    return(
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}
            {isHovered && (
                <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-indigo-800 text-indigo-100 text-xs px-2 py-1 rounded whitespace-nowrap">
                    {name}
                    <div className="absolute top-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-indigo-800 transform rotate-45"></div>
                </div>
            )}
        </div>
    )
}

export const LinkedInIcon = ({className} : IconProps): ReactElement =>{
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 40"
        className={className}
        >
            <text
            x="50"
            y="55"
            fontFamily="Arial, sans-serif"
            fontSize="100"
            fontWeight="bold"
            fill="currentColor"
            textAnchor="middle"
            >
                in
            </text>
        </svg>
    )
}

export const GitHubIcon = ({className} : IconProps): ReactElement =>{
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
        >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
    )
}

export const EmailIcon = ({className} : IconProps) : ReactElement =>{
    return(
        <svg
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            className={className}
        >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <path d="M22 6l-10 7L2 6"/>
        </svg>
    )
}

export const CVIcon = ({className} : IconProps) : ReactElement =>{
    return(
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={className}
        >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <path d="M14 2v6h6"/>
            <text x="8" y="15" fontFamily="Arial" fontSize="12" fill="currentColor">CV</text>
        </svg>
    )
}

export const DownloadArrowIcon = ({className} : IconProps) : ReactElement =>{
    return(
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
    )
}

export const WhatsappIcon = ({className} : IconProps) : ReactElement =>{
    return(
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
        >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
    )
}

export const CopyIcon = ({className} : IconProps) : ReactElement => {
    return(
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M8 4v2h8V4M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2"/>
            <rect x="8" y="2" width="8" height="4" rx="1"/>
            <path d="M8 10h8M8 14h6M8 18h4"/>
        </svg>
    )
}

export const WebIcon = ({className} : IconProps) : ReactElement => {
    return(
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={className}
        >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M2 8h20" />
            <path d="M6 12h12" />
            <path d="M6 15h8" />
        </svg>
    )
}

export const MoonWithStarsIcon = ({ className }: IconProps) => {
    return(
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path d="M21 12.8A9 9 0 1 1 12.2 3a7 7 0 0 0 8.8 9.8z"/>
            <circle cx="5" cy="5" r="1" fill="currentColor"/>
            <circle cx="19" cy="3" r="0.8" fill="currentColor"/>
            <circle cx="12" cy="19" r="0.8" fill="currentColor"/>
        </svg>

    )
};
  
export const SunIcon = ({ className } : IconProps) => {
    return(
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
        >
            <circle cx="12" cy="12" r="5"/>
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
        </svg>
    )
};

export const UnityIcon = ({ className } : IconProps) => {
    return(
        <svg 
            className={`unity-icon ${className || ''}`} 
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
            fill="currentColor"
            d="M25.94 25.061l-5.382-9.060 5.382-9.064 2.598 9.062-2.599 9.060zM13.946 24.191l-6.768-6.717h10.759l5.38 9.061-9.372-2.342zM13.946 7.809l9.371-2.342-5.379 9.061h-10.761zM30.996 12.917l-3.282-11.913-12.251 3.193-1.812 3.112-3.68-0.027-8.966 8.719 8.967 8.72 3.678-0.029 1.817 3.112 12.246 3.192 3.283-11.908-1.864-3.087z"
            />
        </svg>
    )
};

export const UnrealEngineIcon = ({ className } : IconProps) => {
    return(
        <svg
        className={className + " social-icon"}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        name="Unreal Engine"
        >
            <path fill="currentColor" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 1.846c5.595.007 10.128 4.545 10.128 10.141 0 5.601-4.54 10.141-10.141 10.141S1.859 17.588 1.859 12c0-2.8 1.135-5.335 2.97-7.17 1.837-1.835 4.374-2.97 7.176-2.97h.007zm0 2.77c-4.392.774-8.308 4.824-8.308 9.23 2.149-3.794 3.584-4.067 3.981-4.067s.606.206.606.663v5.654c0 .703-1.366.588-1.818.519 1.67 2.485 5.539 2.77 5.539 2.77l1.846-1.846 1.846.923c2.914-1.334 4.615-4.19 4.615-4.615-.701.868-1.646 1.515-2.731 1.836l-.039.01c-.245 0-.923-.126-.923-.462v-6.693c0-.581 1.342-2.354 1.846-3-3.332.873-4.298 2.394-4.298 2.394s-.253-.548-1.24-.548c.501.473.838 1.114.922 1.832l.001.014v5.654c-.525.373-1.144.653-1.813.801l-.034.006c-.64 0-.952-.26-.952-.75s.029-6.634.029-6.634-.923.339-.923-1.558c0-.949 1.846-2.135 1.846-2.135z"/>
        </svg>
    )
};
export const TypescriptIcon = ({ className } : IconProps) => {
    return(
        <svg
        className={className}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        >
            <path fill="currentColor" fill-rule="nonzero" clip-rule="nonzero" d="M0 1.75C0 0.783501 0.783502 0 1.75 0H14.25C15.2165 0 16 0.783502 16 1.75V3.75C16 4.16421 15.6642 4.5 15.25 4.5C14.8358 4.5 14.5 4.16421 14.5 3.75V1.75C14.5 1.61193 14.3881 1.5 14.25 1.5H1.75C1.61193 1.5 1.5 1.61193 1.5 1.75V14.25C1.5 14.3881 1.61193 14.5 1.75 14.5H15.25C15.6642 14.5 16 14.8358 16 15.25C16 15.6642 15.6642 16 15.25 16H1.75C0.783501 16 0 15.2165 0 14.25V1.75ZM4.75 6.5C4.75 6.08579 5.08579 5.75 5.5 5.75H9.25C9.66421 5.75 10 6.08579 10 6.5C10 6.91421 9.66421 7.25 9.25 7.25H8.25V12.5C8.25 12.9142 7.91421 13.25 7.5 13.25C7.08579 13.25 6.75 12.9142 6.75 12.5V7.25H5.5C5.08579 7.25 4.75 6.91421 4.75 6.5ZM11.2757 6.58011C11.6944 6.08164 12.3507 5.75 13.25 5.75C14.0849 5.75 14.7148 6.03567 15.1394 6.48481C15.4239 6.78583 15.4105 7.26052 15.1095 7.54505C14.8085 7.82958 14.3338 7.81621 14.0493 7.51519C13.9394 7.39898 13.7204 7.25 13.25 7.25C12.7493 7.25 12.5306 7.41836 12.4243 7.54489C12.2934 7.70065 12.25 7.896 12.25 8C12.25 8.104 12.2934 8.29935 12.4243 8.45511C12.5306 8.58164 12.7493 8.75 13.25 8.75C13.3257 8.75 13.3988 8.76121 13.4676 8.78207C14.1307 8.87646 14.6319 9.17251 14.9743 9.58011C15.3684 10.0493 15.5 10.604 15.5 11C15.5 11.396 15.3684 11.9507 14.9743 12.4199C14.5556 12.9184 13.8993 13.25 13 13.25C12.1651 13.25 11.5352 12.9643 11.1106 12.5152C10.8261 12.2142 10.8395 11.7395 11.1405 11.4549C11.4415 11.1704 11.9162 11.1838 12.2007 11.4848C12.3106 11.601 12.5296 11.75 13 11.75C13.5007 11.75 13.7194 11.5816 13.8257 11.4551C13.9566 11.2993 14 11.104 14 11C14 10.896 13.9566 10.7007 13.8257 10.5449C13.7194 10.4184 13.5007 10.25 13 10.25C12.9243 10.25 12.8512 10.2388 12.7824 10.2179C12.1193 10.1235 11.6181 9.82749 11.2757 9.41989C10.8816 8.95065 10.75 8.396 10.75 8C10.75 7.604 10.8816 7.04935 11.2757 6.58011Z"/>
        </svg>
    )
};
export const RubyOnRailsIcon = ({ className } : IconProps) => {
    return(
        <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        >
            <path fill="currentColor" d="m20.89 14.987v1.164h1.982c.627-.021 1.128-.534 1.128-1.164 0-.013 0-.025-.001-.038v.002-.45c.001-.014.001-.03.001-.047 0-.628-.502-1.139-1.127-1.153h-.001-.988v-.54h1.958v-1.162h-1.879c-.633.028-1.136.549-1.136 1.187v.03-.001.405c0 .01-.001.023-.001.035 0 .633.504 1.148 1.133 1.165h.002c1.36.006-.327 0 .934 0v.566l-2.006.006zm-10.623-.283s1.061-.097 1.061-1.55c.003-.033.004-.071.004-.109 0-.753-.557-1.375-1.281-1.478l-.008-.001h-2.314v4.585h1.164v-1.106l1.006 1.106h1.722l-1.354-1.446zm-.449-.939h-.926v-1.048h.934c.159.091.265.259.265.453 0 .024-.002.048-.005.071v-.003c.002.019.004.041.004.064 0 .198-.108.37-.268.462l-.003.001zm4.384-2.167h-1.18c-.628.027-1.127.543-1.127 1.176v.025-.001 3.36h1.182v-.8h1.11v.8h1.144v-3.36c.001-.016.001-.034.001-.052 0-.627-.503-1.137-1.128-1.147h-.001zm-.015 2.45h-1.12v-1.114s0-.25.37-.25h.406c.327 0 .334.25.334.25v1.113zm1.68-2.45h1.23v4.553h-1.23zm2.96 3.376v-3.376h-1.223v4.553h2.88v-1.177z"/>
            <path fill="currentColor" d="m.424 16.151h4.79s-.915-4.43 2.116-6.225c.661-.341 2.764-1.614 6.208 1.086.109-.097.212-.174.212-.174s-3.153-3.337-6.663-2.964c-1.764.167-3.934 1.871-5.207 4.122-.71 1.196-1.221 2.596-1.447 4.09l-.008.064z"/>
            <path fill="currentColor" d="m.424 16.15h4.79s-.915-4.43 2.116-6.225c.661-.341 2.764-1.614 6.208 1.086.109-.097.212-.174.212-.174s-3.153-3.336-6.663-2.963c-1.77.167-3.94 1.871-5.214 4.122-.71 1.195-1.219 2.596-1.441 4.091l-.008.063zm9.981-7.915.024-.431c-.168-.089-.363-.166-.568-.22l-.02-.005-.024.424c.2.07.394.148.588.231z"/>
            <path fill="currentColor" d="m9.826 9.598-.024.405c.217.008.423.037.622.084l-.022-.004.024-.4c-.173-.04-.378-.07-.588-.084zm-2.242-2.006h.061l-.125-.392c-.205 0-.407.014-.605.041l.023-.003.115.379c.149-.016.322-.026.498-.026h.035-.002zm.291 2.366.139.444c.146-.079.321-.155.501-.217l.026-.008-.134-.424c-.212.066-.389.136-.559.217l.026-.011zm-2.755-1.691-.273-.444c-.151.08-.309.174-.473.277l.279.45c.16-.103.311-.2.466-.283zm1.242 2.894.291.463c.113-.171.231-.32.36-.459l-.002.002-.273-.438c-.135.131-.258.272-.369.422l-.007.009zm-.88 2.07.491.411c.028-.284.073-.54.135-.789l-.008.037-.437-.366c-.063.186-.126.424-.175.666l-.007.041zm-2.651-3.054-.431-.398c-.16.16-.309.32-.449.48l.466.424c.139-.19.274-.355.417-.514l-.005.006zm-1.831 2.874-.697-.272c-.115.277-.24.598-.303.772l.697.27c.079-.218.206-.533.303-.77zm4.395 1.814c.009.295.035.575.078.849l-.005-.039.727.277c-.054-.25-.109-.534-.146-.836l-.654-.25z"/>
        </svg>
    )
};
export const TailwindIcon = ({ className } : IconProps) => {
    return(
        <svg
        className={className}
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        >
            <path fill="currentColor" d="M7.50006 2.5C6.47409 2.5 5.59203 2.77691 4.89966 3.37037C4.21227 3.95956 3.76259 4.81729 3.51314 5.88638C3.45869 6.1197 3.57742 6.35885 3.79619 6.45654C4.01496 6.55423 4.27228 6.483 4.40967 6.28672C4.7263 5.8344 5.04244 5.56261 5.3462 5.42313C5.64038 5.28805 5.95748 5.26068 6.32069 5.35797C6.68723 5.45615 6.97097 5.74369 7.41643 6.22816L7.43082 6.24382C7.76661 6.60905 8.17623 7.0546 8.73649 7.40028C9.31785 7.75898 10.0413 7.99999 11.0001 7.99999C12.026 7.99999 12.9081 7.72307 13.6005 7.12962C14.2878 6.54043 14.7375 5.6827 14.987 4.61361C15.0414 4.38029 14.9227 4.14114 14.7039 4.04345C14.4852 3.94576 14.2278 4.01698 14.0904 4.21326C13.7738 4.66559 13.4577 4.93737 13.1539 5.07686C12.8597 5.21194 12.5426 5.23931 12.1794 5.14202C11.8129 5.04384 11.5291 4.7563 11.0837 4.27182L11.0693 4.25616C10.7335 3.89093 10.3239 3.44538 9.76362 3.09971C9.18227 2.74101 8.45883 2.5 7.50006 2.5Z"/>
            <path fill="currentColor" d="M4.00006 6.99999C2.97409 6.99999 2.09203 7.2769 1.39966 7.87036C0.712271 8.45955 0.262592 9.31727 0.0131365 10.3864C-0.0413057 10.6197 0.0774162 10.8588 0.296186 10.9565C0.514956 11.0542 0.772276 10.983 0.909673 10.7867C1.2263 10.3344 1.54244 10.0626 1.8462 9.92312C2.14038 9.78804 2.45747 9.76067 2.82069 9.85796C3.18723 9.95614 3.47097 10.2437 3.91643 10.7282L3.93082 10.7438C4.2666 11.109 4.67624 11.5546 5.23649 11.9003C5.81785 12.259 6.54128 12.5 7.50006 12.5C8.52602 12.5 9.40808 12.2231 10.1005 11.6296C10.7878 11.0404 11.2375 10.1827 11.487 9.1136C11.5414 8.88027 11.4227 8.64113 11.2039 8.54343C10.9852 8.44574 10.7278 8.51697 10.5904 8.71325C10.2738 9.16558 9.95768 9.43736 9.65391 9.57684C9.35974 9.71192 9.04264 9.7393 8.67942 9.64201C8.31289 9.54383 8.02915 9.25628 7.58369 8.77181L7.56929 8.75615C7.23351 8.39092 6.82388 7.94537 6.26362 7.59969C5.68227 7.241 4.95883 6.99999 4.00006 6.99999Z"/>
        </svg>
    )
};
export const JiraIcon = ({ className } : IconProps) => {
    return(
        <svg 
        className={className + " cube-icon"} 
        width="100%" 
        height="100%" 
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet" 
        xmlns="http://www.w3.org/2000/svg"
        >
        <path 
            fill="currentColor"
            fill-rule="evenodd" 
            clip-rule="evenodd"
            d="M11.0725 0.723926C11.835 0.332231 12.795 0.454007 13.4356 1.0946L22.9054 10.5644C23.6982 11.3573 23.6982 12.6427 22.9054 13.4355L13.4356 22.9053C13.2835 23.0574 13.1117 23.1814 12.9275 23.276C12.165 23.6677 11.205 23.5459 10.5644 22.9053L1.09463 13.4355C0.301791 12.6427 0.301792 11.3573 1.09463 10.5644L10.5644 1.0946C10.7165 0.942496 10.8883 0.818509 11.0725 0.723926ZM12.0856 2.57305C11.1225 4.16851 11.3301 6.27366 12.7071 7.65063L16.3493 11.2929C16.5369 11.4804 16.6422 11.7348 16.6422 12C16.6422 12.2652 16.5369 12.5195 16.3493 12.7071L13.357 15.6994C14.0691 16.6897 14.4509 17.8438 14.5025 19.0099L21.4912 12.0213C21.4954 12.0171 21.497 12.0141 21.4979 12.0118C21.499 12.0089 21.5 12.0049 21.5 12C21.5 11.9951 21.499 11.991 21.4979 11.9881C21.497 11.9859 21.4954 11.9829 21.4912 11.9786L12.0856 2.57305ZM11.9144 21.4269C12.8775 19.8314 12.6699 17.7263 11.2929 16.3493L7.65065 12.7071C7.26013 12.3166 7.26013 11.6834 7.65066 11.2929L10.643 8.30056C9.93092 7.31025 9.54912 6.15612 9.49745 4.99002L2.50884 11.9786C2.50459 11.9829 2.50304 11.9859 2.50214 11.9881C2.50096 11.991 2.5 11.9951 2.5 12C2.5 12.0049 2.50096 12.0089 2.50214 12.0118C2.50304 12.0141 2.50459 12.0171 2.50884 12.0213L11.9144 21.4269ZM12 9.77195L9.77198 12L12 14.228L14.228 12L12 9.77195Z"
        />
        </svg>
    )
};

export const ReactIcon = ({ className } : IconProps) => {
    return(
        <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        >
        <path fill="currentColor" d="M12 10.11A1.87 1.87 0 1 1 10.13 12 1.88 1.88 0 0 1 12 10.11M7.37 20c.63.38 2-.2 3.6-1.7a24.22 24.22 0 0 1-1.51-1.9A22.7 22.7 0 0 1 7.06 16c-.51 2.14-.32 3.61.31 4m.71-5.74-.29-.51a7.91 7.91 0 0 0-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71 0c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54 0 1.11 0 1.71 0s1.17 0 1.71 0c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72H11.41c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7a24.22 24.22 0 0 1 1.51 1.9 22.7 22.7 0 0 1 2.4.36c.51-2.14.32-3.61-.32-4m-.7 5.74.29.51a7.91 7.91 0 0 0 .29-.86c-.27-.06-.57-.11-.88-.16l.3.51m1.45-7c1.47.84 1.63 3.05 1 5.63 2.54.75 4.37 2 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1 5.63s-3.45-.12-5.37-1.95c-1.92 1.83-3.91 2.79-5.38 1.95s-1.62-3-1-5.63c-2.54-.75-4.37-2-4.37-3.68S3.08 9.07 5.62 8.32c-.62-2.58-.46-4.79 1-5.63s3.46.12 5.38 1.95c1.92-1.83 3.91-2.79 5.37-1.95M17.08 12A22.51 22.51 0 0 1 18 14.26c2.1-.63 3.28-1.53 3.28-2.26S20.07 10.37 18 9.74A22.51 22.51 0 0 1 17.08 12M6.92 12A22.51 22.51 0 0 1 6 9.74c-2.1.63-3.28 1.53-3.28 2.26S3.93 13.63 6 14.26A22.51 22.51 0 0 1 6.92 12m9 2.26-.3.51c.31 0 .61-.1.88-.16a7.91 7.91 0 0 0-.29-.86l-.29.51M13 18.3c1.59 1.5 3 2.08 3.59 1.7s.83-1.82.32-4a22.7 22.7 0 0 1-2.4.36A24.22 24.22 0 0 1 13 18.3M8.08 9.74l.3-.51c-.31 0-.61.1-.88.16a7.91 7.91 0 0 0 .29.86l.29-.51M11 5.7C9.38 4.2 8 3.62 7.37 4s-.82 1.82-.31 4a22.7 22.7 0 0 1 2.4-.36A24.22 24.22 0 0 1 11 5.7Z"/>
        </svg>
    )
}

export const AngularIcon = ({ className } : IconProps) => {
    return(
        <svg 
        className={className + " unity-icon"}
        width="100%" 
        height="100%" 
        viewBox="0 0 32 32"
        preserveAspectRatio="xMidYMid meet" 
        xmlns="http://www.w3.org/2000/svg"
        >
        <path 
            fill="currentColor"
            d="M15.937 11.355l-2.057 4.879h4.433l-2.358-4.924-0.019 0.044zM15.964 4.3l-11.279 3.969 1.782 14.777 9.508 5.226 9.557-5.297 1.782-14.776-11.351-3.899zM20.744 21.849l-1.531-3.545h-6.25l-1.398 3.497-2.601 0.048 6.973-15.513 7.216 15.513h-2.41z"
        />
        </svg>
    )
}

export const BootstrapIcon = ({ className } : IconProps) => {
    

    return(
            <svg
            
            className={className + " relative inline-block"} 
            width="100%" 
            height="100%" 
            viewBox="0 0 32 32"
            preserveAspectRatio="xMidYMid meet" 
            xmlns="http://www.w3.org/2000/svg"
            >
                <path 
                    fill="currentColor"
                    d="M8.171 4.999c-0.562 0.083-1.237 0.347-1.716 0.675-0.313 0.207-0.717 0.596-0.95 0.901-0.26 0.343-0.577 1.003-0.702 1.456l-0.106 0.377v15.727l0.106 0.377c0.124 0.453 0.441 1.113 0.702 1.456 0.49 0.641 1.245 1.181 2.003 1.426 0.626 0.2 0.313 0.192 8.486 0.192 8.177 0 7.864 0.008 8.486-0.196 0.762-0.245 1.516-0.781 2.003-1.422 0.26-0.347 0.581-1.007 0.705-1.456l0.102-0.377v-15.727l-0.106-0.377c-0.124-0.452-0.441-1.113-0.701-1.456-0.234-0.306-0.637-0.694-0.95-0.901-0.336-0.23-0.883-0.479-1.305-0.596l-0.37-0.102-7.732-0.004c-4.251-0.004-7.834 0.008-7.954 0.026zM18.709 9.159c1.192 0.196 2.006 0.588 2.538 1.222 0.226 0.268 0.49 0.8 0.6 1.196 0.068 0.26 0.079 0.407 0.083 1.056 0.004 0.683-0.004 0.784-0.083 1.052-0.23 0.8-0.732 1.414-1.543 1.89l-0.279 0.162 0.2 0.064c0.305 0.102 0.815 0.366 1.075 0.562 0.649 0.49 1.101 1.252 1.282 2.161 0.087 0.453 0.087 1.422-0.004 1.837-0.358 1.633-1.622 2.768-3.523 3.149-0.728 0.147-0.916 0.155-4.824 0.155h-3.82v-14.6l3.953 0.015c3.538 0.011 3.99 0.019 4.345 0.079zM13.655 13.277v1.72l1.822-0.015c1.709-0.019 1.837-0.023 2.112-0.098 0.86-0.234 1.233-0.728 1.233-1.633 0-0.694-0.245-1.143-0.777-1.407-0.471-0.234-0.981-0.283-2.983-0.287h-1.407v1.72zM13.655 19.176v2.003l1.991-0.015c2.237-0.015 2.312-0.023 2.863-0.29 0.634-0.309 0.916-0.815 0.916-1.641 0-1.063-0.422-1.652-1.395-1.946-0.275-0.087-0.328-0.087-2.327-0.102l-2.048-0.011v2.003z"
                />
            </svg>
    )
}

export const NETIcon = ({ className } : IconProps) => {
    return(
        <svg 
        className={className + " dotnet-icon"} 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                fill="currentColor"
                d="M3.1672 7.5655v8.749H4.19v-6.325a8.979 8.979 0 0 0-.0488-1.1998h.0384a2.9082 2.9082 0 0 0 .2784.5473l4.4973 6.9774h1.2569V7.5655H9.1904v6.1526a9.2574 9.2574 0 0 0 .0619 1.286h-.0234c-.0544-.1056-.173-.3002-.3553-.585L4.4964 7.5656zm9.315 0v8.749h4.65l.0048-.9599h-3.6087v-3.0331h3.1579V11.4h-3.1579V8.4916h3.3884v-.926zm5.4374 0v.926h2.5149v7.823h1.0216v-7.823H24v-.926zM.6534 15.067a.643.643 0 0 0-.4565.2062A.6719.6719 0 0 0 0 15.753a.6623.6623 0 0 0 .1968.4799.6479.6479 0 0 0 .4799.2015.6623.6623 0 0 0 .4799-.2015.6575.6575 0 0 0 .2015-.48.667.667 0 0 0-.2015-.4798.6575.6575 0 0 0-.4799-.2062.643.643 0 0 0-.0234 0z"
            />
        </svg>
    )
}