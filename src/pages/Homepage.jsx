import styles from "./Homepage.module.css";
import PageNav from "../components/PageNav";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";

export default function Homepage({ children }) {
  const { isAuthenticaed } = useAuth();

  return (
    <>
      <main className={styles.homepage}>
        <PageNav />
        <section>
          <h1>
            You travel the world.
            <br />
            WorldWise keeps track of your adventures.
          </h1>
          <h2>
            A world map that tracks your footsteps into every city you can think
            of. Never forget your wonderful experiences, and show your friends
            how you have wandered the world.
          </h2>
          <Link to={isAuthenticaed ? "/app" : "/login"} className="cta">
            Start Tracking Now
          </Link>
        </section>
      </main>
      <div>
        <Footer />
      </div>
    </>
  );
}
