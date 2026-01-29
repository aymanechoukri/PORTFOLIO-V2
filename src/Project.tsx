import { Projects } from "./Data/data";
import { FiFolder } from "react-icons/fi";
import Image from "next/image";

export default function MyProjects() {
  console.log(Projects);
  return (
    <section className="w-full overflow-hidden" id="Project">
      <h2 className="text-2xl text-[#39CEED] ml-20 mb-10 font-extrabold flex items-center gap-3">
        <span>
          <FiFolder className="text-3xl text-cyan-400" />
        </span>
        Projects
      </h2>
      <div className="flex justify-center w-[95%] mx-auto gap-4">
        {Projects.map((project) => (
          <div key={project.id} className="w-[350px] flex flex-col space-y-2">
            <Image
              src={project.img}
              alt={project.title}
              width={350}
              height={50}
              className="shadow-[#39cfed27] shadow-lg object-cover rounded-xl"
            />
            <div className="px-2">
              <h3 className="text-[#39CEED] text-xl font-bold">
                {project.title}
              </h3>
              <p className="text-gray-400 font-medium">{project.discription}</p>
              <span className="text-gray-400 font-serif ">{project.skills}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
