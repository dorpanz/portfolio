import { useEffect } from "react";
import Navbar from "../Navbar";

export const Resume = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
        <Navbar/>
      <div className="resume-container resume-container-1">
        <p className="title-section">Resume and Cover Letter Examples</p>
        <embed src="/resume.pdf" type="application/pdf" width="100%" height="800px" />
        <embed src="/cover.pdf" type="application/pdf" width="100%" height="800px" />
      </div>
    </div>
  );
};
