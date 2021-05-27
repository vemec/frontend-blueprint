import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'

const COOKIE_NAME = 'cc_dismissed'

const useAcceptCookies = () => {
  const [acceptedCookies, setAcceptedCookies] = useState(true)

  const acceptCookies = () => {
    setAcceptedCookies(true)
    Cookies.set(COOKIE_NAME, 'true', { expires: 365 })
  }

  useEffect(() => {
    if (!Cookies.get(COOKIE_NAME)) {
      setAcceptedCookies(false)
    }
  }, [])

  return {
    acceptedCookies,
    onAcceptCookies: acceptCookies,
  }
}

export default useAcceptCookies
