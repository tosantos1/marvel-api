import styles from './styles.module.scss';

import { AiOutlineSearch } from "react-icons/ai";


export function Search() {
  return (
    <section className={styles.sectionSearch}>
      <h1>Busca de personagens</h1>
      <h3>Nome do personagem</h3>
      <form className={styles.searchContainer}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search"

        />
        <AiOutlineSearch />
      </form>
    </section>
  )
}