import { FormControl, FormGroup } from "@mui/material"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { changeTheme, loadTheme } from "../../services/theme.service"
import ThemeSwitch from "./ThemeSwitch"

const Header = () => {
  const [ darkMode, setDarkMode ] = useState<boolean>(loadTheme())
  
  useEffect(() => {
    changeTheme(darkMode)
  }, [ darkMode ])

  return (
    <header className="h-[9vh] py-5 px-5 lg:px-[7.5%] bg-white dark:bg-medium-gray shadow-md w-full flex justify-between items-center">
      <Link to="/" className="h-full">
        <img src={`${darkMode ? "/logo.png" : "/bg-white-logo.png"}`} alt="W Tech Logo" className="h-full" />
      </Link>
      <FormGroup className="flex items-center justify-center py-1 px-2 dark:bg-white rounded-md scale-75 lg:scale-100">
        <FormControl>
          <ThemeSwitch checked={darkMode} onChange={() => setDarkMode((prev) => !prev)} />
        </FormControl>
      </FormGroup>
    </header>
  )
}

export default Header
