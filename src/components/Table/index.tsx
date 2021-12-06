import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Pagination } from '../Pagination';

import styles from './styles.module.scss';

interface ResponseCharacters {
  id: string;
  name: string;
  resourceURI: string;
  events: {
    items: [
      {
        resourceURI: string,
        name: string
      }
    ]
  },
  series: {
    items: [
      {
        resourceURI: string,
        name: string
      }
    ]
  }
  thumbnail: {
    path: string;
    extension: string;
  }
}

export function Table() {
  const [characters, setCharacters] = useState<ResponseCharacters[]>([])

  useEffect(() => {
    async function loadCharacters() {
      const response = await api.get('/characters', { params: { limit: 10 } })
      setCharacters(response.data.data.results)
    }
    loadCharacters()
  }, [])

  return (
    <main >
      <section className={styles.sectionTable}>
        <div className={styles.tableHeader}>
          <table>
            <thead>
              <tr className={styles.headTr}>
                <th>Personagem</th>
                <th>Séries</th>
                <th>Eventos</th>
              </tr>
            </thead>
          </table>
        </div>
        {characters.map((character) => (
          <div key={character.id} className={styles.tableBody}>
            <table>
              <tbody>
                <tr className={styles.bodyTr}>
                  <td>
                    <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={`Imagem do ${character.name}`} />
                    {character.name}
                  </td>

                  <td>
                    {character.series.items.map((item) => (
                      <span key={item.name}>{item.name}</span>
                    ))}
                  </td>
                  <td>
                    {character.events.items.map((item) => (
                      <span key={item.name}>{item.name}</span>
                    ))}
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        ))}
        <div className={styles.tableBody}>
          <table>
            <tbody >
              <tr>
                <td>
                  <img src="/assets/photo.png" alt="" />
                  Abner Jenkins
                </td>
                <td>
                  Iron Man: Armor Wars <br />
                  Old Man Hawkeye <br />Fantastic Four Visionaries: Walter Simonson Vol. 1
                </td>
                <td>
                  AvX <br />
                  Demon in the Bottle <br />Dynasty M</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <Pagination />
    </main>

  )
}