import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "./Home.module.css";
import { useState } from "react";
import { useData } from "./Context";
function Home() {
  const { setUser } = useData();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  function handleCreateAccount(e) {
    e.preventDefault();
    if (!name) return;
    navigate(`${name}`);
    setUser(name);
  }
  return (
    <div>
      <Header />
      <div className={styles.home}>
        <div className="info">
          <h2>
            Take Control of <span>Your Money</span>
          </h2>
          <p>
            Personal budgeting is the secret to financial freedom. start your
            journey today.
          </p>
          <form onSubmit={handleCreateAccount}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="What is your name?"
              required
            />

            <button>Create Account</button>
          </form>
        </div>
        <div className="img">
          <img
            src="https://codinginpublic.dev/projects/react-router-budget-app/assets/illustration-4f619ef1.jpg"
            alt="img-home"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
