import { Job } from '../models/job.model';

// TODO: Move to DB... Temp solution for MVP
export const WORK_DATA: Job[] = [
  {
    id: '1',
    position: 'Technical Lead',
    company: 'Synechron',
    dateStart: 'Jan 2024',
    dateEnd: 'Present',
    responsibilities: `As a Tech Lead, I combine hands-on development with leadership by collaborating closely with clients, ensuring delivery timelines, and addressing risks. I mentor team members, oversee task delegation, and manage operational duties like resource allocation and recruitment. Additionally, I focus on the career development of the people I manage, guiding them to grow professionally and achieve their goals.`,
    skills: ['Team leadership', 'Engineering Management'],
    projects: [
      {
        title:
          'Project - Migration of a Complex Index Management Solution to Angular/.NET',
        description: `When my team was brought onto the project, we were clearly facing an uphill battle. This was the third attempt to migrate a complex legacy system built on Silverlight to a modern Angular-based solution. Two teams had already tried and failed. The task ahead wasn't just about migration—it was about rebuilding trust, creating clarity, and setting the project on a solid foundation.

Our first step was to dig deep into the legacy codebase and the remnants of the previous migration attempts. The system was a tangled web of undocumented, bug-ridden code. To make matters worse, we had no detailed requirements—just a high-level understanding of what the application was supposed to do and a client's initial six-month timeline for the migration. It was immediately apparent that the journey would be far more complex than anticipated.

We started by organizing technical analysis sessions. Our QA team supported these efforts by writing BDD tests, which were crucial for reverse-engineering the system's functionality. Piece by piece, we documented the critical workflows and identified the features that needed migration. This documentation became our migration roadmap and the foundation for our strategy.

On the technical front, we made some key architectural decisions to set the project up for success. We established the front-end as an NX Monorepo. This choice allowed us to break the application into manageable modules, enabling better scalability and collaboration. Meanwhile, the back-end team created REST APIs to expose the necessary endpoints. We used Swagger to ensure team collaboration with clear and accessible API documentation.

As we delved deeper into the project, it became evident that the six-month timeline was unrealistic. We presented a detailed plan to the client, explaining that a two-year timeline was more appropriate for the scope of work. Despite the shock, the client appreciated our transparency and used the revised timeline to adjust their planning and budgeting.

Within six months, we delivered a stable version of the application with critical features migrated. This milestone was significant for us and the client, who finally had a functional foundation they could build on. While resource constraints eventually led the client to pause the project, we left them with a clear roadmap for completing the migration and a deep understanding of the effort required.

Looking back, the project was more than a technical migration. It was a lesson in resilience, collaboration, and the power of a well-coordinated team. As one of the client's managers put it: "Marko was a great fit in balancing best practices and sustainability with business needs. Despite a noisy and challenging environment, he remained objective, pragmatic, and sympathetic to the legacy application's risks. His team rebuilt from scratch after the previous vendor's work, delivering a stable foundation under difficult circumstances."
`,
        technologies: [
          'angular',
          'typescript',
          'javascript',
          'rxjs',
          'ngrx',
          'nx-monorepo',
          'html',
          'css',
          'jest',
          'rest-api',
          'swagger',
          'bitbucket',
          'confluence',
          'jira',
        ],
      },
      {
        title:
          'Project - Front-End Solutions for a Leading Global Stock Exchange',
        description: `Stepping into the role of Technical Lead, I took on the responsibility of leading a team through a high-stakes migration project for the client. During this time, I maintained close ties to the index management project and the reusable UI library initiative I had championed as a Senior Associate.

The migration project provided valuable lessons in scalable architecture, particularly with the adoption of NX Monorepo. Recognizing the potential of this approach, I proposed applying the same architecture to the index management solution. Working closely with the most senior developer on the team, we devised a detailed plan to restructure the project using NX Monorepo and micro-frontends via module federation. By this point, the index management project had grown significantly, incorporating additional applications alongside the UI library, and required a more scalable and maintainable structure.

When I rejoined the index management team after completing the migration work, I found that the strong architectural foundations we had laid had been successfully implemented. These foundations enabled the project to operate more efficiently, ensuring a robust and scalable solution for one of the most demanding industries in the world.

Today, I continue contributing to the index management project, leveraging our modular architecture and collaborative team dynamics to deliver solutions that meet and exceed client expectations.
`,
        technologies: [
          'angular',
          'typescript',
          'javascript',
          'rxjs',
          'nx-monorepo',
          'html',
          'css',
          'storybook',
          'tailwind',
          'jest',
          'graphql',
          'apollo',
          'jenkins',
          'bitbucket',
          'confluence',
          'jira',
        ],
      },
    ],
  },
  {
    id: '2',
    position: 'Senior Associate',
    company: 'Synechron',
    dateStart: 'Jun 2023',
    dateEnd: 'Dec 2023',
    responsibilities: `Designed and implemented the front-end architecture for the index management platform. Contributed to building a skilled front-end team through participation in technical interviews and established a hub to promote knowledge-sharing and continuous improvement.`,
    skills: ['Angular', 'Front-end Architecture'],
    projects: [
      {
        title:
          'Project - Front-End Solutions for a Leading Global Stock Exchange',
        description: `The journey began when a colleague and I were tasked with developing a new index management solution from scratch for one of the world's largest stock exchanges. Initially, it was just the two of us setting up the architecture, estimating tasks, and laying the groundwork for the project. Over time, our front-end team grew to four developers, and we continued refining and expanding the system to meet the client's needs.

I identified an opportunity to enhance efficiency and consistency across applications early in the project. I proposed the creation of a reusable UI library that could serve our project and other teams and applications within the client's ecosystem. Built with Storybook, the library enabled isolated testing of UI components, streamlining development and improving reliability. This initiative became a cornerstone for a unified and scalable approach to front-end development within the organization.

As the project evolved, the scope expanded, and we became part of a larger effort involving two separate teams that were later merged into a cohesive unit of approximately 30 members. This included back-end developers, QA engineers, DevOps specialists, business analysts, engineering managers, product managers, and designers. The integration brought challenges but also opened immense opportunities for collaboration and innovation.

After six months of contributing to the project's foundation and success, I was promoted to leadership, transitioning to work on a critical migration project for the same client.
`,
        technologies: [
          'angular',
          'typescript',
          'javascript',
          'rxjs',
          'html',
          'css',
          'storybook',
          'jasmine',
          'karma',
          'bitbucket',
          'confluence',
          'jira',
        ],
      },
    ],
  },
  {
    id: '3',
    position: 'Founder / Lecturer',
    company: 'Programarko',
    dateStart: 'Nov 2021',
    dateEnd: 'Feb 2024',
    responsibilities: `Founded and launched an online programming school for children, by managing project plans, budgets, and market research, while developing engaging courses and video content. Expanded reach through partnerships, marketing campaigns, and webinars, promoting programming education to kids.`,
    skills: ['Teaching', 'Product & Bussiness Development'],
    projects: [
      {
        title: 'The Journey',
        description: `The idea for an online programming school for children, Programarko, had been simmering in my mind for some time. It was during the COVID-19 pandemic, with more time on my hands, I finally decided to take action. I started by publishing programming tutorials on YouTube, aiming to introduce children to coding concepts in an engaging and approachable way. The positive feedback from parents and kids was encouraging and confirmed that I was on the right track. It also motivated me to elevate this initiative into a platform.

I began developing the website and structuring the course plan. I designed the curriculum to ensure a smooth learning journey for children, starting with introductory courses. It was structured into four levels—Scratch Intro, Zero, Rookie, and Pro—to guide children from basic concepts to more advanced programming techniques. One of my proudest achievements was making the Intro course completely free, allowing all children to access the basics of Scratch programming regardless of their parents financial situation.

I also had ambitious plans for the future of Programarko, envisioning additional courses covering web development, Python, artificial intelligence, game development, and more.

Creating high-quality content was a major challenge, as I handled every aspect of production myself—from recording and editing videos to publishing them online. Over time, I developed over 400 short, engaging videos that explained programming concepts in a way children could easily understand and enjoy. To promote Programarko, I ran email and social media campaigns, creating video teasers to spark interest. However, it wasn't always easy to convince parents that children could effectively learn programming online rather than through traditional classroom settings.

Despite these challenges, Programarko gained traction. I partnered with companies like Novalite and collaborated with STEM Classroom to host a webinar for 1,200 school teachers, showcasing the platform's potential to make programming education accessible to children across Serbia. Programarko grew to approximately 1,000 users through these efforts, proving that the concept resonated with its target audience.

Unfortunately, as much as I loved working on Programarko, the limited market size in Serbia and my increasing professional responsibilities eventually led me to put the project on hold. However, I'm not done with it yet. I plan to publish all the content on YouTube shortly, making it freely available to children everywhere.

Programarko remains one of my most meaningful projects, reflecting my passion for education and commitment to making programming accessible to the next generation, especially in smaller communities where opportunities are rare.
`,
      },
    ],
  },
  {
    id: '4',
    position: 'Front-End Team Lead',
    company: 'Valcon',
    dateStart: 'Sep 2022',
    dateEnd: 'Jun 2023',
    responsibilities: `Led the front-end development of a gaming platform for key management, providing technical expertise as a Front-End Architect and fostering cross-functional collaboration to ensure timely delivery of scalable and maintainable solutions.`,
    skills: ['Team Leadership', 'Front-end Architecture'],
    projects: [
      {
        title: 'Project - Key Management for Gaming',
        description: `Initially joining the team as a senior developer, I was promoted to Front-End Team Lead after just two weeks. The project centered around creating a gaming platform for key management, where I set up the front-end architecture and played a critical role in defining technical solutions.

At the start, the team structure posed significant challenges. Development was divided into front-end, back-end, QA, and DevOps units, resulting in communication gaps and inefficiencies. I recognized this issue and advocated for a shift to smaller, cross-functional teams. After one month of discussions with managers and stakeholders, my proposal was accepted. This reorganization significantly improved collaboration and streamlined the development process.

We successfully delivered the MVP within five months, achieving the project's key milestones. Throughout the process, I liaised between the Front-End, Back-End,  CTO, Product Managers, and other departments, ensuring alignment with project goals.

Unfortunately, the company underwent significant layoffs due to a sudden market downturn, bringing my tenure to an unexpected close. Despite the abrupt end, I'm proud of the strong foundation we built and the successful delivery of the MVP.
`,
        technologies: [
          'angular',
          'typescript',
          'javascript',
          'rxjs',
          'ngrx',
          'html',
          'css',
          'prime-ng',
          'jasmine',
          'karma',
          'rest-api',
          'swagger',
          'azure',
        ],
      },
    ],
  },
  {
    id: '5',
    position: 'Front-End Lead / Partner',
    company: 'Rockdata',
    dateStart: 'Mar 2020',
    dateEnd: 'May 2022',
    responsibilities: `Supported stakeholders in scaling the team from 2 to 14 members and establishing the company's operations in Serbia by guiding stakeholders in adopting Agile methodologies, optimizing the performance of Scrum teams, and improving project management practices. Played a key role in setting up front-end practices and successfully delivering two projects for the GroupM client in the marketing domain.`,
    skills: ['Team leadership', 'Scrum Master', 'Front-end Architecture'],
    projects: [
      {
        title: 'Project - MVP for Major Marketing Agency Client',
        description: `Upon joining Rockdata, my task was to form a team in Serbia to address challenges in an ongoing project for a major marketing agency client. Freelancers had managed the project and were facing issues due to poor practices and unrealistic client expectations. I provided the owners with accurate information and a plan to resolve the situation. Within two months, we stabilized the project and successfully delivered the MVP to the client, meeting technical and business requirements. This achievement enabled us to proceed with new projects and strengthen our relationship with the client.`,
        technologies: [
          'angular',
          'typescript',
          'javascript',
          'rxjs',
          'ngrx',
          'html',
          'css',
          'material',
          'azure',
        ],
      },
      {
        title: 'Project - Journeys Dashboard',
        description: `After successfully delivering the MVP, I transitioned to leading the development of the Journeys Dashboard. That involved designing and implementing a front-end architecture for a scalable and maintainable system. As the technical lead, I supported the team through code reviews and ensured the integration of best practices. Regular coaching sessions and feedback ensured the team’s growth and alignment with project goals, resulting in a successful, user-friendly dashboard for the client.`,
        technologies: [
          'angular',
          'typescript',
          'javascript',
          'rxjs',
          'ngrx',
          'html',
          'css',
          'carbon',
          'jasmine',
          'karma',
          'rest-api',
          'swagger',
          'azure',
        ],
      },
      {
        title: 'Project - Troovie (Mobile Treasure Hunt Game)',
        description: `In the Troovie project, we migrated a mobile-native treasure hunt game to the Ionic framework, ensuring a seamless user experience across multiple platforms while maintaining performance standards. I mentored a junior developer, led the technical design, established the necessary architecture, and ensured adherence to best practices.

        A key aspect of this project involved integrating device sensors such as GPS and accelerometer to enhance gameplay. Utilizing Ionic's Capacitor plugins, we accessed native device features, enabling real-time location tracking and motion detection. This integration required careful permissions handling and efficient data processing to ensure smooth performance.
`,
        technologies: [
          'angular',
          'typescript',
          'javascript',
          'rxjs',
          'html',
          'css',
          'ionic',
          'android-studio',
          'xcode',
        ],
      },
    ],
  },
  {
    id: '6',
    position: 'Front-End Engineer',
    company: 'CCBill / PhoenixNAP',
    dateStart: 'Sep 2018',
    dateEnd: 'Feb 2020',
    responsibilities: `I contributed to developing and maintaining the company's Bare Metal billing application, collaborating with a team of approximately 80 professionals to deliver a billing system that facilitated seamless server rentals for thousands of users.`,
    skills: ['Angular', 'JavaScript', 'Unit Testing', 'Scrum'],
    projects: [
      {
        title: 'Project - Admin Billing',
        description: `I joined a team of four JS developers tasked with creating the front-end of the Bare Metal Cloud billing application using Angular. Surrounded by senior developers and architects, I had the opportunity to learn and adhere to industry best practices. Each front-end team member was assigned to a functional team, collaborating on different parts of the final solution. This project provided valuable technical and organizational experience, including frequent participation in demos for executive leadership.

Our team focused on developing a user-friendly interface that allowed clients to manage their server rentals efficiently. The project involved integrating various APIs and services to support functionalities like server deployment, configuration, and scaling. Additionally, we ensured that the application adhered to best practices in coding standards and performance optimization. It was my first experience writing unit tests, and I quickly recognized their value in maintaining the application and updating dependencies like Angular versions. From that point onward, I advocated for implementing unit tests on all projects I worked on, understanding their critical role in early bug detection, code quality improvement, and facilitating updates.

This experience enhanced my technical skills and provided insights into agile development processes and effective team collaboration, laying a strong foundation for future projects.
`,
        technologies: [
          'angular',
          'typescript',
          'javascript',
          'ngrx',
          'rxjs',
          'html',
          'css',
          'jasmine',
          'karma',
          'bootstrap',
          'jira',
          'bitbucket',
        ],
      },
    ],
  },
  {
    id: '7',
    position: 'Front-end Developer',
    company: 'Monochrome',
    dateStart: 'Aug 2017',
    dateEnd: 'Aug 2018',
    responsibilities: `Ovo je opis u kom treba da napises da si reporting menadzer 8 developera. Da kreiras godisnje ciljeve i radis aprejzale sa njima, pratis njihov razvoj, vodis racuna o godisnjim odmorima itd.
Pored toga vodis razvoj projekata na koje si dodeljen`,
    skills: ['Team leadership', 'Engineering Management'],
    projects: [
      {
        title: 'Project 1',
        description: `Ovo je opis u kom treba da napises da si reporting menadzer 8 developera. Da kreiras godisnje ciljeve i radis aprejzale sa njima, pratis njihov razvoj, vodis racuna o godisnjim odmorima itd.
Pored toga vodis razvoj projekata na koje si dodeljen`,
        technologies: ['angular', 'typescript'],
      },
      {
        title: 'Project 2',
        description: `I lead a team of over 10 engineers and QA specialists in migrating a complex stock market solution to Angular codebase with a REST API. My role involves managing the project, providing technical direction, and supporting team development. I worked with delivery directors on reporting and coordinate with client project managers on planning and delivery, addressing both technical and domain-specific challenges.`,
        technologies: ['angular', 'typescript'],
      },
    ],
  },
  {
    id: '8',
    position: 'UI Developer',
    company: 'Novalite',
    dateStart: 'Jan 2016',
    dateEnd: 'Aug 2017',
    responsibilities: `Ovo je opis u kom treba da napises da si reporting menadzer 8 developera. Da kreiras godisnje ciljeve i radis aprejzale sa njima, pratis njihov razvoj, vodis racuna o godisnjim odmorima itd.
Pored toga vodis razvoj projekata na koje si dodeljen`,
    skills: ['Team leadership', 'Engineering Management'],
    projects: [
      {
        title: 'Project 1',
        description: `Ovo je opis u kom treba da napises da si reporting menadzer 8 developera. Da kreiras godisnje ciljeve i radis aprejzale sa njima, pratis njihov razvoj, vodis racuna o godisnjim odmorima itd.
Pored toga vodis razvoj projekata na koje si dodeljen`,
        technologies: ['angular', 'typescript'],
      },
      {
        title: 'Project 2',
        description: `I lead a team of over 10 engineers and QA specialists in migrating a complex stock market solution to Angular codebase with a REST API. My role involves managing the project, providing technical direction, and supporting team development. I worked with delivery directors on reporting and coordinate with client project managers on planning and delivery, addressing both technical and domain-specific challenges.`,
        technologies: ['angular', 'typescript'],
      },
    ],
  },
  {
    id: '9',
    position: 'Front-End Developer / Co-founder',
    company: 'Awerest',
    dateStart: 'Feb 2014',
    dateEnd: 'Dec 2015',
    responsibilities: `Ovo je opis u kom treba da napises da si reporting menadzer 8 developera. Da kreiras godisnje ciljeve i radis aprejzale sa njima, pratis njihov razvoj, vodis racuna o godisnjim odmorima itd.
Pored toga vodis razvoj projekata na koje si dodeljen`,
    skills: ['Team leadership', 'Engineering Management'],
    projects: [
      {
        title: 'Project 1',
        description: `Ovo je opis u kom treba da napises da si reporting menadzer 8 developera. Da kreiras godisnje ciljeve i radis aprejzale sa njima, pratis njihov razvoj, vodis racuna o godisnjim odmorima itd.
Pored toga vodis razvoj projekata na koje si dodeljen`,
        technologies: ['angular', 'typescript'],
      },
      {
        title: 'Project 2',
        description: `I lead a team of over 10 engineers and QA specialists in migrating a complex stock market solution to Angular codebase with a REST API. My role involves managing the project, providing technical direction, and supporting team development. I worked with delivery directors on reporting and coordinate with client project managers on planning and delivery, addressing both technical and domain-specific challenges.`,
        technologies: ['angular', 'typescript'],
      },
    ],
  },
  {
    id: '10',
    position: 'Level Designer',
    company: 'Eipix',
    dateStart: 'May 2014',
    dateEnd: 'May 2015',
    responsibilities: `Ovo je opis u kom treba da napises da si reporting menadzer 8 developera. Da kreiras godisnje ciljeve i radis aprejzale sa njima, pratis njihov razvoj, vodis racuna o godisnjim odmorima itd.
Pored toga vodis razvoj projekata na koje si dodeljen`,
    skills: ['Team leadership', 'Engineering Management'],
    projects: [
      {
        title: 'Project 1',
        description: `Ovo je opis u kom treba da napises da si reporting menadzer 8 developera. Da kreiras godisnje ciljeve i radis aprejzale sa njima, pratis njihov razvoj, vodis racuna o godisnjim odmorima itd.
Pored toga vodis razvoj projekata na koje si dodeljen`,
        technologies: ['angular', 'typescript'],
      },
      {
        title: 'Project 2',
        description: `I lead a team of over 10 engineers and QA specialists in migrating a complex stock market solution to Angular codebase with a REST API. My role involves managing the project, providing technical direction, and supporting team development. I worked with delivery directors on reporting and coordinate with client project managers on planning and delivery, addressing both technical and domain-specific challenges.`,
        technologies: ['angular', 'typescript'],
      },
    ],
  },
];
