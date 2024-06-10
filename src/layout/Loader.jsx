import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Loader() {
  const [isLoading, setIsLoading] = useState(false)
  const { events } = useRouter()

  useEffect(() => {
    const hidePageContent = () => setIsLoading(true)
    // const showPageContent = () => setIsLoading(false)
    const showPageContent = () => setIsLoading(true)

    events.on('routeChangeStart', hidePageContent)
    events.on('routeChangeComplete', showPageContent)
    events.on('routeChangeError', showPageContent)

    return () => {
      events.off('routeChangeStart', hidePageContent)
      events.off('routeChangeComplete', showPageContent)
      events.off('routeChangeError', showPageContent)
    }
  }, [events])

  return (
    <>
      {/* {isLoading && ( */}
      {
        <div className="absolute top-0 left-0 h-screen w-full bg-slate-100 flex gap-2 justify-center items-center">
          <div className="w-6 h-6 rounded-full animate-bounce duration-600 bg-red-500 delay-0" />
          <div className="w-6 h-6 rounded-full animate-bounce duration-600 bg-amber-500 delay-100" />
          <div className="w-6 h-6 rounded-full animate-bounce duration-600 bg-green-500 delay-200" />
        </div>
      }
    </>
  )
}
