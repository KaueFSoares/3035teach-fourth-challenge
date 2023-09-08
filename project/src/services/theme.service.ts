export const loadTheme: () => boolean = () => {
  if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.classList.add("dark")
    
    return true
  } else {
    document.documentElement.classList.remove("dark")
    
    return false
  }
}

export const changeTheme: (darkMode: boolean) => void = (darkMode) => {
  if(darkMode) {
    localStorage.theme = "dark"
    document.documentElement.classList.add("dark")
  } else {
    localStorage.theme = "light"
    document.documentElement.classList.remove("dark")
  }
}
