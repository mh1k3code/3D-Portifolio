import {projects} from '../constants';
import { arrow } from '../assets/icons';
import CTA from '../components/CTA';
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section className="max-container">
        <h1 className="head-text">Hello</h1>
          My <span className="blue_gradient_text
          font-semibold drop-shadow">Projects</span>
          <div className="mt-5 flex flex-col gap-3 > 
          text-slate-500">
            <p> I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. Many of them are open-source, so if
        you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
        Your collaboration is highly valued!  </p>
            </div>
            <div className="flex flex-wrap my-20 gap-16">
              {projects.map((projects)=> (
                <div className="lg:w-[400px] w-full " key={projects.name}>
                  <div className="block-container w-12 h-12">
                    <div className={`btn-back rounded-xl $ {project.theme}`}/>
                    <div className="btn-back rounded-xl flex justify-center items-center">
                      <img
                      src={projects.iconUrl} 
                      alt="Project Icon"
                      className="w-1/2 h-1/2 object-contain"/>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-col">
                    <h4 className="text-2xl font-poppins font-semibold">
                      {projects.name}
                    </h4>
                    <p className="mt-2 text-slate-500">
                      {projects.description}
                    </p>
                    <div className="mt-5 flex items-center gap-2 font-poppins  ">
                      <Link
                      to={projects.link}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-semibold text-blue-600">
                          Live Link
                      </Link>
                      <img
                      src={arrow}
                      alt="arrow"
                      className="w-4 h-4 object-contain"
                      />
                    </div>
                  </div>
                </div>
              ))}

            </div>
            <hr className="border-slate-200"/>
            <CTA/>
            </section> 
  )
}

export default Projects
