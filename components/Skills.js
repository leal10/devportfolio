import styles from '../styles/Skills.module.css'

function Skills() {
  return (
    <div className={styles.skillsSection}>
      {/* On top of the header I need to add a divider */}
      <h2 className={styles.skillsHeading}>Check out my skills</h2>
      <div className={styles.skillsBox}>
        <div className={styles.skillsContainer}>
          I will place the skills here in little individual boxes
        </div>
      </div>
    </div>
  )
}

export default Skills
