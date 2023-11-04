import { forwardRef } from "react";
import clsx from "clsx";

import { ExperienceItem } from "./experience-item";
import { Stylizable } from "../../types/stylizable";
import { Heading } from "../../components";

type ExperienceProps = Stylizable;

export const Experience = forwardRef<HTMLElement, ExperienceProps>(
  ({ className }, ref) => {
    return (
      <section
        data-anchor="experience"
        ref={ref}
        className={clsx(className && className)}
      >
        <Heading text="My experience so far" className="mb-5 md:mb-8" />
        <div className="md:border-l md:pl-6 md:border-zinc-700/40">
          <div className="flex flex-col space-y-12 md:space-y-16">
            <ExperienceItem
              name="FABRITY"
              position="Software Architect"
              from="March 2022"
              skills={[
                "dotnetcore",
                "dot-net",
                "microsoftsqlserver",
                "react",
                "redux",
                "sass",
                "bootstrap",
                "webpack",
              ]}
              tags={["Leadership", "Architecture", "Backend", "Frontend"]}
              url="https://fabrity.com"
            >
              <p>
                As a lead software architect for FastAPP, a low-code enterprise
                platform I help product owners translate their business
                requirements into clean, robust and extensible technical
                solutions.
              </p>
              <p>
                As a competence leader in area of .NET I help backend
                programmers hone their skills by supporting them in their
                everyday work.
              </p>
              <p>
                As a leader of an internal knowledge sharing programme I
                organize monthly meetings, where passion-driven people can share
                their knowledge with the rest of the company.
              </p>
              <p>
                Furthermore I do technical interviews and serve as a conference
                speaker on behalf of Fabrity.
              </p>
            </ExperienceItem>
            <ExperienceItem
              name="Medialni Online"
              position="Chief Technology Officer"
              from="April 2021"
              to="January 2023"
              skills={["php", "wordpress", "sass", "bootstrap", "gulp"]}
              tags={["Leadership", "Management", "Backend", "Frontend"]}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                eius vel voluptas magni atque quae. Aperiam culpa quibusdam
                earum repellat?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                eius vel voluptas magni atque quae. Aperiam culpa quibusdam
                earum repellat?
              </p>
            </ExperienceItem>
            <ExperienceItem
              name="FABRITY"
              position="Lead Full Stack Engineer"
              from="June 2020"
              to="January 2021"
              skills={[
                "angularjs",
                "dotnetcore",
                "postgresql",
                "kubernetes",
                "docker",
                "nginx",
                "sass",
                "webpack",
              ]}
              url="https://fabrity.com"
              tags={["Leadership", "Frontend", "Backend", "Architecture"]}
            >
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                sit recusandae minima officiis minus quibusdam? Suscipit quod
                cum maxime vitae!
              </p>
            </ExperienceItem>
            <ExperienceItem
              name="umlaut"
              position="Software Engineer"
              from="October 2019"
              to="June 2020"
              skills={[
                "dotnetcore",
                "angularjs",
                "postgresql",
                "mongodb",
                "docker",
                "nginx",
                "sass",
                "webpack",
                "amazonwebservices",
              ]}
              url="https://www.umlaut.com"
              tags={["Backend", "Leadership", "Frontend", "Architecture"]}
            >
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                sit recusandae minima officiis minus quibusdam? Suscipit quod
                cum maxime vitae!
              </p>
            </ExperienceItem>
            <ExperienceItem
              name="infinIT Codelab"
              position="Software Engineer"
              from="July 2018"
              to="October 2019"
              skills={["dotnetcore", "dot-net", "microsoftsqlserver"]}
              url="https://codelab.eu"
              tags={["Backend", "Leadership", "Embedded", "Automotive"]}
            >
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                sit recusandae minima officiis minus quibusdam? Suscipit quod
                cum maxime vitae!
              </p>
            </ExperienceItem>
            <ExperienceItem
              name="Software Development Academy"
              position="Programming Coach"
              from="December 2018"
              to="June 2019"
              skills={["java", "spring"]}
              url="https://sdacademy.pl"
              tags={["Mentoring"]}
            >
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                sit recusandae minima officiis minus quibusdam? Suscipit quod
                cum maxime vitae!
              </p>
            </ExperienceItem>
            <ExperienceItem
              name="Avid Technology"
              position="Junior Software Engineer"
              from="May 2017"
              to="June 2018"
              skills={[
                "cplusplus",
                "react",
                "redux",
                "nodejs",
                "java",
                "spring",
              ]}
              url="https://www.avid.com"
              tags={["Embedded", "Audio", "Video", "Backend", "Frontend"]}
            >
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                sit recusandae minima officiis minus quibusdam? Suscipit quod
                cum maxime vitae!
              </p>
            </ExperienceItem>
            <ExperienceItem
              name="brightONE Poland"
              position="Junior Software Engineer"
              from="October 2016"
              to="April 2017"
              skills={["cplusplus", "java", "python"]}
              url="https://www.linkedin.com/company/infinit-cl/about"
              tags={["Automotive", "Embedded", "HMI"]}
            >
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                sit recusandae minima officiis minus quibusdam? Suscipit quod
                cum maxime vitae!
              </p>
            </ExperienceItem>
          </div>
        </div>
      </section>
    );
  }
);
