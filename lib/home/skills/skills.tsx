import { forwardRef } from "react";
import clsx from "clsx";

import { Stylizable } from "@/lib/shared/types";
import { Heading } from "@/lib/shared/ui";

import { SkillItem } from "./skill-item";

type SkillsProps = Stylizable;

export const Skills = forwardRef<HTMLElement, SkillsProps>(
  ({ className }, ref) => {
    return (
      <section
        data-anchor="skills"
        ref={ref}
        className={clsx(className && className)}
      >
        <Heading text="What I am good at" className="mb-5 md:mb-8" />
        <div className="grid lg:grid-cols-2 gap-8">
          <SkillItem
            title="The Beauty"
            type="Frontend"
            skills={[
              { skill: "Angular 2+", level: "advanced", proficiency: 85 },
              { skill: "React.js", level: "advanced", proficiency: 80 },
              { skill: "TypeScript", level: "expert", proficiency: 92 },
              { skill: "CSS", level: "intermediate", proficiency: 65 },
            ]}
            related={[
              "NX",
              "Material UI",
              "Angular CDK",
              "Mantine",
              "Metronic",
              "Tailwind CSS",
              "Bootstrap",
              "SCSS",
              "BEM",
              "Storybook",
              "Jest",
              "React Testing Library",
              "Cypress",
              "React Query",
              "Next.js",
              "Scully",
              "Redux",
              "Redux Toolkit",
              "NGRX",
              "RxJs",
              "Webpack",
              "Vite",
              "esbuild",
              "Gulp",
              "Prettier",
              "ESLint",
              "Axios",
              "D3.js",
              "RWD",
            ]}
          >
            <p>
              I think of a frontend development as a craft that is mainly
              focused on delivering excellent user experience. I try to stay up
              to date with the newest UI trends and stick to proven solutions.
            </p>
            <p>
              When I contribute I try to reduce non-UI business logic to minimum
              as I firmly belive it is the backend&lsquo;s role to describe
              business logic.
            </p>
            <p>
              The fact that it is <em>just the looks</em> does not make me
              forget to stick to the best coding practices. Small, elastic and
              extensible components is what I am going for.
            </p>
          </SkillItem>
          <SkillItem
            title="The Beast"
            type="Backend"
            skills={[
              { skill: ".NET", level: "expert", proficiency: 95 },
              { skill: "OOP", level: "expert", proficiency: 97 },
              { skill: "SQL", level: "intermediate", proficiency: 73 },
              { skill: "Docker", level: "advanced", proficiency: 82 },
            ]}
            related={[
              "Entity Framework Core",
              "Dapper",
              "SQL Kata",
              "MediatR",
              "Mass Transit",
              "RabbitMQ",
              "ELK stack",
              "Hashicrop Vault",
              "Identity Server",
              "OpenIddict",
              "xUnit",
              "Testcontainers",
              "NSubstitute",
              "Bogus",
              "Specflow",
              "Azure",
              "SignalR",
              "gRPC",
              "REST",
              "SOAP",
              "WCF",
              "Active Directory",
              "Hangfire",
              "WPF",
              "Katana",
              "Mapperly",
              "Automapper",
              "Azure DevOps",
              "Github Actions",
            ]}
            primaryBackgroundClass="bg-indigo-600"
            primaryTextClass="text-indigo-500"
          >
            <p>
              My backend programming approach revolves around three core
              principles: clean and extensible solutions, rigorous testing with
              a focus on integration testing, and the use of modular.
            </p>
            <p>
              I prioritize clean and extensible code, striving for clarity and
              maintainability. This approach involves adhering to best practices
              and anticipating future changes.
            </p>
            <p>
              I am a strong advocate for testing, particularly integration
              testing, to catch issues early and ensure reliable system
              interactions. Lastly, I aim to create cloud-agnostic solutions to
              avoid vendor lock-in and enhance adaptability.
            </p>
          </SkillItem>
        </div>
      </section>
    );
  },
);
