import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillsData = [
  {
    name: "Information Technology and Professional services",
    icon: <FaCameraRetro className="text-4xl text-primary" />,
    link: "#",
    description:
      "We offer a comprehensive range of services to help businesses improve their business operations, leverage technology to meet their strategic goals and optimize their IT infrastructure.  Depending on the industry, size, and particular demands of the business, different services will be customized.",
    aosDelay: "0",
  },
  {
    name: "Project Management Services",
    icon: <GiNotebook className="text-4xl text-primary" />,
    link: "#",
    description:
      "We plan, organize, coordinate, and carry out projects to accomplish specific requirements within predetermined boundaries like time, budget, and scope. We assure successful project execution, achieve project goals, and provide value to stakeholders. Our skills and knowledge as project managers support risk management, resource optimization, efficient communication, and ensuring that projects are finished within the established parameters.",
    aosDelay: "300",
  },
  {
    name: "Custom Software Development",
    icon: <SlNote className="text-4xl text-primary" />,
    link: "#",
    description:
      "We help with the development of software programs or systems that are specially crafted to satisfy each organization's particular demands and needs. Custom software, in contrast to off-the-shelf software, is created from the base up while taking into account the unique business procedures, workflows, and organizational objectives.  We deliver adaptability, scalability, and the capacity to adjust as company requirements alter.",
    aosDelay: "500",
  },
  {
    name: "Network infrastructure design and development",
    icon: <SlNote className="text-4xl text-primary" />,
    link: "#",
    description:
      "To satisfy the connectivity and communication requirements of an organization, we engage in the development, implementation, and optimization of a network's physical and logical components. Designing network architecture, identifying the appropriate hardware and software components, configuring network devices, and installing network protocols and security measures are all included in this",
    aosDelay: "700",
  },
];
const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary"
            >
              Explore Our Services
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-600 dark:text-gray-400 text-sm"
            >
              We are self-service data analytics software that lets you create
              visually.
            </p>
          </div>

          {/* services cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4"
              >
                <div>{skill.icon}</div>
                <h1 className="text-lg font-semibold">{skill.name}</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>

          {/* button */}
          <div
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-offset="0"
            className="text-center mt-4 sm:mt-8"
          >
            <button className="primary-btn">Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
