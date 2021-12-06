

import { Header } from './components/Header'
import { Pagination } from './components/Pagination'
import { Search } from './components/Search'
import { Table } from './components/Table'

import './styles/global.scss'

export function App() {
  return (
    <>
      <Header />
      <Search />
      <Table />

    </>
  );
}