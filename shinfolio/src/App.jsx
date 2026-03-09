import React, { useRef, useEffect, useState } from "react";
import S from "./styles/GlobalBlock.jsx";
import Intro from "./components/Intro.jsx";
import Projects from "./components/Projects.jsx";
import MiniWorks from "./components/MiniWorks.jsx";
import Career from "./components/Career.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const careerRef = useRef(null);
  const contactRef = useRef(null);
  const [activeMenu, setActiveMenu] = useState("");

  const hanbleNavClick = (section) => {
    const sectionRef = {
      About: aboutRef,
      Project: projectRef,
      Career: careerRef,
      Contact: contactRef,
    }[section];
    
    if (sectionRef && sectionRef.current) {
      const targetPosition = sectionRef.current.offsetTop - 60; // 요소의 위치 - 60px (헤더 높이 고려)
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const sections = [
      { ref: aboutRef, name: "About" },
      { ref: projectRef, name: "Project" },
      { ref: careerRef, name: "Career" },
      { ref: contactRef, name: "Contact" },
    ];

    const observer = new window.IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          const found = sections.find(
            (section) => section.ref.current === visible[0].target
          );
          if (found) {
            setActiveMenu(found.name);
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50% 0px",
      }
    );

    sections.forEach((section) => {
      if (section.ref.current) observer.observe(section.ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <S.InnerFrame>
      <S.Nav>
        <div className="logo">
          SHIN
          <br />
          CHAE YEUN
        </div>
        <ul>
          <li onClick={() => hanbleNavClick("About")} className={activeMenu === "About" ? "active" : ""}>
            About me
          </li>
          <li onClick={() => hanbleNavClick("Project")} className={activeMenu === "Project" ? "active" : ""}>
            Project
          </li>
          <li onClick={() => hanbleNavClick("Career")} className={activeMenu === "Career" ? "active" : ""}>
            Career
          </li>
          <li onClick={() => hanbleNavClick("Contact")} className={activeMenu === "Contact" ? "active" : ""}>
            Contact
          </li>
        </ul>
        <span id="arrow"></span>
      </S.Nav>

      <S.Main>
        <div ref={aboutRef}>
          <Intro />
        </div>
        <div ref={projectRef}>
          <Projects />
          <MiniWorks />
        </div>
        <div ref={careerRef}>
          <Career />
        </div>
        <div ref={contactRef}>
          <Footer />
        </div>
      </S.Main>
    </S.InnerFrame>
  );
};

export default App;
