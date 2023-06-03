import "../css/resume.css";

function Resume() {
  return (
    <div className="component-container">
      <h2>Resume</h2>
      <p>Below is a link to view my resume in pdf form</p>
      <a
        className="resume-link"
        href="https://drive.google.com/file/d/1UCuMDvAUD-h34TfrMnAL39ZACsDuhDei/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        Click here to view and download
      </a>
    </div>
  );
}

export default Resume;
