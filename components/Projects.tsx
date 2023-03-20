import React from "react";
import { motion } from "framer-motion";
import { Project } from "@/typings";
import { UrlFor } from "@/sanity";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-x-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 "
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              src={UrlFor(project?.image).url()}
              alt=""
            />

            <div className="space-y-10 px-0 md:px-0 max-w-6xl">
              <h4 className="text-3xl font-semibold text-center">
                {project?.title}
              </h4>

              <div className="flex items-center space-x-2 justify-center">
                {project?.technologies.map((technology) => (
                  <img
                    className="h-5 w-5"
                    key={technology._id}
                    src={UrlFor(technology.image).url()}
                  />
                ))}
              </div>

              <p className="text-lg text-center md:text-left">
                {project?.summary}
                {project?.linkToBuild}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%]" />
    </motion.div>
  );
};

export default Projects;
