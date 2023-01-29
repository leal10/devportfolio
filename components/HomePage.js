import styles from '../styles/HomePage.module.css'

function HomePage() {
  return (
    <div className={styles.HomeContainer}>
      <div className={styles.HomeSentenceContainer}>
        <h1 className={styles.HomeSentence}>Hello, I'm Daniel Leal.</h1>
        <h1 className={styles.HomeSentence}>I'm a full-stack web developer.</h1>
        <div className={styles.ButtonContainer}>
          <button className={styles.HomeButton}>View my work</button>
          <button className={styles.ContactButton}>Contact</button>
        </div>
      </div>
    </div>
  )
}

export default HomePage
