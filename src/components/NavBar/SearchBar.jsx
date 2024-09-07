import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SearchBar = () => {
  const [setResults] = useState([]);
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleSearch = async (event) => {
    event.preventDefault()

    try {
      const response = await axios.get(`http://localhost:5000/search?query=${query}`);
      setResults(response.data);
      if (response.data.length !== 0) {
        const searchId = response.data[0]._id;
        navigate(`/destinationCard/${searchId}`);
        setQuery('')
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <form onSubmit={handleSearch} className="flex">
      <input
        type="text"
        placeholder="Type here"
        value={query}
        onChange={handleChange}
        className="input input-bordered input-primary w-[150px] max-w-xs" />
      <button onClick={handleSearch} className="btn btn-warning ml-2">
        {/* <FaSea */}
        Search
      </button>
    </form>
  );
};

export default SearchBar;
