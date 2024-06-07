import React, { FC, useCallback, useMemo, useState } from "react";
import CardList from "./components/card-list/card-list";
import { cats } from "./data/cat-data";
import SearchInput from "./components/search-input/search-input";

const App: FC = () => {
  /**
   * The current value of the search input.
   */
  const [searchField, setSearchField] = useState("");

  /**
   * Handles the change event of the search input.
   * It updates the searchField state with the new input value.
   * @param event - The input change event
   */
  const onSearchChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setSearchField(value);
    },
    []
  );

  /**
   * The list of cats filtered by the search input.
   * If the search input is empty, it returns the full list of cats.
   */
  const filteredCats = useMemo(() => {
    return searchField
      ? cats.filter((cat) =>
          cat.name.toLowerCase().includes(searchField.toLowerCase())
        )
      : cats;
  }, [searchField]);

  return (
    <div className="tc">
      <h1>Robo-Cat Friends</h1>

      <SearchInput searchChange={onSearchChange} />

      <CardList items={filteredCats} />
    </div>
  );
};

export default App;
