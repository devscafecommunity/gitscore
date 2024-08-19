import { useState, useEffect } from "react";

// Styles
import style from "./SearchBar.module.css"

function searchBarBackEnd({ posts, setPostDisplay }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    setPostDisplay(searchResults);

    if (value === "") {
      setPostDisplay(posts);
    }
  };

  useEffect(() => {
    const results = posts.filter((post) =>
      post.data.title
        .toLowerCase()
        .replace(/[^a-zA-Z0-9 ]/g, "")
        .replace(/\s+/g, "")
        .includes(
          searchTerm
            .toLowerCase()
            .replace(/[^a-zA-Z0-9 ]/g, "")
            .replace(/\s+/g, "")
        )
    );
    setSearchResults(results);
  }, [searchTerm]);


  return { handleChange, searchTerm };
}
  

function SearchBar(posts) {
  const { handleChange, searchTerm } = searchBarBackEnd(posts);

  return (
    <div>
      <div className={style.container}>
      <div className={style.subContainer}>
        <input
          type="text"
          placeholder="Search"
          className={style.searchBar}
          value={searchTerm}
          onChange={handleChange}
          id={style["search-bar"]}
        />
      </div>
    </div>
    </div>
  )
}

export default SearchBar;