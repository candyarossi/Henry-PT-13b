import SearchBar from "../SearchBar/SearchBar.jsx";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";

export default function Nav({ onSearch, random }) {
  return (
    <nav>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png"
        alt=""
        width="20%"
      />
      <Link to="/home" className={style.links}>
        Home
      </Link>
      <Link to="/about" className={style.links}>
        About
      </Link>
      <SearchBar onSearch={onSearch} random={random} />
    </nav>
  );
}
