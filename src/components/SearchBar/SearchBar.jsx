import SearchForm from "./SearchForm/SearchForm"

export default function SearchBar({onSearch}) {
  return (
    <div>
        <SearchForm onSubmit={onSearch} />
    </div>
  )
}
