import styles from './Heading.module.css';

export function Heading() {
  const mensamgeH1 = 'Olá mundo!';

  return <h1 className={styles.heading}>{mensamgeH1}</h1>;
}
