import { useState } from 'react'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { Content } from '@/layout'
import { fonts } from '@/utils'
import FriqLogo from './FriqLogo'
import MenuBurger from './MenuBurger'
import Button from './Button'
import NavigationMenu from './NavigationMenu'
import ContactBar from './ContactBar'
import GridTexture from './GridTexture'

export default function Header() {
  const [isOpenMobile, setIsOpenMobile] = useState(false)

  return (
    <div
      className={twMerge(
        'z-[100] sticky top-0 left-0 w-full',
        isOpenMobile ? 'bg-transparent' : 'bg-zinc-900'
      )}
    >
      <ContactBar />

      <Content>
        <div className="flex items-center justify-between bg-transparent max-w-screen-2xl h-fit pt-1 pb-2 xl:pt-2 xl:pb-3 ">
          <div className="flex flex-row h-10 rounded-2xl">
            <Link
              href="/"
              passHref
              className="z-20"
            >
              <FriqLogo
                className="mr-4"
                classNameDot={twMerge(
                  'transition-color'
                  // !isOpenMobile && 'bg-white'
                )}
                classNameText={twMerge(
                  'transition-color',
                  // isOpenMobile ? 'text-black' : 'text-white'
                  isOpenMobile ? 'text-zinc-900' : 'text-white'
                )}
              />
            </Link>

            <div className="flex-row items-center hidden gap-2 xl:flex">
              <NavigationMenu>
                <NavigationMenu.List>
                  <Link
                    href="/o-nas"
                    passHref
                    legacyBehavior
                  >
                    <NavigationMenu.Item
                      className={NavigationMenu.triggerStyle()}
                    >
                      <NavigationMenu.Link>O nas</NavigationMenu.Link>
                    </NavigationMenu.Item>
                  </Link>

                  <NavigationMenu.Item
                    className={NavigationMenu.triggerStyle()}
                  >
                    <NavigationMenu.Trigger>
                      Strony internetowe
                    </NavigationMenu.Trigger>

                    {/* Nav 1 */}
                    <NavigationMenu.Content>
                      <div className="w-[500px] flex flex-col flex-wrap">
                        {[
                          {
                            h2: 'Opieka',
                            p: 'Zaopiekujemy się Twoją stroną przez 7 dni w tygodniu. Wprowadzimy zmiany na Twoje życzenie. Będziemy monitorować status działania 24 godziny na dobę.',
                            href: '/opieka-nad-strona',
                          },
                          {
                            h2: 'Pozycjonowanie',
                            p: 'Nasi specjaliści SEO całkowicie za darmo przeanalizują Twoją stronę i przedstawią najbardziej optymalną propozycję.',
                            href: '/pozycjonowanie-stron-internetowych',
                          },
                          {
                            h2: 'Optymalizacja',
                            p: 'Przyspieszymy i zoptymalizujemy działanie Twojej strony internetowej. Nie pozwolimy Twoim odwiedzającym czekać.',
                            href: '/optymalizacja-stron-www',
                          },
                        ].map((item, index) => (
                          <Link
                            key={index}
                            href={item.href}
                            passHref
                          >
                            <div className="hover:bg-zinc-800 p-2 rounded-lg transition-colors cursor-pointer">
                              <h2
                                className={twMerge(
                                  fonts.space.className,
                                  'text-xl'
                                )}
                              >
                                {item.h2}
                              </h2>
                              <p className="font-medium text-zinc-400 py-1">
                                {item.p}
                              </p>
                            </div>
                          </Link>
                        ))}

                        <div className="flex gap-2">
                          <Link
                            href="/domeny"
                            className="hover:bg-zinc-800 w-full py-2 rounded-lg text-center transition-colors"
                          >
                            Domeny
                          </Link>
                          <Link
                            href="/hosting"
                            className="hover:bg-zinc-800 w-full py-2 rounded-lg text-center transition-colors cursor-pointer"
                          >
                            Hosting
                          </Link>
                        </div>

                        <div className="flex gap-1 flex-col bg-zinc-900 rounded-lg">
                          <Link
                            href="/sklepy-internetowe"
                            className="hover:bg-zinc-800 p-2 w-full rounded-lg transition-colors text-base text-zinc-200 block"
                          >
                            Kompleksowe sklepy internetowe
                          </Link>
                          <Link
                            href="/dedykowane-systemy"
                            className="hover:bg-zinc-800 p-2 w-full rounded-lg transition-colors text-base text-zinc-200 block"
                          >
                            Dedykowane systemy
                          </Link>
                        </div>
                      </div>
                    </NavigationMenu.Content>
                  </NavigationMenu.Item>

                  {/* Nav 2 */}
                  <NavigationMenu.Item
                    className={NavigationMenu.triggerStyle()}
                  >
                    <NavigationMenu.Trigger>Oferta</NavigationMenu.Trigger>

                    <NavigationMenu.Content>
                      <div className="w-[750px] grid grid-cols-[220px_auto] gap-2">
                        <div className="bg-zinc-900 rounded-lg">
                          <div className=" font-medium p-3 text-zinc-300">
                            Oferujemy wiele usług, które pomogą Ci zaistnieć w
                            internecie. Na co dzień zajmujemy się realizacją
                            zleceń dla najbardziej wymagających klientów -
                            średnich i dużych firm o zasięgu międzynarodowym,
                            dostarczając najwyższej jakości rozwiązania
                            e-commerce, sukcesywnie zwiększając sprzedaż usług i
                            produktów.
                          </div>
                          <Link
                            href="/kontakt"
                            className="text-center py-2 rounded-lg text-base bg-zinc-800 hover:bg-zinc-700 transition-colors block"
                          >
                            Zadaj nam pytanie
                          </Link>
                        </div>
                        <div className="flex flex-col gap-1">
                          {[
                            {
                              h2: 'Kompleksowe sklepy internetowe',
                              p: 'Już dziś rozszerz swoją działalność na rynek internetowy - my możemy Ci w tym pomóc oferując profesjonalne oprogramowanie e-commerce wraz z wieloma udogodnieniami w ofercie.',
                              href: '/sklepy-internetowe',
                            },
                            {
                              h2: 'Dedykowane systemy',
                              p: 'Dla najbardziej wymagających klientów przygotowaliśmy ofertę oprogramowania dedykowanego - Tworzonego od podstaw specjalnie pod Twoje potrzeby.',
                              href: '/dedykowane-systemy',
                            },
                            {
                              h2: 'Strony internetowe',
                              p: 'Strony internetowe stworzone wprost dla Ciebie i Twojego biznesu. Skorzystaj z oferty stron internetowych w firmie Friq i dotrzyj do nowych klientów.',
                              href: '/strony-internetowe',
                            },
                          ].map((item, index) => (
                            <Link
                              href={item.href}
                              passHref
                              className="hover:bg-zinc-800 px-3 py-1 rounded-lg transition-colors block"
                              key={index}
                            >
                              <h2
                                className={twMerge(
                                  fonts.space.className,
                                  'text-xl'
                                )}
                              >
                                {item.h2}
                              </h2>
                              <p className="font-medium text-zinc-400 py-1">
                                {item.p}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </NavigationMenu.Content>
                  </NavigationMenu.Item>

                  {/* Nav 3 */}
                  <NavigationMenu.Item
                    className={NavigationMenu.triggerStyle()}
                  >
                    <NavigationMenu.Trigger>Usługi</NavigationMenu.Trigger>

                    <NavigationMenu.Content>
                      <div className="w-[550px]">
                        <div>
                          <div className="font-medium text-zinc-400 text-xs text-center mb-1 select-none">
                            Google
                          </div>
                          <Link
                            href="/google-analytics"
                            passHref
                            className="p-2 hover:bg-zinc-800 rounded-lg transition-colors block"
                          >
                            <h2
                              className={twMerge(
                                fonts.space.className,
                                'text-lg'
                              )}
                            >
                              Google Analytics
                            </h2>
                            <p className="font-medium text-zinc-400 py-1">
                              Dowiedz się więcej o odwiedzających Twoją stronę
                              internetową. Zbieraj dane, przeprowadzaj analizy,
                              dostosuj swoją ofertę do wymagań klientów.
                            </p>
                          </Link>
                          <Link
                            href="/google-moja-firma"
                            passHref
                            className="p-2 hover:bg-zinc-800 rounded-lg transition-colors block"
                          >
                            <h2
                              className={twMerge(
                                fonts.space.className,
                                'text-lg'
                              )}
                            >
                              Google Moja Firma
                            </h2>
                            <p className="font-medium text-zinc-400 py-1">
                              Dodanie Twojej firmy do Google My Business pozwoli
                              Ci dotrzeć do nowych klientów. Twoja wizytówka
                              pojawi się, gdy ktoś będzie szukać w pobliżu firmy
                              takiej, jak Twoja.
                            </p>
                          </Link>
                        </div>
                        <div>
                          <div className="font-medium text-zinc-400 text-xs text-center my-1 select-none">
                            Dodatkowe
                          </div>
                          <div className="grid grid-cols-2 justify-items-center">
                            <Link
                              href="/certyfikat-ssl"
                              className="hover:bg-zinc-800 p-2 rounded-lg w-full text-center transition-colors"
                            >
                              Certyfikaty SSL
                            </Link>
                            <Link
                              href="/poczta-email"
                              className="hover:bg-zinc-800 p-2 rounded-lg w-full text-center transition-colors"
                            >
                              Poczta email
                            </Link>
                            <Link
                              href="/responsive-web-design"
                              className="hover:bg-zinc-800 p-2 rounded-lg w-full text-center transition-colors"
                            >
                              Responsive Web Design
                            </Link>
                            <Link
                              href="/optymalizacja-seo"
                              className="hover:bg-zinc-800 p-2 rounded-lg w-full text-center transition-colors"
                            >
                              Optymalizacja SEO
                            </Link>
                          </div>
                        </div>
                      </div>
                    </NavigationMenu.Content>
                  </NavigationMenu.Item>

                  <Link
                    href="/cennik"
                    passHref
                    legacyBehavior
                  >
                    <NavigationMenu.Item
                      className={NavigationMenu.triggerStyle()}
                    >
                      <NavigationMenu.Link>Cennik</NavigationMenu.Link>
                    </NavigationMenu.Item>
                  </Link>

                  <Link
                    href="/realizacje"
                    passHref
                    legacyBehavior
                  >
                    <NavigationMenu.Item
                      className={NavigationMenu.triggerStyle()}
                    >
                      <NavigationMenu.Link>Realizacje</NavigationMenu.Link>
                    </NavigationMenu.Item>
                  </Link>

                  {/* <NavigationMenu.Indicator /> */}
                </NavigationMenu.List>
              </NavigationMenu>
            </div>
          </div>

          <div className="hidden xl:flex">
            <Link
              href="/kontakt"
              passHref
            >
              <Button>Kontakt</Button>
            </Link>
            <Link
              href="/wycena"
              passHref
            >
              <Button className="bg-white text-zinc-900 hover:bg-zinc-200 focus:bg-zinc-200">
                Darmowa wycena
              </Button>
            </Link>
          </div>

          <div className="z-20 p-1 text-white transition-colors bg-zinc-900 rounded-md xl:hidden hover:bg-gray-800 focus:bg-gray-800">
            <MenuBurger
              onToggle={() => setIsOpenMobile(_ => !_)}
              size={14}
              area={24}
              distance="lg"
              className="focus:bg-zinc-800 hover:bg-zinc-800"
            />
          </div>
        </div>
      </Content>

      <div
        className={twMerge(
          'z-10 absolute w-full left-0 overflow-hidden bg-slate-50 top-0 sm:top-6 pt-12 transition-[height]',
          isOpenMobile
            ? 'h-[100vh] sm:h-[calc(100vh-24px)] opacity-100 visible'
            : 'h-[90vh] sm:h-[calc(90vh-24px)] opacity-0 invisible',
          'xl:h-[90vh] xl:opacity-0 xl:invisible'
        )}
      >
        <GridTexture
          heavy
          className="invert opacity-10 -z-20"
        />

        <div className="bg-[radial-gradient(transparent_75%,white)] w-full h-full absolute top-0 left-0 -z-10" />

        <Content>
          <div className="flex flex-col gap-2 pt-4">
            <Link
              href="/o-nas"
              className="w-72 sm:w-96 hover:bg-zinc-200 hover:bg-opacity-50 py-2 rounded-md mx-auto text-lg sm:text-xl font-extrabold text-slate-800 text-center tracking-tight"
            >
              O nas
            </Link>
            <Link
              href="/sklepy-internetowe"
              passHref
              className="w-72 sm:w-96 hover:bg-zinc-200 hover:bg-opacity-50 py-2 rounded-md mx-auto text-lg sm:text-xl font-extrabold text-center tracking-tight"
            >
              <span className="bg-clip-text text-opacity-100 text-transparent bg-gradient-to-l from-orange-500 to-yellow-500">
                Kompleksowe sklepy internetowe
              </span>
            </Link>
            <Link
              href="/strony-internetowe"
              className="w-72 sm:w-96 hover:bg-zinc-200 hover:bg-opacity-50 py-2 rounded-md mx-auto text-lg sm:text-xl font-extrabold text-slate-800 text-center tracking-tight"
            >
              Strony internetowe
            </Link>
            <Link
              href="/dedykowane-systemy"
              className="w-72 sm:w-96 hover:bg-zinc-200 hover:bg-opacity-50 py-2 rounded-md mx-auto text-lg sm:text-xl font-extrabold text-slate-800 text-center tracking-tight"
            >
              Dedykowane systemy
            </Link>
            <Link
              href="/cennik"
              className="w-72 sm:w-96 hover:bg-zinc-200 hover:bg-opacity-50 py-2 rounded-md mx-auto text-lg sm:text-xl font-extrabold text-slate-800 text-center tracking-tight"
            >
              Cennik
            </Link>
            <Link
              href="/realizacje"
              className="w-72 sm:w-96 hover:bg-zinc-200 hover:bg-opacity-50 py-2 rounded-md mx-auto text-lg sm:text-xl font-extrabold text-slate-800 text-center tracking-tight"
            >
              Realizacje
            </Link>
            <Link
              href="/kontakt"
              passHref
              className="mx-auto"
            >
              <Button className="w-72 sm:w-96 rounded-lg">Kontakt</Button>
            </Link>
            <Link
              href="/wycena"
              passHref
              className="mx-auto"
            >
              <Button className="w-72 sm:w-96 rounded-lg">
                Darmowa wycena
              </Button>
            </Link>
          </div>
        </Content>
      </div>
    </div>
  )
}
