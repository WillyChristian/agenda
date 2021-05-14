import React from "react";
import homeStyle from "./styles/home";
import VerticalTabs from "./components/Home/abas";
import Navbar from "./components/Navbar/navbar";

function showDate() {
  const date = new Date().toString();
  const x = date.slice(0, 15);
  return x;
}

export default function Home() {
  const styles = homeStyle();

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.header}>
          <p>Agenda dos Técnicos </p>
          <div>{showDate()}</div>
          <img src="/mundo-branco.png" alt="logo-mundo-branco" />
        </div>
        <div className={styles.table}>
          <VerticalTabs />
        </div>
      </div>
    </>
  );
}
