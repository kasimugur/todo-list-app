import { useState } from "react"
import { iconMoon, iconSun } from "../pages/Pages"

export default function IconTheme() {
  const [themeName, setThemeName] = useState('dark-theme')

  return (
    <>
      {/* <button>{iconSun} </button>  */}
      <button> {iconMoon} </button>
    </>
  )
}