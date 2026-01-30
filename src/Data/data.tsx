type SkillType = {
    name: string;
    icon: string;
    category: string;
}

export const Skills: SkillType[] = [
    { name: "HTML", icon: "📄", category: "Languages" },
    { name: "CSS", icon: "🎨", category: "Languages" },
    { name: "JavaScript", icon: "⚡", category: "Languages" },
    { name: "TypeScript", icon: "📘", category: "Languages" },
    { name: "React", icon: "⚛️", category: "Frameworks" },
    { name: "Next.js", icon: "▲", category: "Frameworks" },
    { name: "Git/GitHub", icon: "🔀", category: "Tools" },
    { name: "UI/UX", icon: "🎯", category: "Design" },
]

type ProjectType = {
    id: number;
    img: string;
    title: string;
    skills: string;
    discription: string
    link: string;
}

export const Projects: ProjectType[] = [
    {
        id: 1,
        img: "/image/Project11.png",
        title: "Netflix Clone",
        skills: "Next.js /Tailwind.css /TypeScript",
        discription: "A responsive Netflix clone built with Next.js, Tailwind CSS, and TypeScript.",
        link: "https://streamflextsx.netlify.app/"
    },

    {
        id: 2,
        img: "/image/Project3.png",
        title: "E-commerce Website",
        skills: "React /Tailwind.css /javaScript",
        discription: "A responsive e-commerce website built with React, Tailwind CSS, and TypeScript.",
        link: "https://sales-stores.netlify.app/"
    },

    {
        id: 3,
        img: "/image/Project22.png",
        title: "Dashboard Admin Panel",
        skills: "React /Tailwind.css /JavaScript",
        discription: "A responsive dashboard admin panel built with React, Tailwind CSS, and JavaScript.",
        link: "https://aymane-dashboard.netlify.app/"
    },
]