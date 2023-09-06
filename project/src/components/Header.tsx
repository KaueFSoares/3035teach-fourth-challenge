import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="h-[9%] py-5 px-10 bg-white shadow-md">
      <Link to="/" className="h-full">
        <img src="/bg-white-logo.png" alt="W Tech Logo" className="h-full" />
      </Link>
    </header>
  )
}

export default Header
