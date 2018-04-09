import React from 'react';

import { ResumeContainer, Contacts, ResumeLinks, Section, Achievements, AchievementsEntry } from './Styled';

import 'public/css/resume.css';

const Resume = () => (
  <ResumeContainer className='container fs-small' style={{ maxWidth: '816px' }}>
    <div className='row align-items-center justify-content-between' style={{ height: '29px' }}>
      <div className='d-inline-flex col align-items-end justify-content-start height-100 bold fs-large'>En Mai</div>
      <div className='d-inline-flex col align-items-end justify-content-end fs-medium height-100'>San Francisco, CA</div>
    </div>
    <hr />
    <div className='row align-items-center justify-content-center'>
      <Contacts className='d-inline-flex justify-content-center'>(415) 680-0430</Contacts>
      <Contacts>|</Contacts>
      <Contacts className='d-inline-flex justify-content-center'> ericmak624@gmail.com</Contacts>
      <Contacts>|</Contacts>
      <Contacts className='d-inline-flex justify-content-center'>github.com/ericmai624</Contacts>
      <Contacts>|</Contacts>
      <Contacts className='d-inline-flex justify-content-center'>linkedin.com/in/eric-mai</Contacts>
    </div>
    <Section id='technical-skills'>
      <div className='row align-items-center justify-content-center section-title'>
        <div className='d-flex col justify-content-center fs-medium'>Technical Skills</div>
      </div>
      <div className='row'>
        <div className='col'>
          <b>Fluent: </b>
          {'JavaScript(ES6/ES7), HTML5, CSS3, React, Redux, Node, Express, Socket.io, PostgreSQL, MongoDB'}
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <b>Knowledgeable: </b>
          {'Python, Sass, Angular, jQuery, GraphQL, MySQL, Redis, Jest, Docker, Babel, Webpack, Gulp, FFmpeg, Git'}
        </div>
      </div>
    </Section>
    <Section id='software-applications'>
      <div>
        <div className='row align-items-center justify-content-center section-title'>
          <div className='d-flex col justify-content-center fs-medium'>Software Applications</div>
        </div>
        <div className='row application-title'>
          <div className='col-8'>
            <b>Mimoji: </b>
            {'Video-on-demand system for Chromecast or browser, Software Engineer'}
          </div>
          <div className='d-flex col-4 justify-content-end'>
            <ResumeLinks href='https://www.youtube.com/watch?v=jJ3qixXlKhE'>Demo</ResumeLinks>
            <span>, </span>
            <ResumeLinks href='https://github.com/ericmai624/mimoji-main'>Github</ResumeLinks>
          </div>
        </div>
        <Achievements>
          <AchievementsEntry>Synchronized states among devices using event-driven architecture to reduce network requests by 99%</AchievementsEntry>
          <AchievementsEntry>Remade video controls and file browser UI to provide a unified and intuitive look with React and Node File System</AchievementsEntry>
          <AchievementsEntry>Implemented an algorithm to transform video to HTTP Live Streaming segments on the fly utilizing FFmpeg</AchievementsEntry>
          <AchievementsEntry>Improved application maintainability by creating reusable React components with encapsulated styles</AchievementsEntry>
        </Achievements>
        <div className='row application-title'>
          <div className='col-8'>
            <b>Justag: </b>
            Unique movie rating system, Software Engineer
          </div>
          <div className='d-flex col-4 justify-content-end'>
            <ResumeLinks href='https://www.youtube.com/watch?v=jJ3qixXlKhE'>Demo</ResumeLinks>
            <span>, </span>
            <ResumeLinks href='https://github.com/ericmai624/mimoji-main'>Github</ResumeLinks>
          </div>
        </div>
        <Achievements>
          <AchievementsEntry>Created front-end directives such as auto resizing, infinite scrolling, etc. with Angular to support code reusability</AchievementsEntry>
          <AchievementsEntry>Built back end with Node and MongoDB to concurrently fetch, extract, and deduplicate data from multiple sources</AchievementsEntry>
          <AchievementsEntry>Secured microservices with JWT and CORS to protect the integrity of data in transit and prevent XSS</AchievementsEntry>
          <AchievementsEntry>Implemented an algorithm to extra prominent colors from images to create a dynamic backdrop using Vibrant.js</AchievementsEntry>
        </Achievements>
        <div className='row application-title'>
          <div className='col-8'>
            <b>Cleverlab: </b>
            Interactive language learning platform, Software Engineer
          </div>
        </div>
        <Achievements>
          <AchievementsEntry>Designed and developed the application with service-oriented architecture for effortless horizontal scaling</AchievementsEntry>
          <AchievementsEntry>Reduced initial load time by injecting data to server-side rendered React utilizing Apollo GraphQL</AchievementsEntry>
          <AchievementsEntry>Implemented authentication with JWT, Bcrypt, and GraphQL to efficiently validate user’s identity</AchievementsEntry>
          <AchievementsEntry>Constructed GraphQL and MongoDB schemas for seamless and efficient queries and mutations</AchievementsEntry>
        </Achievements>
        <div className='row application-title'>
          <div className='col-8'>
            <b>MySolution: </b>
            Collaborative learning platform, Software Engineer
          </div>
        </div>
        <Achievements>
          <AchievementsEntry>Implemented full user session lifecycle with Passport.js and Redis for performant HTTP request identity verification</AchievementsEntry>
          <AchievementsEntry>Built web server with Node and Socket.io for real-time bi-directional communications between server and client</AchievementsEntry>
          <AchievementsEntry>Composed relational schemas of the entire app with PostgreSQL and ORM for efficient storage and query</AchievementsEntry>
          <AchievementsEntry>Optimized query runtime and reduced server requests by creating dynamic queries based on originated context</AchievementsEntry>
        </Achievements>
      </div>
    </Section>
    <Section id='work-experience'>
      <div className='row align-items-center justify-content-center section-title'>
        <div className='d-flex col justify-content-center fs-medium'>Professional Experience</div>
      </div>
      <div className='row application-title'>
        <div className='col-8'>
          Bank of America: Assistant Vice President, Operation Manager
        </div>
        <div className='d-flex col-4 justify-content-end'>
          2012 - 2017
        </div>
      </div>
      <Achievements>
        <AchievementsEntry>Developed a KPI tracker to calculate and provide visual KPI progress, used by 100+ bankers in SF</AchievementsEntry>
        <AchievementsEntry>Migrated multiple processes from paper to online which significantly reduced information lookup time</AchievementsEntry>
      </Achievements>
      <div className='row application-title'>
        <div className='col-8'>
          Infinia Systems: Technician
        </div>
        <div className='d-flex col-4 justify-content-end'>
          2008 - 2010
        </div>
      </div>
      <Achievements>
        <AchievementsEntry>Built a new website for the company from scratch using HTML, CSS, and jQuery</AchievementsEntry>
      </Achievements>
    </Section>
    <Section id='education'>
      <div className='row align-items-center justify-content-center section-title'>
        <div className='d-flex col justify-content-center fs-medium'>Education</div>
      </div>
      <div className='row'>
        <div className='col-10'>
          Hack Reactor - Advanced Software Engineering Immersive Program
        </div>
        <div className='d-flex col-2 justify-content-end'>
          2017
        </div>
      </div>
      <div className='row'>
        <div className='col-10'>
          University of California, Davis - B.S. in Managerial Economics
        </div>
        <div className='d-flex col-2 justify-content-end'>
          2012
        </div>
      </div>
    </Section>
  </ResumeContainer>
);

export default Resume;
