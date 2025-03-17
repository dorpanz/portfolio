import Navbar from "../Navbar";
import daria from "../pics/me.jpg";
import toronto from "../pics/toronto.jpg";
import coding from "../pics/coding.jpg";
import front from "../pics/front.png";
import back from "../pics/back.png";
import other from "../pics/other.png";
import gbc from "../pics/gbc.png";
import projects from "../data/projects";
import { Contact } from "./Contact";
import { motion } from "framer-motion";
import { useEffect } from "react";
import craft from "../pics/craft.png";
import calorie from "../pics/calorie.png";

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <motion.div
        className="about-section-main"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={daria} alt="Daria portrait" className="bubble-pic" />
          <img src={toronto} alt="Toronto landscapes" className="bubble-pic" />
          <img src={coding} alt="Coding" className="bubble-pic" />
        </motion.div>

        <motion.div
          className="about-info"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="hey">Hey there!</p>
          <p className="name">
            I'm Daria Ignateva, a full stack developer based in Toronto
          </p>
          <p className="quote">
            "Knowledge is of no value unless you put it into practice." — Anton
            Chekhov
          </p>
          <p className="name">
            <a href="#contact" rel="noopener noreferrer" className="contact-btn">
              CONTACT ME
            </a>
          </p>
        </motion.div>
      </motion.div>

      <motion.section
        id="aboutme"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <section id="aboutme">
          <p className="title-section-about">About me</p>
          <div className="par">
            <p>
              I see my work as an opportunity to innovate and solve real-world
              problems through constant learning and growth. My motivation comes
              from applying new knowledge to build efficient solutions while
              embracing feedback and self-improvement. Past experiences have
              shown me that collaboration and overcoming challenges lead to the
              most rewarding outcomes.
            </p>
            <p>
              In my role, I aim to not only build software but also bring value
              to teams and users. Looking ahead, I’m excited to tackle more
              complex projects that push my boundaries, with the goal of
              creating positive change in the tech industry and helping others
              reach their potential.
            </p>
          </div>
        </section>
      </motion.section>

      <div className="resume-container">
        {/* My Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <section>
            <p className="title-section">My Skills</p>
            <div className="skills-container">
              {/* Frontend */}
              <div className="skill-card">
                <img src={front} alt="frontend" className="skill-img" />
                <h3 className="skill-title">Frontend</h3>
                <div className="skill-list">
                  {[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "React",
                    "Vue.js",
                    "Angular",
                    "Tailwind CSS",
                  ].map((skill) => (
                    <span key={skill} className="skill-item">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              {/* Backend */}
              <div className="skill-card">
                <img src={back} alt="backend"className="skill-img" />
                <h3 className="skill-title">Backend</h3>
                <div className="skill-list">
                  {[
                    "Node.js",
                    "Express.js",
                    "Python",
                    "Django",
                    "Flask",
                    "Java",
                    "Spring Boot",
                    "C#",
                    ".NET Core",
                    "MongoDB",
                    "PostgreSQL",
                    "MySQL",
                  ].map((skill) => (
                    <span key={skill} className="skill-item">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              {/* Other Skills */}
              <div className="skill-card">
                <img src={other} alt="other" className="skill-img" />
                <h3 className="skill-title">Other Skills</h3>
                <div className="skill-list">
                  {[
                    "REST & GraphQL",
                    "Git",
                    "Docker",
                    "CI/CD",
                    "AWS",
                    "Firebase",
                  ].map((skill) => (
                    <span key={skill} className="skill-item">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </motion.section>

        {/* Education Section */}

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <section id="education">
            <p className="title-section">Education</p>
            <div className="education-container">
              <img  alt="george brown" src={gbc} />
              <div className="gbc-about">
                <h3 className="education-title">
                  George Brown College - GPA 3.77
                </h3>
                <p className="education-text">2023 - 2025</p>
                <p className="education-link">
                  Computer Programming and Analysis
                </p>
              </div>
            </div>
          </section>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <section id="projects">
            <div>
              <p className="title-section">Featured Projects</p>
              <div className="featured-proj">
                <div className="project-card">
                  <div className="project-card-inner">
                    {/* Front Side (Image & Name) */}
                    <div className="project-card-front">
                      <img
                        src={craft}
                        alt="Craft Connect"
                        className="project-image"
                      />
                      <h3 className="project-name">Craft Connect</h3>
                    </div>
                    {/* Back Side (Description & Link) */}
                    <div className="project-card-back">
                      <p className="project-description">
                        An e-commerce platform designed for artisans to buy and
                        sell handcrafted goods. Features include inventory
                        management, pricing analytics, delivery options, and
                        marketing tools
                      </p>
                      <a
                        href="https://github.com/dorpanz/Craft_connect_project.git"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
                <div className="proj-info">
                  <p>
                    Technologies used: React, Node.js, MongoDB, Express, JWT
                  </p>
                  <ul>
                    <li>
                      Developing an online marketplace for artisans to sell and
                      buy handcrafted goods
                    </li>
                    <li>
                      Implemented features like inventory management, pricing
                      analytics, and delivery options
                    </li>
                    <li>
                      Built a dynamic category system to efficiently manage
                      product listings
                    </li>
                  </ul>
                  <div className="links">
                    <a href="https://docs.google.com/document/d/1rj1KBrqrsP6E2r5BDXzVXL8phnU6XBS1/edit?usp=sharing&ouid=112826811927615361089&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">
                      Project Summary
                    </a>
                    <a href="https://docs.google.com/document/d/1rGCm9m7WrsVgMCUYNlyfdKtxT0LFgRnb/edit?usp=sharing&ouid=112826811927615361089&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">
                      Project Charter
                    </a>
                    <a href="https://docs.google.com/document/d/1e-T0hOILEVEZwivrrQ47iaKiQpgVNYrF/edit?usp=drive_link&ouid=112826811927615361089&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">
                      Project Report
                    </a>
                    <a href="https://docs.google.com/document/d/1Jx3sTqRBeRdlZKkWfGmbvPTh-BeBDx-v/edit?usp=sharing&ouid=112826811927615361089&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">
                      High Requirements
                    </a>
                    <a href="https://docs.google.com/document/d/1wfTBjgMKhySEBXZsAhS0vU9t5NTi1NGnAlbe9_wxWQk/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                      Analysis and Design
                    </a>
                  </div>
                </div>
              </div>
              <div className="featured-proj">
                <div className="project-card">
                  <div className="project-card-inner">
                    {/* Front Side (Image & Name) */}
                    <div className="project-card-front">
                      <img
                        src={calorie}
                        alt="Craft Connect"
                        className="project-image"
                      />
                      <h3 className="project-name">Calorie Counter</h3>
                    </div>
                    {/* Back Side (Description & Link) */}
                    <div className="project-card-back">
                      <p className="project-description">
                        A React web app that helps users track their daily
                        calorie intake and macronutrients. Includes a food
                        database, goal setting, and progress tracking
                      </p>
                      <a
                        href="https://calcountish.netlify.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
                <div className="proj-info">
                  <p>Technologies used: React, HTML, CSS</p>
                  <ul>
                    <li>
                      Designed and developed a calorie-tracking web app to help
                      users monitor daily intake
                    </li>
                    <li>
                      Implemented features like food search, meal tracking, and
                      nutritional insights.
                    </li>
                    <li>
                      Integrated React.js and API for real-time data management.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="title-section">Other Projects</p>
            <div className="projects-container">
              {projects.map((project) => (
                <div key={project.id} className="project-card">
                  <div className="project-card-inner">
                    {/* Front Side (Image & Name) */}
                    <div className="project-card-front">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="project-image"
                      />
                      <h3 className="project-name">{project.name}</h3>
                    </div>
                    {/* Back Side (Description & Link) */}
                    <div className="project-card-back">
                      <p className="project-description">
                        {project.description}
                      </p>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </motion.section>
      </div>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Contact />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-links">
              <p>
                Email:{" "}
                <a href="mailto:dariaignateva04@gmail.com" rel="noopener noreferrer">
                  dariaignateva04@gmail.com
                </a>
              </p>
              <p>
                LinkedIn:{" "}
                <a
                  href="https://linkedin.com/in/dariaignateva04/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/dariaignateva04/
                </a>
              </p>
              <p>
                GitHub:{" "}
                <a
                  href="https://github.com/dorpanz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/dorpanz
                </a>
              </p>
            </div>
            <div className="footer-bottom">
              <p>
                &copy; {new Date().getFullYear()} Daria Ignateva. All Rights
                Reserved.
              </p>
            </div>
          </div>
        </footer>
      </motion.section>
    </div>
  );
};
