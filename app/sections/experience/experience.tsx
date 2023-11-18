import { forwardRef } from "react";
import clsx from "clsx";

import { Heading } from "@/app/components/heading";

import { Stylizable } from "../../types/stylizable";

import { ExperienceItem } from "./experience-item";

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
                As the founder and leader of a digital agency focused on
                catering to the unique needs of local small businesses, I
                orchestrated a team of four talented professionals specializing
                in comprehensive marketing, branding, copywriting, and website
                development services.
              </p>
              <p>
                My primary role encompassed multifaceted responsibilities,
                including client communication, nurturing relationships,
                securing new contracts and ensuring our agency remained at the
                forefront of the industry, offering innovative solutions to our
                clientele.
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
                I assumed the dual role of manager and frontend architect in the
                project that connected pharmaceutical facilities worldwide. I
                oversaw nearly 30 team members during crucial project phases.
              </p>
              <p>
                The architectural aspect of my role involved crafting the
                frontend framework, leveraging innovative technologies to ensure
                the application&apos;s usability, functionality, and scalability
                met the exacting standards.
              </p>
              <p>
                This experience improved my skills in managing large projects,
                leading diverse teams, and handling high-pressure situations,
                all while delivering a vital solution for my client.
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
                { icon: "java", tooltip: "Java" },
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
                I played a key part in conceptualizing and architecting an
                internal competence tracking software. My responsibilities
                spanned from translating intricate business requirements into
                technical specifications, meticulously outlining an adaptable
                architecture, to coordinating and mentoring a dedicated team of
                4 developers.
              </p>
              <p>
                During this period, I was actively involved in two additional
                projects.
              </p>
              <p>
                One project centered around energy industry software, wherein I
                held the position of lead frontend developer. In the other
                project, I specialized in crafting custom diagrams designed
                specifically for representing business intelligence. Both
                aforementioned applications were developed using Angular 8.
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
                { icon: "microsoftsqlserver", tooltip: "SQL Server" },
              ]}
              url="https://codelab.eu"
              tags={["Backend", "Leadership", "Embedded", "Automotive"]}
            >
              <p>
                My job at infinIT Codelab predominantly involved leading a team
                of 4 in a series of projects concentrated within the automotive
                sector. Our primary focus was the development of specialized
                software for automated electronic control unit flashing,
                ensuring the proper installation of software upgrades on
                multiple devices.
              </p>
              <p>
                Furthermore, I held the responsibility of gathering requirements
                for upcoming projects and estimating their scope.
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
                I had the responsibility of mentoring individuals at the
                bootcamp to transform them into proficient Java developers. My
                lectures primarily focused on software testing, design patterns,
                and the practical application of development concepts.
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
                I was heavily involved in Avid&apos;s flagship product,
                &quot;Pro Tools&quot;. My primary responsibilities revolved
                around migrating support from the .mov extension to a newly
                developed custom format. Additionally, I extended Pro
                Tools&apos; features and designed custom tools for quality
                assurance purposes.
              </p>
              <p>
                Concurrently, I served as a tech lead within the Polish Pro
                Tools Team.
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
                { icon: "python", tooltip: "Python 3" },
              ]}
              url="https://www.linkedin.com/company/infinit-cl/about"
              tags={["Automotive", "Embedded", "HMI"]}
            >
              <p>
                My primary focus revolved around developing an HMI
                (human-machine interface) testing tool.
              </p>
              <p>
                Additionally, I actively contributed to an R&amp;D project aimed
                at creating software that utilized gesture recognition for
                navigating a car&apos;s display.
              </p>
            </ExperienceItem>
          </div>
        </div>
      </section>
    );
  },
);
