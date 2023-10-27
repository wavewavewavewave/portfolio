import Genba from '../../assets/Project_screen/Genba_screen.jpg';
import Alandal from '../../assets/Project_screen/Alandal_screen.png';
import CoolPass from '../../assets/Project_screen/Prague_coolpass.png';
import Leto from '../../assets/Project_screen/Leto_screen.png';
import Pasalo from '../../assets/Project_screen/Pasalo_screen.jpg'
import linkedIn from '../../assets/Linkedin.svg';
import gitHub from '../../assets/mark-github-24.svg';
import telegram from '../../assets/Vector.svg';

export const headerMenuArray = [
    {id: 1, title: 'Projects'},
    {id: 2, title: 'Technologies'},
    {id: 3, title: 'About me'}
];
export const socialMenuArray = [
    {id: 1, image: gitHub},
    {id: 2, image: linkedIn, href: '\'https://www.linkedin.com/in/mikita-shkrabau-b5806a21b/\''},
    {id: 3, image: telegram, href: 'https://t.me/prohozhii'},
];
export const projectsArray = [
    {
        id: 0,
        title: 'Genba',
        descriptions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n' +
            '                        incididunt ut labore et dolore magna aliqua.',
        image: Genba,
        url: 'https://www.google.com/search?q=genba&oq=Genba&gs_lcrp=EgZjaHJvbWUqCwgAEEUYJxg7GIoFMgsIABBFGCcYOxiKBTIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIGCAYQRRg8MgYIBxBFGDzSAQgxMDU2ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8'
    },
    {
        id: 1,
        title: 'Alandal',
        descriptions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n' +
            '                        incididunt ut labore et dolore magna aliqua.',
        image: Alandal,
        url: 'https://www.google.com/search?q=alandal&sca_esv=573181861&sxsrf=AM9HkKni35THaB1e3nsiXqy5fVMje3NiXw%3A1697201046812&ei=ljspZZ6XMdnWwPAPuKavwAE&oq=Alan&gs_lp=Egxnd3Mtd2l6LXNlcnAiBEFsYW4qAggAMgcQIxiKBRgnMgsQLhiABBixAxiDATILEC4YgwEYsQMYgAQyCxAuGIAEGLEDGIMBMgUQLhiABDIFEAAYgAQyBRAuGIAEMgUQLhiABDIFEAAYgAQyBRAAGIAESM0RUABY6AZwAHgBkAEAmAF4oAGrA6oBAzEuM7gBAcgBAPgBAcICCxAAGIAEGLEDGIMBwgIOEC4YgAQYsQMYxwEY0QPCAhEQLhiABBixAxiDARjHARjRA8ICCxAAGIoFGLEDGIMBwgIEECMYJ8ICCxAuGIAEGMcBGNED4gMEGAAgQYgGAQ&sclient=gws-wiz-serp',
    },
    {
        id: 2,
        title: 'CoolPass',
        descriptions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n' +
            '                        incididunt ut labore et dolore magna aliqua.',
        image: CoolPass,
        url: 'https://www.google.com/search?q=coolpass+prague&sca_esv=573181861&sxsrf=AM9HkKnXCxeWEyL__d9y9UIXUGCM3-4xQw%3A1697201821112&ei=nT4pZdijBpuL9u8P7MCHsAI&ved=0ahUKEwiY5qK9ifOBAxWbhf0HHWzgASYQ4dUDCBA&oq=Cool&gs_lp=Egxnd3Mtd2l6LXNlcnAiBENvb2wyBxAjGIoFGCcyBhAAGBYYHjIGEAAYFhgeSMYkUMoDWLoIcAF4AZABAJgBjgGgAZIFqgEDMC41uAEMyAEA-AEBqAIUwgIHECMY6gIYJ8ICFhAAGAMYjwEY5QIY6gIYtAIYjAPYAQHCAhYQLhgDGI8BGOUCGOoCGLQCGIwD2AEBwgIHEAAYigUYQ8ICBxAuGIoFGEPCAgsQLhiABBjHARjRA8ICCxAAGIoFGLEDGIMBwgIREC4YgAQYsQMYgwEYxwEY0QPCAg4QLhiABBixAxjHARjRA8ICCxAAGIAEGLEDGIMBwgIFEAAYgATCAgsQLhiABBjHARivAcICBRAuGIAE4gMEGAAgQYgGAboGBggBEAEYCw&sclient=gws-wiz-serp',
    },
    {
        id: 3,
        title: 'Let`o',
        descriptions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n' +
            '                        incididunt ut labore et dolore magna aliqua.',
        image: Leto,
        url: 'https://www.google.com/search?q=leto+cafe&sca_esv=573181861&sxsrf=AM9HkKkwXKWXCAZuXHwYXjw5km_q_pVGFQ%3A1697201814839&ei=lj4pZcTKMqT-7_UP9fC0iAs&ved=0ahUKEwjE7aO6ifOBAxUk_7sIHXU4DbEQ4dUDCBA&uact=5&oq=leto+cafe&gs_lp=Egxnd3Mtd2l6LXNlcnAiCWxldG8gY2FmZTIHECMYigUYJzIEECMYJzIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESJIWUKMFWJoVcAF4AZABAJgBjAGgAecGqgEDMC43uAEDyAEA-AEBwgIKEAAYRxjWBBiwA8ICBxAuGIoFGEPCAgcQABiKBRhDwgIFEC4YgATCAgsQLhiABBjHARivAcICFhAuGIoFGEMYlwUY3AQY3gQY4ATYAQHCAg0QLhiABBjHARjRAxgK4gMEGAAgQYgGAZAGCLoGBggBEAEYFA&sclient=gws-wiz-serp',
    },
    {
        id: 4,
        title: 'Pasalo',
        descriptions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n' +
            '                        incididunt ut labore et dolore magna aliqua.',
        image: Pasalo,
        url: 'https://www.google.com/search?q=Pasalo&sca_esv=573181861&sxsrf=AM9HkKnUeeki0j_2C6UQYQC4QuKqWQmj7Q%3A1697201879304&ei=1z4pZZeaEsTSwPAP8emzkA0&ved=0ahUKEwjX4YLZifOBAxVEKRAIHfH0DNIQ4dUDCBA&uact=5&oq=Pasalo&gs_lp=Egxnd3Mtd2l6LXNlcnAiBlBhc2FsbzIHECMYigUYJzIFEAAYgAQyBxAAGIAEGAoyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIKEAAYgAQYFBiHAjIFEAAYgARIhQ1QAFitC3AAeAGQAQCYAakBoAGVBqoBAzAuNrgBA8gBAPgBAcICBBAjGCfCAgcQLhiKBRhDwgILEAAYgAQYsQMYgwHCAgcQABiKBRhDwgIIEAAYgAQYsQPCAg0QLhiKBRjHARivARhDwgILEAAYigUYsQMYgwHCAhEQLhiKBRixAxiDARjHARjRA8ICBRAuGIAEwgINEAAYgAQYsQMYgwEYCsICChAAGIAEGLEDGArCAgsQLhiABBjHARivAeIDBBgAIEGIBgE&sclient=gws-wiz-serp',
    }
];
export const skillsArray = [
    {
        id: 1,
        title: 'HTML',
        value: 100,
        max: 100,
    },
    {
        id: 2,
        title: 'Css, Sass',
        value: 100,
        max: 100,
    },
    {
        id: 3,
        title: 'JavaScript',
        value: 100,
        max: 100,
    },
    {
        id: 4,
        title: 'TypeScript',
        value: 50,
        max: 100,
    },
    {
        id: 5,
        title: 'React, NextJs',
        value: 100,
        max: 100,
    },
    {
        id: 6,
        title: 'React Native',
        value: 60,
        max: 100,
    },
    {
        id: 7,
        title: 'Redux, Redux toolkit, RTK Query',
        value: 80,
        max: 100,
    },
    {
        id: 8,
        title: 'Styled component',
        value: 70,
        max: 100,
    },
    {
        id: 9,
        title: 'MeterialUI, TailwindCSS',
        value: 70,
        max: 100,
    },
    {
        id: 10,
        title: 'Node, NestJS',
        value: 50,
        max: 100,
    },
    {
        id: 11,
        title: 'TypeORM, SequalizeORM',
        value: 30,
        max: 100,
    },

    {
        id: 12,
        title: 'Docker, Docker compose',
        value: 30,
        max: 100,
    },
];