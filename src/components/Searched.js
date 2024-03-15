import { useState } from "react";

import { SearchBar } from "./SearchBar";
import { SearchResultsList } from "./SearchResultsList";

function Searched() {
  const [results, setResults] = useState([]);

  return (
    <div>
      <SearchBar setResults={setResults} />
      {results && results.length > 0 && <SearchResultsList results={results} />}
    </div>
  );
}

export default Searched;
