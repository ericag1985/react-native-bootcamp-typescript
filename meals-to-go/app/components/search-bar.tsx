import { FC, useState } from "react";
import { Searchbar } from "react-native-paper";

const SearchBar: FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
  );
};

export default SearchBar;
