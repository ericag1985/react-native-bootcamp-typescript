import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { Cat } from "../../../data/cat-data";
import SearchInput from "../../atoms/search-input/search-input";
import CardList from "../../molecules/card-list/card-list";

import styles from "./landing.module.css";

const LandingPage: FC = () => {
  /* States */
  const [searchField, setSearchField] = useState("");
  const [robocats, setRobocats] = useState<Cat[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  /**
   * Fetches the 'robocats' from the API when the component mounts.
   */
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        return response.json();
      })
      .then((users) => {
        setRobocats(users);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  /**
   * Handles the change event of the search input.
   * It updates the searchField state with the new input value.
   * @param event - The input change event
   *
   * useCallback is used here to memoize the function to prevent unnecessary re-renders.
   * Without useCallback, a new function would be created every time the component re-renders,
   * causing unnecessary re-renders of child components.
   */
  const onSearchChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchField(event.target.value);
    },
    []
  );

  /**
   * The list of cats filtered by the search input.
   *
   * useMemo is used here to optimize performance by memoizing the result of the filter operation.
   * Without useMemo, the filter operation would run every time the component re-renders,
   * even if the searchField and robocats values haven't changed.
   */
  const filteredCats = useMemo(() => {
    return robocats.filter((cat) =>
      cat.name.toLowerCase().includes(searchField.toLowerCase())
    );
  }, [searchField, robocats]);

  /* Renders */
  if (isLoading) {
    return <h1 className="f1 near-white">Loading...</h1>;
  }

  if (error) {
    return <h1 className="f1 washed-red">Error: {error}</h1>;
  }

  return (
    <>
      <header className={styles.container}>
        <h1 className={`${styles.heading} near-white`}>Robo-Cat Friends</h1>
        <SearchInput searchChange={onSearchChange} />
      </header>

      <CardList items={filteredCats} />
    </>
  );
};

export default LandingPage;
