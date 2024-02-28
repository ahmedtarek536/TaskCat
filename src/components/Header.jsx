import { useNavigate, useParams } from "react-router-dom";
import styles from "./Header.module.css";
import { useData } from "../pages/Context";
import { faHouse, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Header() {
  const { setUser, setData, setAllExpense } = useData();
  const { user } = useParams();
  const navigate = useNavigate();
  function handleRemoveUser() {
    setUser("");
    setData([]);
    setAllExpense([]);
    navigate("/");
  }
  return (
    <header className={styles.header}>
      <h2>
        <span>
          <FontAwesomeIcon icon={faHouse} />
        </span>{" "}
        HomeBudget
      </h2>
      {user && (
        <button onClick={handleRemoveUser}>
          Delete User <FontAwesomeIcon icon={faTrashCan} />
        </button>
      )}
    </header>
  );
}

export default Header;
