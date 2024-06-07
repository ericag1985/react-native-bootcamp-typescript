import React, { FC } from "react";

interface SearchInputProps {
  searchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: FC<SearchInputProps> = ({ searchChange }) => {
  return (
    <input
      type="search"
      placeholder="search robo-cats"
      className="pa3 ba b--green bg-lightest-blue"
      aria-label="Search robot-cats"
      onChange={searchChange}
    />
  );
};

export default SearchInput;
