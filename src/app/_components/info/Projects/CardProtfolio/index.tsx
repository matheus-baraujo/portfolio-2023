import React from 'react'
import { Card } from 'react-bootstrap';
import styles from "./styles.module.css";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

interface Project{
    name: string;
    language: string;
    url: string;
    description: string;
}

const CardPortfolio = ({name, language, url, description}: Project) => {

  name = name.charAt(0).toUpperCase() + name.slice(1)


  if (language == null) {
    language = "Mixed fonts / Not able to acertain.";
  }

  if (description == null) {
    description = "More details about the project later.";
  }

  return (
    <div className='mb-3'>
      <Link href={url} className={styles.repoLink}>
        <Card className={styles.card}>
          
          <Card.Body >
            <Card.Title className={styles.title}>{name}</Card.Title>
            <Card.Text className={styles.text}>{description}</Card.Text>
            
            <FontAwesomeIcon className={styles.codeIcon}  icon={faCode}/> <span>{language}</span>
            
          </Card.Body>
        </Card>
      </Link>
    </div>
  )
}

export default CardPortfolio