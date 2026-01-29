type ProjectType = {
    id: number;
    img: string;
    title: string;
    skills: string;
    discription: string
}

export const Projects: ProjectType[] = [
    {
        id: 1,
        img: "/image/Project11.png",
        title: "Netflix Clone",
        skills: "Next.js /Tailwind.css /TypeScript",
        discription: "A responsive Netflix clone built with Next.js, Tailwind CSS, and TypeScript."
    },

    {
        id: 2,
        img: "/image/Project3.png",
        title: "E-commerce Website",
        skills: "React /Tailwind.css /javaScript",
        discription: "A responsive e-commerce website built with React, Tailwind CSS, and TypeScript."
    },

    {
        id: 3,
        img: "/image/Project22.png",
        title: "Dashboard Admin Panel",
        skills: "React /Tailwind.css /JavaScript",
        discription: "A responsive dashboard admin panel built with React, Tailwind CSS, and JavaScript."
    },
]