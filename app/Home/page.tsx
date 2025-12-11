import Navbar from "../components/navbar/navbar";
import "./section-1.css";

export default function Home() {
  const contactItems = [
    {
      label: "Phone",
      value: "+923255395420",
      icon: "fa-solid fa-phone",
      link: "tel:+923255395420",
    },
    {
      label: "Email",
      value: "s.r.mahamid@gmail.com",
      icon: "fa-solid fa-envelope",
      link: "mailto:s.r.mahamid@gmail.com",
    },
    {
      label: "GitHub",
      value: "Sye0x",
      icon: "fa-brands fa-github",
      link: "https://github.com/Sye0x",
    },
    {
      label: "LinkedIn",
      value: "Syed Mohamid Raza",
      icon: "fa-brands fa-linkedin",
      link: "https://www.linkedin.com/in/syed-mohamid-raza-nadvi-9a909b36b/",
    },
  ];

  const skills = [
    "JavaScript",
    "Dart",
    "React.js",
    "React Native",
    "Flutter",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Firebase",
    "Git/GitHub",
  ];

  const webProjects = [
    {
      name: "Portfolio Website",
      description:
        "Responsive personal portfolio using React.js and CSS animations.",
    },
    {
      name: "E-commerce Store",
      description:
        "Online shop with product catalog, cart, and payment integration.",
    },
    {
      name: "Blog Platform",
      description:
        "Full-featured blogging platform with authentication and content management.",
    },
  ];

  const appProjects = [
    {
      name: "Habit Tracker",
      description:
        "Cross-platform app using React Native to track daily habits and routines.",
    },
    {
      name: "Attendance App",
      description:
        "Mobile app for schools to mark attendance and manage students.",
    },
    {
      name: "Virtual School",
      description:
        "Flutter app for student-teacher interaction and course management.",
    },
  ];

  return (
    <div>
      <h1 className="nameTitle">Syed Mohamid Raza Nadvi</h1>

      <section className="section-1">
        <div className="cvContainer">
          {/* Left Column: Profile & Contact */}
          <div className="profileColumn">
            <div className="profileBox">
              <img src="./profile.jpg" alt="Profile" className="profilePic" />
            </div>

            <div className="contactButtons">
              {contactItems.map((item, index) => (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contactButton"
                  key={index}
                >
                  <i className={item.icon}></i>
                  <span>{item.value}</span>
                </a>
              ))}
            </div>

            <div className="sectionCard">
              <h2 className="sectionTitle">Technical Skills</h2>
              <div className="skillsList">
                {skills.map((skill, idx) => (
                  <span className="skillTag" key={idx}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="contentColumn">
            {/* Welcome Card */}
            <div className="sectionCard welcomeCard">
              <h2 className="sectionTitle">Hello!</h2>
              <p className="sectionText">
                Full Stack Developer focused on building smooth and responsive
                web & mobile apps. My aim is to deliver clean, user-friendly
                solutions while continuously improving my skills.
              </p>
            </div>

            {/* Web Projects Card */}
            <div className="sectionCard">
              <h2 className="sectionTitle">Web Development Projects</h2>
              {webProjects.map((proj, idx) => (
                <div key={idx} className="projectBlock">
                  <h3 className="projName">{proj.name}</h3>
                  <p className="sectionText">{proj.description}</p>
                </div>
              ))}
            </div>

            {/* App Projects Card */}
            <div className="sectionCard">
              <h2 className="sectionTitle">App Development Projects</h2>
              {appProjects.map((proj, idx) => (
                <div key={idx} className="projectBlock">
                  <h3 className="projName">{proj.name}</h3>
                  <p className="sectionText">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
