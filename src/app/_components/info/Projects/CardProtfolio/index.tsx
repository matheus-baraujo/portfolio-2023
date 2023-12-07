import React from "react";
import { Card, Stack } from "react-bootstrap";
import styles from "./styles.module.css";
import Link from "next/link";
import Topics from "./Topics";

interface Project {
  name: string;
  language: string;
  url: string;
  description: string;
  topics: string[];
}

const CardPortfolio = ({
  name,
  language,
  url,
  description,
  topics,
}: Project) => {

  name = name.charAt(0).toUpperCase() + name.slice(1);

  if (language == null) {
    language = "Mixed coding languages.";
  }

  if (description == null) {
    description = "More details about the project later.";
  }

  if (topics.length == 0) {
    topics = [language];
  }

  return (
    <div className="mb-3">
      <Link href={url} className={styles.repoLink}>
        <Card className={styles.card}>
          <Card.Body>
            <Card.Title className={styles.title}>{name}</Card.Title>
            <Card.Text className={styles.text}>{description}</Card.Text>

            <Stack direction="horizontal" gap={2}>
              {topics.map((tag, index) => {
                return <Topics key={index} tag={tag}></Topics>;
              })}
            </Stack>

          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default CardPortfolio;
