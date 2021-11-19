
import { useEffect, useState} from 'react';
import './App.css';
import CurrService from './rout';
import CurrenceList from './utils/CurrenceList';
import Paginator from './utils/paginator';

function App() {
  const [currence, setCurrence] = useState([])
  const [filter, setFilter] = useState("")
  const [limit] = useState(20)
  const [page, setPage] = useState(1)
  
  

  async function fetch() {
    const response = await CurrService.currencies(limit, page)
    setCurrence([...currence, ...response])

  }

  useEffect(() => {
    fetch(limit, page)
  }, [])


  const lastIndex = page * limit
  const firstIndex = lastIndex - limit
  const currentCurriencies = currence.slice(firstIndex, lastIndex)
  const filtered = currentCurriencies.filter(n=> n.name.toLowerCase().includes(filter))
   
  const searchHandler=()=>{
    setFilter(filter)
  }
  

  const resetFilter =(e)=>{
    setFilter("")
  }

  const paginate = (pageNumber) => {
    setPage(pageNumber)
  }

  const nextPage = () => {
    setPage(prev => prev + 1)
  }
  const prevPage = () => {
    setPage(prev => prev - 1)
  }
  return (
    <div className="App">
      
      <input type="text"
        value={filter}
      placeholder="Search"
      onChange={(e)=> setFilter(e.target.value)}
      />
      <button onClick={()=> searchHandler()}>search</button>

      <button onClick={resetFilter}>Reset Filter</button>
      <CurrenceList currence={filtered} />
      <Paginator
        limit={limit}
        totalLimit={currence.length}
        paginate={paginate}
      />
      <button onClick={prevPage}>prev page</button>
      <button onClick={nextPage}>next page</button>
    </div>
  );
}

export default App;