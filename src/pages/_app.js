import '@/styles/globals.css'
import { useState, useEffect } from 'react'
import Router from 'next/router'
import { twMerge } from 'tailwind-merge'

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const hidePageContent = () => setIsLoading(true)
    const showPageContent = () => {
      setIsLoading(false)
    }

    Router.events.on('routeChangeStart', hidePageContent)
    Router.events.on('routeChangeComplete', showPageContent)
    Router.events.on('routeChangeError', showPageContent)

    return () => {
      Router.events.off('routeChangeStart', hidePageContent)
      Router.events.off('routeChangeComplete', showPageContent)
      Router.events.off('routeChangeError', showPageContent)
    }
  }, [])

  // return isLoading ? <Loader /> :
  return isLoading ? (
    <div
      className={twMerge(
        'absolute top-0 left-0 h-screen w-full bg-slate-50 flex gap-2 justify-center items-center'
      )}
    >
      <div className="w-6 h-6 rounded-full animate-bounce duration-600 bg-red-500 delay-0" />
      <div className="w-6 h-6 rounded-full animate-bounce duration-600 bg-amber-500 delay-100" />
      <div className="w-6 h-6 rounded-full animate-bounce duration-600 bg-green-500 delay-200" />
    </div>
  ) : (
    <Component {...pageProps} />
  )
}
