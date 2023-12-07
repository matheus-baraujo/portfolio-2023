"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import CardPortfolio from "./CardProtfolio";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";

interface Project {
  id: number;
  name: string;
  language: string;
  url: string;
  description: string;
  topics: string[];
}

const Projects = () => {
  const [data, setData] = useState<Project[]>([]);

  async function getData() {
    const res = await fetch(
      "https://api.github.com/users/matheus-baraujo/repos?sort=updated&direction=desc"
    );

    const data = await res.json();

    setData(data);
  }

  getData();

  const teste = data.slice(0, 4);

  return (
    <div className={styles.projects +" " + "mb-5"}>
      <h5 className={"mb-3"}>Projects</h5>

      <ul>
        {teste.map((item) => {
          return (
            <li key={item.id}>
			        <CardPortfolio {...item}></CardPortfolio>
            </li>
          );
        })}

        <li style={{textAlign: "end"}}>
          <Link href={"https://github.com/matheus-baraujo"} className={styles.linkGit}>View all projects <FontAwesomeIcon icon={faArrowRight}/></Link>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
