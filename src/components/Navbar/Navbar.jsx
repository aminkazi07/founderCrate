import { Logo, Avatar } from "../../assets/index";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav id="navbar">
        <img className="logo" src={Logo} alt="Logo" />
        <div className="avatar-container">
          <img className="avatar" src={Avatar} alt="Avatar" />
          <h1>
            Hi, <span>Sean</span>
          </h1>
        </div>
      </nav>
    </>
  );
}
