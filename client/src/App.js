import { useEffect, useState, useMemo, useCallback } from "react";
import "./App.css";
import CurrService from "./CurrService";
import CurrenceList from "./Components/CurrenceList";
import Paginator from "./Components/paginator";
import usePagination from "./hooks/usePagination";

function App() {
  const [currence, setCurrence] = useState([]);
  const [appliedFilter, setAppliedFilter] = useState("");
  const [search, setSearch] = useState("");
  const [limit] = useState(20);
  const [page, setPage, { paginate, nextPage, prevPage }] = usePagination(1);

  const fetchData = useCallback(async ({ limit, page }) => {
    const response = await CurrService.currencies(limit, page);

    if (response) {
      setCurrence(response);
    }

    console.error("no data");
    return [];
  }, []);

  useEffect(() => {
    fetchData({ limit, page });
  }, [fetchData, limit, page]);

  const list = useMemo(() => {
    const lastIndex = page * limit;
    const firstIndex = lastIndex - limit;

    const filtered = (currence || []).filter((n) =>
      n.name.toLowerCase().includes(appliedFilter)
    );

    return filtered.slice(firstIndex, lastIndex);
  }, [currence, appliedFilter, page, limit]);

  const searchHandler = () => {
    setAppliedFilter(search);
    setPage(1);
  };

  const resetFilter = (e) => {
    setSearch("");
    setAppliedFilter("");
    setPage(1);
  };

  return (
    <div className="App">
      <input
        type="text"
        value={search}
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={searchHandler}>search</button>
      <button onClick={resetFilter}>Reset Filter</button>

      <CurrenceList currencies={list} />
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
