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
                { icon: "dotnetcore", tooltip: ".NET 6" },
                { icon: "dot-net", tooltip: ".NET Framework 4.7.2" },
                { icon: "microsoftsqlserver", tooltip: "MS SQL Server 2019" },
                { icon: "react", tooltip: "React 16" },
                { icon: "redux", tooltip: "Redux" },
                { icon: "sass", tooltip: "SCSS" },
                { icon: "bootstrap", tooltip: "Bootstrap 3" },
                { icon: "webpack", tooltip: "Webpack" },
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
              skills={[
                { icon: "php", tooltip: "PHP 8" },
                { icon: "wordpress", tooltip: "Wordpress" },
                { icon: "sass", tooltip: "SCSS" },
                { icon: "bootstrap", tooltip: "Bootstrap 5" },
                { icon: "gulp", tooltip: "Gulp" },
              ]}
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
                { icon: "angularjs", tooltip: "Angular 12" },
                { icon: "dotnetcore", tooltip: ".NET Core 3.1" },
                { icon: "postgresql", tooltip: "PostgreSQL" },
                { icon: "kubernetes", tooltip: "Kubernetes" },
                { icon: "docker", tooltip: "Docker" },
                { icon: "nginx", tooltip: "nginx" },
                { icon: "sass", tooltip: "SCSS" },
                { icon: "webpack", tooltip: "Webpack" },
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
                { icon: "dotnetcore", tooltip: ".NET Core 3.1" },
                { icon: "angularjs", tooltip: "Angular 8 & 9" },
                { icon: "postgresql", tooltip: "Postgres" },
                { icon: "mongodb", tooltip: "MongoDB" },
                { icon: "docker", tooltip: "Docker" },
                { icon: "nginx", tooltip: "nginx" },
                { icon: "sass", tooltip: "SCSS" },
                { icon: "webpack", tooltip: "Webpack" },
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
              skills={[
                { icon: "dotnetcore", tooltip: ".NET Core 2.1" },
                { icon: "dot-net", tooltip: ".NET Framework 4.7.2" },
                { icon: "microsoftsqlserver", tooltip: "" },
              ]}
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
              skills={[
                { icon: "java", tooltip: "Java" },
                { icon: "spring", tooltip: "Spring Framework" },
              ]}
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
                { icon: "cplusplus", tooltip: "C++ / C++11" },
                { icon: "react", tooltip: "React 15" },
                { icon: "redux", tooltip: "Redux" },
                { icon: "nodejs", tooltip: "Node 8" },
                { icon: "java", tooltip: "Java" },
                { icon: "spring", tooltip: "Spring Framework" },
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
              skills={[
                { icon: "cplusplus", tooltip: "C++11" },
                { icon: "java", tooltip: "Java" },
                { icon: "python", tooltip: 'Python 3' },
              ]}
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
