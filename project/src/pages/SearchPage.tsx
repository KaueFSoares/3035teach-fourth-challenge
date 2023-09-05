import { useParams } from "react-router-dom"

const SearchPage = () => {
  const { userName } = useParams<{userName: string}>()
  
  return (
    <div>This the {userName} profile page!</div>
  )
}

export default SearchPage
