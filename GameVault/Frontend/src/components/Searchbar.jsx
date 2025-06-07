function Searchbar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      className="form-control mb-3"
      placeholder="Search by name..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}

export default Searchbar;
