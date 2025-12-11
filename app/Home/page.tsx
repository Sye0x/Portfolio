import Navbar from "../components/navbar/navbar";
import "./section-1.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1 className="nameTitle">Syed Mohamid Raza</h1>

      <section className="section-1">
        <div className="decorBox">
          <div className="profileBox">
            <img src="./profile.jpg" alt="Profile" className="profilePic" />
          </div>

          <div className="infoBox">
            <table className="infoTable">
              <tbody>
                <tr>
                  <td className="placeholders">Role</td>
                  <td className="values">Full Stack Developer</td>
                </tr>

                <tr>
                  <td className="placeholders">Phone</td>
                  <td className="values">+923255395420</td>
                </tr>

                <tr>
                  <td className="placeholders">Email</td>
                  <td className="values">s.r.mahamid@gmail.com</td>
                </tr>

                <tr>
                  <td className="placeholders">Address</td>
                  <td className="values">Islamabad, Pakistan</td>
                </tr>

                <tr>
                  <td className="placeholders">GitHub</td>
                  <td className="values">
                    <a href="https://github.com/MohamidRaza" target="_blank">
                      MohamidRaza
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="placeholders">LinkedIn</td>
                  <td className="values">
                    <a
                      href="https://linkedin.com/in/MohamidRaza"
                      target="_blank"
                    >
                      MohamidRaza
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
