import Link from 'next/link'
import {
  AiFillFacebook as IconFacebook,
  AiFillTwitterSquare as IconTwitter,
  AiFillLinkedin as IconLinkedin,
} from 'react-icons/ai'
import { twMerge } from 'tailwind-merge'
import { Slide } from 'react-awesome-reveal'
import { fonts } from '@/utils'
import FriqLogo from './FriqLogo'
// import GridTexture from './GridTexture'
import { Content } from '@/layout'

const CONTENT = {
  'Friq Technology': {
    'O nas': {
      href: '/o-nas',
    },
    'Kontakt': { href: '/kontakt' },
    'Oferta': { href: '/oferta' },
    'Realizacje': { href: '/realizacje' },
    'Kariera': { href: '/kariera' },
    'Sprawdź status zamówień': { href: '/zamowienie' },
  },
  'Oferta': {
    'Sklepy internetowe': { href: '/sklepy-internetowe' },
    'Tworzenie stron internetowych': { href: '/strony-internetowe' },
    'Pozycjonowanie stron WWW': { href: '/pozycjonowanie-stron-internetowych' },
    'Dedykowane systemy': { href: '/dedykowane-systemy' },
    'Opieka nad stroną': { href: '/opieka-nad-strona' },
    'Szablony stron WWW': { href: '/szablony-stron-internetowych' },
  },
  'Usługi dodatkowe': {
    'Optymalizacja wydajności': { href: '/optymalizacja-stron-www' },
    'Google Analytics': { href: '/google-analytics' },
    'Google Moja Firma': { href: '/google-moja-firma' },
    'Certyfikaty SSL': { href: '/certyfikat-ssl' },
    'Optymalizacja SEO': { href: '/optymalizacja-seo' },
    'Poczta email': { href: '/poczta-email' },
  },
  'Strony internetowe Friq': {
    'Resposive Web Design': { href: '/responsive-web-design' },
    'Domeny': { href: '/domeny' },
    'Hosting': { href: '/hosting' },
    'Facebook': { href: 'https://www.facebook.com/friqtechnology/' },
    'Statusy': { href: '/statusy' },
  },
}

export default function Footer() {
  return (
    <div className="relative pb-24 text-white bg-zinc-900 sm:pt-24 lg:py-28">
      {/* <GridTexture
        soft
        className="opacity-70"
      /> */}

      <Content>
        <div className="flex flex-col justify-between gap-8 mx-auto text-sm font-semibold w-fit md:flex-row lg:flex-col 2xl:flex-row 2xl:w-full">
          <div className="flex flex-col gap-8 pt-16 text-sm text-gray-500 w-fit sm:pt-0">
            <Slide triggerOnce={true} duration={2000}>
              <Link
                href="/"
                passHref
              >
                <FriqLogo
                  classNameText="text-3xl lg:text-5xl"
                  classNameDot="lg:w-4 lg:h-4"
                  classNameDots="lg:ml-[3px] lg:gap-2"
                />
              </Link>
            </Slide>

            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2">
                <Link
                  href="https://www.facebook.com/friqtechnology/"
                  aria-label="Facebook"
                  passHref
                >
                  <IconFacebook
                    size={24}
                    className="transition-colors hover:text-white"
                  />
                </Link>

                <IconLinkedin
                  size={24}
                  className="cursor-pointer transition-colors hover:text-white"
                />
                <IconTwitter
                  size={24}
                  className="cursor-pointer transition-colors hover:text-white"
                />
              </div>

              <Link
                href="mailto:kontakt@friqtechnology.com"
                className="transition-colors hover:text-gray-100"
              >
                kontakt@friqtechnology.com
              </Link>
              <Link
                href="tel:+48795787145"
                className="transition-colors hover:text-gray-100"
              >
                +48 795 787 145
              </Link>

              <div className="flex gap-2">
                <span className="cursor-pointer transition-colors hover:text-gray-100">
                  PL
                </span>
                <span className="select-none">/</span>
                <span className="cursor-pointer transition-colors hover:text-gray-100">
                  ENG
                </span>
              </div>
            </div>
          </div>

          <nav className="grid grid-cols-2 gap-6 lg:flex-auto w-fit lg:grid-cols-4">
            {Object.entries(CONTENT).map(
              ([domain, subdomains], domainIndex) => (
                <div key={domainIndex}>
                  <strong
                    className={twMerge(
                      fonts.space.className,
                      'font-bold text-base'
                    )}
                  >
                    {domain.toUpperCase()}
                  </strong>
                  <ul className="flex flex-col gap-3 w-fit mt-3">
                    {Object.entries(subdomains).map(
                      ([subdomain, subdomainDetails], subdomainIndex) => (
                        <li key={subdomainIndex}>
                          <Link
                            href={subdomainDetails.href}
                            className="text-gray-500 hover:text-gray-200 transition-colors"
                          >
                            {subdomain}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )
            )}
          </nav>

          <div className="text-xs text-center text-gray-500 sm:text-end md:hidden lg:block 2xl:hidden hover:text-gray-200 transition-colors">
            <Link href="/sklepy-internetowe">
              © 2024 Sklepy internetowe PrestaShop FriqTechnology.com
            </Link>
          </div>
        </div>

        <div className="hidden mt-8 text-xs text-gray-500 text-end md:block md:mr-[calc((100%_-_777px)_/_2)] lg:mr-0 lg:hidden 2xl:block hover:text-gray-200 transition-colors">
          <Link href="/sklepy-internetowe">
            © 2024 Sklepy internetowe PrestaShop FriqTechnology.com
          </Link>
        </div>
      </Content>
    </div>
  )
}
