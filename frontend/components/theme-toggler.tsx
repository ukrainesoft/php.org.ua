import { useTheme } from 'next-themes'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { useEffect, useState } from 'react'

// useTheme depends on the localStorage, so there should be handling
// of the mounting event (useEffect in a functional component)
export default () => {
  const { setTheme, resolvedTheme } = useTheme()
  const [loaded, setLoaded] = useState(false)
  useEffect(() => setLoaded(true), [])

  if (!loaded) {
    return <></>
  }
  if (resolvedTheme === 'dark') {
    return (
      <LightModeIcon
        onClick={() => setTheme('light')}
        className="cursor-pointer text-yellow-500"
      />
    )
  }
  return (
    <DarkModeIcon
      onClick={() => setTheme('dark')}
      className="cursor-pointer text-gray-600"
    />
  )
}
