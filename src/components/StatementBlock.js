import React from 'react';
import styles from './StatementBlock.module.css';
import { CONTENT_BLOCKS } from '../constants';

const StatementBlock = () => {
  const { text } = CONTENT_BLOCKS.statement;

  return (
    <section className={styles.statementSection}>
      <h2 className={styles.statement}>{text}</h2>
    </section>
  );
};

export default StatementBlock;