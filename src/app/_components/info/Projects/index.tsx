'use client'
import React, { useState } from "react";
import styles from "./styles.module.css";

interface Project{
	id: number;
	name: string;
	language: string;
	url: string;
	description: string;
}

const Projects = () => {

	const [data, setData] = useState<Project[]>([]);

	async function getData() {
		const res = await fetch("https://api.github.com/users/matheus-baraujo/repos");
	
		const data = await res.json();
	
		setData(data);
	}

	getData();

	const teste = data.slice(0, 4);

  return (
    <div className={+" " + "mb-5"}>
      <h5 className={"mb-3"}>Projects</h5>

      <ul>
				{
					teste.map((item) => {return <li key={item.id}> {item.name + ' ' + item.language + ' ' + item.url + ' ' + item.description + ' '}  </li>})
				}
			</ul>
    </div>
  );
};

export default Projects;
