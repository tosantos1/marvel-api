import styles from './styles.module.scss'

export function Pagination() {
  return (
    <footer>
      <section className={styles.pagination}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <strong> &gt; </strong>
        <strong> &gt;&gt; </strong>
      </section>
    </footer>
  )
}