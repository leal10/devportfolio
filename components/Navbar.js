import styles from '../styles/Navbar.module.css'

function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarLinks}>
        <div className={styles.navbarHomeLink}>Daniel Leal</div>
        <div className={styles.navbarAboutLink}>About</div>
        <div className={styles.navbarProjectsLink}>Projects</div>
        <div className={styles.navbarContactLink}>Contact</div>
      </div>
      <div className={styles.navbarResume}>
        <button className={styles.navbarResumeButton}>Resume</button>
      </div>
    </div>
  )
}

export default Navbar
