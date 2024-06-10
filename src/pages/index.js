// import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { Fade } from 'react-awesome-reveal'
import { AiOutlineClose as IconClose } from 'react-icons/ai'
import { LuPhoneCall as IconPhone } from 'react-icons/lu'
import { LiaLongArrowAltRightSolid as IconRightArrow } from 'react-icons/lia'
import { Content, MainLayout } from '@/layout'
import { Button, GradientIframe, GridTexture } from '@/components'
import { fonts } from '@/utils'

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isContactInitialPress, setIsContactInitialPress] = useState(true)
  const [contactNumber, setContactNumber] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isContactInitialPress) setIsContactOpen(true)
    }, 5000)

    return () => clearTimeout(timeout)
  }, [isContactInitialPress])

  return (
    <main className={twMerge(fonts.inter.className, 'relative')}>
      <MainLayout>
        <button
          className="fixed bg-green-500 w-12 h-12 rounded-full bottom-4 right-4 z-[100] flex items-center justify-center text-white animate-pulse shadow-lg shadow-green-500/50"
          onClick={() => {
            setIsContactOpen(true)
            setIsContactInitialPress(false)
          }}
          aria-label="Contact"
        >
          <IconPhone
            size={24}
            className="mr-[2px]"
          />
        </button>

        <div
          className={twMerge(
            'z-[100] fixed top-0 left-0 w-full h-screen bg-slate-600 bg-opacity-50 items-center justify-center overflow-hidden backdrop-blur-lg transition-all visible flex',
            isContactOpen ? 'opacity-100' : 'invisible opacity-0'
          )}
          onClick={() => setIsContactOpen(false)}
        >
          <div
            className="max-w-[700px] bg-zinc-50 relative p-4 xs:p-8 sm:p-12 rounded-md mx-2 shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 p-2"
              onClick={() => setIsContactOpen(_ => !_)}
            >
              <IconClose size={18} />
            </button>
            <div className="flex flex-col gap-2">
              <h2
                className={twMerge(
                  fonts.space.className,
                  'font-bold tracking-tighter text-4xl sm:text-5xl text-slate-800 py-2 transition-all'
                )}
              >
                <span>Zostaw nam&nbsp;</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-l from-orange-500 to-yellow-500 pr-1">
                  swój numer
                </span>
                <span>, oddzwonimy!</span>
                {/* Zostaw nam swój numer, oddzwonimy! */}
              </h2>
              <p className="font-semibold text-slate-600 mt-2 mb-8">
                W krótkim czasie skontaktujemy się z Tobą, by porozmawiać o
                projekcie. Z chęcią udzielimy odpowiedzi na wszystkie nurtujące
                pytania oraz przedstawimy ofertę na wykonanie Twojej wymarzonej
                strony internetowej.
              </p>
              <div className="flex flex-col gap-2">
                <input
                  className={twMerge(
                    'border-2 border-slate-200 rounded-md p-2 bg-zinc-50 tracking-tight text-xl xs:text-2xl text-slate-800 font-bold placeholder:text-slate-400 placeholder:font-normal',
                    fonts.inter.className
                  )}
                  type="text"
                  placeholder="Numer telefonu"
                  value={contactNumber}
                  onChange={e => setContactNumber(e.target.value)}
                />
                <Button
                  className="rounded-md"
                  onClick={() =>
                    console.info('Numer kontaktowy:', contactNumber)
                  }
                >
                  Proszę o kontakt!
                </Button>
              </div>
            </div>
          </div>
        </div>

        <section className="relative h-[700px] sm:h-[900px] transition-[height]">
          {/* <section className="relative h-[800px] sm:h-[900px] overflow-hidden"> */}
          <div
            // REF:
            //   https://math.stackexchange.com/questions/592701/calculating-dimensions-of-rotated-rectangle-for-it-to-to-mask-original
            //   w_outer = h * sin(deg) + w * cos(deg)
            //   h_outer = w * sin(deg) + h * cos(deg)
            //   w = 100vw
            //   h = 900px
            //   deg = 12deg

            className={twMerge(
              'w-[100%] h-[100%]',
              // 'w-[calc(900px_*_sin(12deg)_+_100vw_*_cos(12deg))] h-[calc(100vw_*_sin(12deg)_+_900px_*_cos(12deg))]',
              'absolute z-[-100] left-0 top-0'
            )}
          >
            <GradientIframe />
          </div>

          {/* @@@ <Rising className="absolute bottom-10 left-1/2 -transform-x-1/2 w-[400px] h-[100px]" /> */}
          <span className="absolute bottom-1/4 left-1/2 sm:left-2/3 -translate-x-1/2 text-slate-700 text-xs font-bold tracking-tight text-opacity-70">
            no image
          </span>

          <Content>
            <div className="absolute top-28 max-w-[450px] md:top-38 md:max-w-[900px]">
              <h1
                className={twMerge(
                  fonts.space.className,
                  'font-extrabold tracking-tighter text-5xl sm:text-7xl md:text-8xl mix-blend-color-burn opacity-80 saturate-200 transition-all'
                )}
              >
                {/* <h1
                className={twMerge(
                  'font-extrabold tracking-tight text-5xl sm:text-7xl md:text-8xl opacity-90 saturate-200 transition-all'
                )}
              > */}
                Sklepy internetowe generujące sprzedaż
              </h1>
              <p className="my-6 text-xl font-bold tracking-tight text-gray-900">
                Kompleksowo budujemy oraz serwisujemy Twój biznes w Internecie.
              </p>
              <Link
                href="/sklepy-internetowe"
                passHref
              >
                <Button className="mr-2 bg-zinc-800 border-zinc-800 hover:bg-zinc-900 hover:border-zinc-900 focus:bg-zinc-900 focus:border-zinc-900 transition-colors">
                  Sklepy online
                </Button>
              </Link>
              <Link
                href="/dedykowane-systemy"
                passHref
              >
                <Button className="bg-zinc-800 border-zinc-800 hover:bg-zinc-900 hover:border-zinc-900 focus:bg-zinc-900 focus:border-zinc-900 transition-colors">
                  Systemy dedykowane
                </Button>
              </Link>
            </div>
          </Content>

          {/* <div className="h-[8px] absolute bottom-0 left-0 w-full border-t-2 border-white border-dashed opacity-30" /> */}
        </section>

        <div className="h-[80px] w-full bg-slate-50 backdrop-blur border-y border-slate-200 sm:h-[60px]">
          <Content className="h-full flex flex-col justify-evenly items-center font-semibold text-slate-600 text-sm sm:flex-row transition">
            <Fade>
              <Link
                href="/oferta"
                passHref
                className="flex items-center gap-1 mr-2 transition-all hover:gap-2 hover:mr-1 sm:p-2"
              >
                <span>Sprawdź naszą ofertę</span>
                <IconRightArrow size={30} />
              </Link>
            </Fade>
            <Fade>
              <Link
                href="/wycena"
                passHref
                className="flex items-center gap-1 mr-2 transition-all hover:gap-2 hover:mr-1 sm:p-2"
              >
                <span>Otrzymaj darmową wycenę</span>
                <IconRightArrow size={30} />
              </Link>
            </Fade>
          </Content>
        </div>

        <section className="bg-slate-100 relative">
          <GridTexture
            heavy
            className="invert opacity-10"
          />

          <Content className="sm:relative sm:grid sm:grid-cols-[300px_auto] sm:gap-2 md:grid-cols-[500px,auto]">
            <div className="grid gap-52 sm:gap-72 py-24 sm:py-36 md:gap-96 md:py-42">
              <Fade>
                <div>
                  <h2
                    className={twMerge(
                      fonts.space.className,
                      'font-bold tracking-tighter text-4xl sm:text-5xl text-slate-800 transition-all',
                      'before:content-[""] before:border-2 before:border-yellow-500 before:block before:w-4 before:mb-2'
                    )}
                  >
                    Sklepy internetowe
                  </h2>
                  <p className="my-4 font-medium text-slate-600">
                    Wykonamy funkcjonalny sklep internetowy, który zachęci
                    Twoich klientów do dokonania zakupu. Dostosujemy
                    kolorystykę, grafiki oraz układ elementów specjalnie pod
                    Twoją branżę, aby zakupy były przyjemne i proste.
                  </p>
                  <Link
                    href="/sklepy-internetowe"
                    passHref
                    className="flex gap-2 items-center text-sm font-bold text-yellow-500 hover:gap-3 transition-all w-fit"
                  >
                    <span>Dowiedz się więcej</span>
                    <IconRightArrow size={22} />
                  </Link>
                </div>
              </Fade>

              <Fade>
                <div>
                  <h2
                    className={twMerge(
                      fonts.space.className,
                      'font-bold tracking-tighter text-4xl sm:text-5xl text-slate-800 transition-all',
                      'before:content-[""] before:border-2 before:border-lime-500 before:block before:w-4 before:mb-2'
                    )}
                  >
                    Strony internetowe
                  </h2>
                  <p className="my-4 font-medium text-slate-600">
                    Oferta specjalnie przygotowana dla małych i średnich firm
                    poszukujących nowych klientów. Statyczne strony internetowe
                    są wizytówką firmy w internecie - przedstawiają
                    najwazniejsze informacje i pozwalają łatwo dotrzeć do Twoich
                    produktów.
                  </p>
                  <Link
                    href="/strony-internetowe"
                    passHref
                    className="flex gap-2 items-center text-sm font-bold text-lime-500 hover:gap-3 transition-all w-fit"
                  >
                    <span>Dowiedz się więcej</span>
                    <IconRightArrow size={22} />
                  </Link>
                </div>
              </Fade>

              <Fade>
                <div>
                  <h2
                    className={twMerge(
                      fonts.space.className,
                      'font-bold tracking-tighter text-4xl sm:text-5xl text-slate-800 transition-all',
                      'before:content-[""] before:border-2 before:border-cyan-500 before:block before:w-4 before:mb-2'
                    )}
                  >
                    Dedykowane systemy
                  </h2>
                  <p className="my-4 font-medium text-slate-600">
                    Potrzebujesz autorskiego oprogramowania stworzonego wprost
                    dla Twojej firmy? Stworzymy system posiadający wszystkie
                    potrzebne funkcje, będzie wydajny, bezpieczny i dostępny z
                    każdego miejsca. Tylko dla Ciebie.
                  </p>
                  <Link
                    href="/dedykowane-systemy"
                    passHref
                    className="flex gap-2 items-center text-sm font-bold text-cyan-500 hover:gap-3 transition-all w-fit"
                  >
                    <span>Dowiedz się więcej</span>
                    <IconRightArrow size={22} />
                  </Link>
                </div>
              </Fade>
            </div>

            <div className="hidden py-36 w-full sm:block sm:relative md:py-42">
              <div className="max-w-[500px] w-[25vw] aspect-square bg-no-repeat flex mx-auto items-center justify-center bg-[url('/shapes/4.svg')] sticky top-1/3">
                <span className="text-slate-700 text-xs font-bold tracking-tight text-opacity-70">
                  no image
                </span>
              </div>
            </div>
          </Content>
        </section>

        <section className="bg-gray-900 py-24 border-y border-slate-900">
          <Content className="text-center max-w-[500px]">
            <Fade>
              <h2
                className={twMerge(
                  fonts.space.className,
                  'font-bold tracking-tighter text-4xl py-2 sm:text-5xl text-slate-200 bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-violet-400 transition-all'
                )}
              >
                Jak działamy?
              </h2>
              <p className="font-medium text-slate-300 my-4 sm:my-6">
                Schemat naszej pracy oparty jest tylko i wyłącznie na
                indywidualnym podejściu do klienta. Każdy wykonywany przez nas
                projekt jest przygotowany specjalnie pod wymagania firmy i
                branży, w jakiej działa.
              </p>
              <Link
                href="/kontakt"
                passHref
                className="font-bold text-sm flex gap-2 items-center justify-center text-slate-300 mr-1 transition-all hover:gap-3 hover:mr-0"
              >
                <span>Skontaktuj się z nami</span>
                <IconRightArrow size={24} />
              </Link>
            </Fade>
          </Content>
        </section>

        <div className="h-[80px] w-full bg-slate-50 backdrop-blur border-y border-slate-200 sm:h-[60px]">
          <Content className="h-full flex flex-col justify-evenly items-center font-semibold text-slate-600 text-sm sm:flex-row transition">
            <Fade>
              <Link
                href="/oferta"
                passHref
                className="flex items-center gap-1 mr-2 transition-all hover:gap-2 hover:mr-1 sm:p-2"
              >
                <span>Sprawdź naszą ofertę</span>
                <IconRightArrow size={30} />
              </Link>
            </Fade>
            <Fade>
              <Link
                href="/wycena"
                passHref
                className="flex items-center gap-1 mr-2 transition-all hover:gap-2 hover:mr-1 sm:p-2"
              >
                <span>Otrzymaj darmową wycenę</span>
                <IconRightArrow size={30} />
              </Link>
            </Fade>
          </Content>
        </div>

        <section className="relative bg-slate-100">
          <GridTexture
            heavy
            className="invert opacity-10"
          />

          <div className="bg-[radial-gradient(transparent_75%,white)]">
            <Content className="py-24 sm:py-28">
              <Fade>
                <div
                  className={twMerge(
                    fonts.space.className,
                    'max-w-[768px] mx-auto mb-24'
                  )}
                >
                  <h2 className="font-bold tracking-tighter text-4xl sm:text-5xl text-slate-800 py-2 transition-all">
                    <span>Szeroki&nbsp;</span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-l from-orange-500 to-yellow-500">
                      zakres działania
                    </span>
                    <span>&nbsp;to nasze drugie imię</span>
                  </h2>
                  <p className="mt-6 font-medium text-slate-600">
                    Od początku istnienia firmy naszym celem było świadczenie
                    kompleksowych usług, bo właśnie całościowa praca nad stroną
                    internetową daje najlepsze efekty.
                  </p>
                </div>
              </Fade>

              <div className="flex flex-wrap justify-center gap-8">
                {[
                  {
                    image: 'bg-[url("/shapes/1.svg")]',
                    color: 'group-hover:bg-amber-100',
                    title: 'Domeny',
                    desc: 'Twoja strona internetowa będzie posiadać swoją własną, unikalną nazwę. Oferujemy wiele rozszerzeń, takich jak .pl, .eu czy .com.',
                    cta: 'Więcej o domenach',
                    href: '/domeny',
                  },
                  {
                    image: 'bg-[url("/shapes/2.svg")]',
                    color: 'group-hover:bg-rose-100',
                    title: 'Serwery WWW',
                    desc: 'Pliki przechowamy na wydajnych serwerach z superszybkimi dyskami SSD oraz dedykowanymi zasobami, dostępnymi na wyłączność.',
                    cta: 'Więcej o serwerach',
                    href: '/hosting',
                  },
                  {
                    image: 'bg-[url("/shapes/3.svg")]',
                    color: 'group-hover:bg-lime-100',
                    title: 'Szablony stron WWW',
                    desc: 'Przygotowujemy nowoczesne i profesjonalne szablony stron stosując złote zasady oraz własne, sprawdzone metody projektowania.',
                    cta: 'Więcej o szablonach stron WWW',
                    href: '/szablony-www',
                  },
                  {
                    image: 'bg-[url("/shapes/4.svg")]',
                    color: 'group-hover:bg-indigo-100',
                    title: 'Optymalizacja',
                    desc: 'Poprzez wykorzystywane technologie zoptymalizujemy Twoją stronę, aby ładowała się jeszcze szybciej. Nie pozwolimy Twoim klientom czekać.',
                    cta: 'Więcej o optymalizacji',
                    href: '/optymalizacja-stron-www',
                  },
                  {
                    image: 'bg-[url("/shapes/5.svg")]',
                    color: 'group-hover:bg-emerald-100',
                    title: 'Certyfikaty SSL',
                    desc: 'Bezpieczeństwo Twoich klientów to podstawa. Szyfrowane połączenia pozwolą na przesyłanie danych oraz wzbudzą większe zaufanie wśród odwiedzających.',
                    cta: 'Więcej o bezpieczeństwie',
                    href: '/certyfikat-ssl',
                  },
                  {
                    image: 'bg-[url("/shapes/6.svg")]',
                    color: 'group-hover:bg-fuchsia-100',
                    title: 'Dostosowanie pod SEO',
                    desc: 'Indeksacja Twojej strony w wyszukiwarkach to pierwszy krok umożliwiający znalezienie Cię w internecie i zdobycie przewagi nad konkurencją.',
                    cta: 'Więcej o optymalizacji SEO',
                    href: '/optymalizacja-seo',
                  },
                  {
                    image: 'bg-[url("/shapes/7.svg")]',
                    color: 'group-hover:bg-orange-100',
                    title: 'Narzędzia analizy',
                    desc: 'Zbieraj informacje o odwiedzających w usłudze Google Analytics. Pozwól sobie poznać potrzeby swoich klientów, aby móc lepiej dostosować ofertę.',
                    cta: 'Więcej o Google Analytics',
                    href: '/google-analytics',
                  },
                  {
                    image: 'bg-[url("/shapes/8.svg")]',
                    color: 'group-hover:bg-teal-100',
                    title: 'Opieka nad stroną',
                    desc: 'Zaopiekujemy się Twoją stroną przez 7 dni w tygodniu. Wprowadzimy zmiany na Twoje życzenie. Będziemy monitorować status działania 24 godziny na dobę.',
                    cta: 'Więcej o usłudze opieki',
                    href: '/opiekan-nad-strona',
                  },
                  {
                    image: 'bg-[url("/shapes/9.svg")]',
                    color: 'group-hover:bg-red-100',
                    title: 'Technologia RWD',
                    desc: 'W XXI wieku coraz więcej osób korzysta ze smartfonów. Tworzone przez nas strony są dostosowane do urządzeń mobilnych, aby korzystanie było równie proste.',
                    cta: 'Więcej o RWD',
                    href: '/responsive-web-design',
                  },
                ].map((card, cardIndex) => (
                  <Fade key={cardIndex}>
                    <div className="shadow-lg group bg-white p-1 rounded-lg h-[420px] max-w-[400px] transition-all ease-out duration-300 grid grid-rows-[50%_auto] hover:grid-rows-[40%_auto]">
                      <div
                        className={twMerge(
                          'bg-slate-50 rounded-lg transition-all duration-300 flex justify-center items-center',
                          card.color
                        )}
                      >
                        <div
                          className={twMerge(
                            card.image,
                            'w-[100px] h-[100px] bg-no-repeat flex items-center justify-center'
                          )}
                        >
                          <span className="text-slate-700 text-xs font-bold tracking-tight text-opacity-70">
                            no image
                          </span>
                        </div>
                      </div>
                      <div className="p-4 relative">
                        <h3
                          className={twMerge(
                            fonts.space.className,
                            'mb-3 font-bold tracking-tight text-3xl text-slate-800'
                          )}
                        >
                          {card.title}
                        </h3>
                        <p className="font-medium text-slate-600">
                          {card.desc}
                        </p>
                        <Link
                          href={card.href}
                          passHref
                          className="flex gap-1 mr-1 text-sm font-bold text-blue-500 absolute bottom-6 invisible opacity-0 transition-all group-hover:visible group-hover:opacity-100 hover:gap-2 hover:mr-0"
                        >
                          <span>{card.cta}</span>
                          <IconRightArrow size={22} />
                        </Link>
                      </div>
                    </div>
                  </Fade>
                ))}
              </div>
            </Content>
          </div>
        </section>
      </MainLayout>
    </main>
  )
}
