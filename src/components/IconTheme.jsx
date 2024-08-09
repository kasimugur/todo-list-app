import { useEffect, useState } from "react"
import { iconMoon, iconSun } from "../pages/Pages"

export default function IconTheme() {
  const [themeName, setThemeName] = useState('dark')

  const updatedIcon = () => {
    if (themeName === "dark") {
      setThemeName("light")
    } else if (themeName === "light") {
      setThemeName("dark")
    }
  }

  useEffect(() => {
    localStorage.setItem('theme', themeName)
  }, [updatedIcon])

  return (
    <>
      <button onClick={() => {
        updatedIcon();
        document.documentElement.setAttribute('data-theme',
          themeName === "dark" ? "light" : "dark")
      }} >
        {themeName === "dark" ? iconMoon : iconSun}
      </button>
    </>
  )
}