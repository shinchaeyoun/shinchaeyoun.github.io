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

  useEffect(() => {
    const sections = [
      { ref: aboutRef, name: "About" },
      { ref: projectRef, name: "Project" },
      { ref: careerRef, name: "Career" },
      { ref: contactRef, name: "Contact" },
    ];

    const observer = new window.IntersectionObserver(
      (entries) => {
        // 가장 먼저 화면에 보이는 섹션을 active로
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          const found = sections.find(
            (section) => section.ref.current === visible[0].target
          );
          if (found) setActiveMenu(found.name);
        }
      },
      { threshold: 0.3 }
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
          <li className={activeMenu === "About" ? "active" : ""}>About me</li>
          <li className={activeMenu === "Project" ? "active" : ""}>Project</li>
          <li className={activeMenu === "Career" ? "active" : ""}>Career</li>
          <li className={activeMenu === "Contact" ? "active" : ""}>Contact</li>
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