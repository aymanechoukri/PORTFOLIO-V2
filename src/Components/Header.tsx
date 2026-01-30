import Image from "next/image"

export default function Header() {
    return(
        <header className="w-full px-5 bg-white/5 backdrop-blur-2xl h-20 shadow-[0_0_15px_rgb(57,206,237,0.4)] sticky top-0 left-0 z-50">
            <nav className="flex justify-between items-center w-full">
                <Image src={"/image/Logo1.png"} alt="Logo" width={100} height={50}  />
                <ul className="flex justify-center items-center gap-5">
                    <a href="#Home"><li className="text-[#39CEED] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100">Home</li></a>
                    <a href="#about"><li className="text-[#39CEED] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100">About</li></a>
                    <li className="text-[#39CEED] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100">Services</li>
                    <li className="text-[#39CEED] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100">Contact</li>
                </ul>
            </nav>
        </header>
    )
}