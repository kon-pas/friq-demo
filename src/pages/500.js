import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { Fade } from 'react-awesome-reveal'
import { LiaLongArrowAltLeftSolid as IconLeftArrow } from 'react-icons/lia'
import { MainLayout } from '@/layout'
import { fonts } from '@/utils'
import { GridTexture } from '@/components'

export default function Error500() {
  return (
    <main className={fonts.inter.className}>
      <MainLayout>
        <div className="relative h-[75vh] w-full flex flex-col gap-4 items-center justify-center bg-[radial-gradient(transparent_75%,white)]">
          <GridTexture
            soft
            className="invert opacity-30 -z-20"
          />

          <div className='bg-[url("/shapes/8.svg")] opacity-20 -z-10 overflow-hidden absolute mb-10 sm:mb-6 w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] lg:w-[700px] lg:h-[700px] bg-no-repeat flex items-center justify-center  animate-[spin_60s_linear_infinite]' />

          <Fade>
            <h1 className="font-black text-center">
              <span
                className={twMerge(
                  fonts.inter.className,
                  'text-9xl block bg-clip-text text-opacity-100 text-transparent bg-gradient-to-l from-orange-500 to-yellow-500'
                )}
              >
                500
              </span>
              <span
                className={twMerge(
                  fonts.space.className,
                  'font-extrabold text-4xl text-slate-600 tracking-tight'
                )}
              >
                Coś poszło nie tak!
              </span>
            </h1>
            <Link
              href="/"
              className="flex items-center text-lg font-extrabold text-slate-600 tracking-tight group"
              passHref
            >
              <IconLeftArrow
                size={32}
                className="mr-0 ml-2 transition-all group-hover:ml-0 group-hover:mr-2"
              />
              <span>Strona główna</span>
            </Link>
          </Fade>
        </div>
      </MainLayout>
    </main>
  )
}
