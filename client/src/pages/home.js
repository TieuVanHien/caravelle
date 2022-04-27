import NavBg from "../images/nav-background.png";
import Logo from "../assets/caravelle.svg";
import { Nav } from "../components/Nav";

export const Home = () => {
  return (
    <div className="container">
      <div className="hero-section">
        <div className="nav background">
          <img src={NavBg} alt="home page background" />
        </div>

        <img src={Logo} className="logo" alt="logo" />
        <Nav />
      </div>
    </div>
  );
};
