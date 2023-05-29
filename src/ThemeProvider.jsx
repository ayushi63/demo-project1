import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()
const ThemeUpdateContext = createContext()

export const useTheme = () => useContext(ThemeContext)


export const useUpdateTheme = () => useContext(ThemeUpdateContext)


export default function ThemeProvider({ children }) {
  const theme = JSON.parse(window.localStorage.getItem('theme'))
  const [isDark, setIsDark] = useState(theme || false)

  const UpdateTheme = () => {
    window.localStorage.setItem('theme', !theme)
    setIsDark(!isDark);
  }

  return (
    <ThemeContext.Provider value={{mode: theme,UpdateTheme}}>
    {children}
    </ThemeContext.Provider>
  )
}
