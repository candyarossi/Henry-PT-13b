import React from "react";
import Cards from "../Cards/Cards";
import logo from "../../assets/logo.png";
import styleHome from "./Home.module.css"

export default function Home() {
  const [cruise, setCruise] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3001/cruises")
      .then((res) => res.json())
      .then((data) => {
        setCruise(...cruise, data);
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <img className={styleHome.logo} src={logo} alt="logo"  />
      <Cards cruise={cruise} />
    </div>
  );
}
