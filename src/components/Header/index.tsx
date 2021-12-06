import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <nav className={styles.headerContent}>
        <a href="/"><img src="/assets/logo-objective.png" alt="Logo Objective" /></a>
        <div className={styles.navItems}>
          <p>Tiago Oliveira</p>
          <p>Teste de Front-end</p>
          <span>TO</span>
        </div>
      </nav>
    </header>
  )
}
