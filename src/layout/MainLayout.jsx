import { useState, useEffect, useCallback } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Header, Footer } from '@/components'
import { twMerge } from 'tailwind-merge'

export default function MainLayout({ children }) {
  // const [isLoading, setIsLoading] = useState(false)
  // const { events } = useRouter()

  // useEffect(() => {
  //   setIsLoading(true)
    
  //   const timeout = setTimeout(() => {
  //     setIsLoading(false)
  //   }, 5000)

  //   clearTimeout(timeout)
  // }, [])

  // useEffect(() => {
  //   const hidePageContent = () => setIsLoading(true)
  //   const showPageContent = () => setIsLoading(false)

  //   events.on('routeChangeStart', hidePageContent)
  //   events.on('routeChangeComplete', showPageContent)
  //   events.on('routeChangeError', showPageContent)

  //   return () => {
  //     events.off('routeChangeStart', hidePageContent)
  //     events.off('routeChangeComplete', showPageContent)
  //     events.off('routeChangeError', showPageContent)
  //   }
  // }, [events])

  return (
    <>
      <Head>
        <title>FriqTechnology - DEMO</title>
        <meta
          name="title" // @@@
          property="og:title"
          content="FriqTechnology"
        />
        <meta
          name="author"
          property="og:author"
          content="Konrad Pasternak"
        />
        <meta
          name="keywords"
          property="og:keywords" // @@@
          content="FriqTechnology, Demo"
        />
        <meta
          name="description"
          property="og:description"
          content="FriqTechnology Demo Website"
        />
      </Head>

      {/* {!isLoading ? ( */}
        <div className="scroll-smooth grid grid-rows-[1fr_auto] min-h-screen">
          <Header />
          <div>{children}</div>
          <Footer />
        </div>
      {/* ) : null} */}

      {/* <div
        className={twMerge(
          'absolute top-0 left-0 h-screen w-full bg-slate-50 flex gap-2 justify-center items-center transition-opacity',
          isLoading ? 'visible opacity-100' : 'invisible opacity-0'
        )}
      >
        <div className="w-6 h-6 rounded-full animate-bounce duration-600 bg-red-500 delay-0" />
        <div className="w-6 h-6 rounded-full animate-bounce duration-600 bg-amber-500 delay-100" />
        <div className="w-6 h-6 rounded-full animate-bounce duration-600 bg-green-500 delay-200" />
      </div> */}
    </>
  )
}
